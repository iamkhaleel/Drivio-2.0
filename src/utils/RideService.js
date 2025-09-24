import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getDistance } from 'geolib';

// Calculate distance between two points in kilometers
export const calculateDistance = (point1, point2) => {
  if (!point1 || !point2) return Infinity;
  return (
    getDistance(
      { latitude: point1.latitude, longitude: point1.longitude },
      { latitude: point2.latitude, longitude: point2.longitude },
    ) / 1000
  ); // Convert meters to kilometers
};

// Find nearby available drivers
export const findNearbyDrivers = async (userLocation, maxDistance = 5) => {
  try {
    const driversRef = firestore().collection('drivers');
    const availableDrivers = await driversRef
      .where('isAvailable', '==', true)
      .where('isOnline', '==', true)
      .get();

    return availableDrivers.docs
      .map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Normalize display name for UI
          driverName:
            data.driverName ||
            data.fullName ||
            data.username ||
            'Unknown Driver',
          distance: calculateDistance(userLocation, data.currentLocation),
          // Ensure bank details are included
          bankAccount: data.bankAccount,
          bankName: data.bankName,
          bankAccountName: data.bankAccountName,
        };
      })
      .filter(driver => driver.distance <= maxDistance)
      .sort((a, b) => a.distance - b.distance);
  } catch (error) {
    console.error('Error finding nearby drivers:', error);
    throw error;
  }
};

// Create a new ride request
export const createRideRequest = async ({
  pickup,
  destination,
  riderId,
  estimatedFare,
  paymentMethod,
}) => {
  try {
    const rideRef = await firestore().collection('rides').add({
      pickup,
      destination,
      riderId,
      estimatedFare,
      paymentMethod,
      status: 'pending',
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });

    return rideRef.id;
  } catch (error) {
    console.error('Error creating ride request:', error);
    throw error;
  }
};

// Update driver's location and status
export const updateDriverStatus = async (
  driverId,
  location,
  isAvailable = true,
) => {
  try {
    await firestore().collection('drivers').doc(driverId).update({
      currentLocation: location,
      isAvailable,
      // Keep online flag in sync with availability so riders can find drivers
      isOnline: isAvailable,
      lastUpdated: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating driver status:', error);
    throw error;
  }
};

// Get ride history for user (both rider and driver)
export const getRideHistory = async (userId, userType = 'rider') => {
  try {
    const ridesRef = firestore().collection('rides');
    const query =
      userType === 'driver'
        ? ridesRef.where('driverId', '==', userId)
        : ridesRef.where('riderId', '==', userId);

    const rides = await query.orderBy('createdAt', 'desc').limit(20).get();

    return rides.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting ride history:', error);
    throw error;
  }
};

// Update driver earnings and ride status
export const updateRideComplete = async (rideId, driverId, fare) => {
  try {
    const batch = firestore().batch();

    // Update ride status
    const rideRef = firestore().collection('rides').doc(rideId);
    batch.update(rideRef, {
      status: 'completed',
      completedAt: firestore.FieldValue.serverTimestamp(),
      actualFare: fare,
    });

    // Update driver earnings
    const driverRef = firestore().collection('drivers').doc(driverId);
    const driverDoc = await driverRef.get();
    const currentEarnings = driverDoc.data().totalEarnings || 0;

    batch.update(driverRef, {
      totalEarnings: currentEarnings + fare,
      totalRides: firestore.FieldValue.increment(1),
    });

    await batch.commit();
  } catch (error) {
    console.error('Error completing ride:', error);
    throw error;
  }
};

// Listen to ride status changes
export const subscribeToRide = (rideId, callback) => {
  return firestore()
    .collection('rides')
    .doc(rideId)
    .onSnapshot(snapshot => {
      callback({ id: snapshot.id, ...snapshot.data() });
    });
};

// Calculate fare based on distance (example formula)
export const calculateFare = distanceKm => {
  const baseFare = 2;
  const perKm = 1.5;
  return baseFare + distanceKm * perKm;
};

// Listen for nearby ride requests for a driver
export const subscribeToNearbyRequests = (
  driverLocation,
  maxDistance = 5,
  callback,
) => {
  return firestore()
    .collection('rides')
    .where('status', '==', 'pending')
    .onSnapshot(snapshot => {
      const requests = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
          distance: calculateDistance(driverLocation, doc.data().pickup),
          // Add fare calculation for display
          fare:
            doc.data().estimatedFare ||
            calculateFare(calculateDistance(driverLocation, doc.data().pickup)),
        }))
        .filter(req => req.distance <= maxDistance);
      callback(requests);
    });
};

// Check if rider already has a pending request
export const hasPendingRequest = async riderId => {
  try {
    const pendingRequest = await firestore()
      .collection('rides')
      .where('riderId', '==', riderId)
      .where('status', '==', 'pending')
      .get();

    return !pendingRequest.empty;
  } catch (error) {
    console.error('Error checking pending request:', error);
    return false;
  }
};

// Driver accepts a request
export const acceptRideRequest = async (rideId, driverId) => {
  try {
    await firestore().collection('rides').doc(rideId).update({
      driverId,
      status: 'accepted',
      acceptedAt: firestore.FieldValue.serverTimestamp(),
    });
    await firestore().collection('drivers').doc(driverId).update({
      isAvailable: false, // Busy now
    });
  } catch (error) {
    console.error('Error accepting ride:', error);
    throw error;
  }
};

// Driver declines (just log for now, or update status if needed)
export const declineRideRequest = async rideId => {
  // Optionally update ride to 'declined' or remove
  console.log(`Declined ride ${rideId}`);
};

// Rate ride and update driver rating
export const rateRide = async (rideId, driverId, rating, review = '') => {
  try {
    const batch = firestore().batch();

    // Update ride rating
    const rideRef = firestore().collection('rides').doc(rideId);
    batch.update(rideRef, {
      rating,
      review,
      ratedAt: firestore.FieldValue.serverTimestamp(),
    });

    // Update driver's average rating
    const driverRef = firestore().collection('drivers').doc(driverId);
    const driverDoc = await driverRef.get();
    const currentRating = driverDoc.data().rating || 0;
    const totalRatings = driverDoc.data().totalRatings || 0;
    const newRating =
      (currentRating * totalRatings + rating) / (totalRatings + 1);

    batch.update(driverRef, {
      rating: newRating,
      totalRatings: firestore.FieldValue.increment(1),
    });

    await batch.commit();
  } catch (error) {
    console.error('Error rating ride:', error);
    throw error;
  }
};

// Driver confirms payment received
export const confirmPaymentReceived = async (rideId, paymentId) => {
  try {
    const batch = firestore().batch();

    // Update payment status
    const paymentRef = firestore().collection('payments').doc(paymentId);
    batch.update(paymentRef, {
      status: 'completed',
      confirmedAt: firestore.FieldValue.serverTimestamp(),
    });

    // Update ride status
    const rideRef = firestore().collection('rides').doc(rideId);
    const rideDoc = await rideRef.get();
    const rideData = rideDoc.data();

    batch.update(rideRef, {
      status: 'completed',
      paymentConfirmed: true,
      completedAt: firestore.FieldValue.serverTimestamp(),
    });

    // Update driver earnings
    const driverRef = firestore().collection('drivers').doc(rideData.driverId);
    const driverDoc = await driverRef.get();
    const currentEarnings = driverDoc.data().totalEarnings || 0;

    batch.update(driverRef, {
      totalEarnings: currentEarnings + rideData.estimatedFare,
      totalRides: firestore.FieldValue.increment(1),
      isAvailable: true, // Driver becomes available again
    });

    await batch.commit();
  } catch (error) {
    console.error('Error confirming payment:', error);
    throw error;
  }
};

// Get pending payments for a driver
export const getPendingPayments = async driverId => {
  try {
    const payments = await firestore()
      .collection('payments')
      .where('driverId', '==', driverId)
      .where('status', '==', 'pending')
      .get();

    return payments.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching pending payments:', error);
    throw error;
  }
};

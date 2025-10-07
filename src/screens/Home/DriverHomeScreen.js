import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DrawerLayout } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Geolocation from '@react-native-community/geolocation';
import {
  updateDriverStatus,
  subscribeToNearbyRequests,
  acceptRideRequest,
  declineRideRequest,
  getPendingPayments,
  confirmPaymentReceived,
} from '../../utils/RideService';
import { useLanguage } from '../../context/LanguageContext';

const { width } = Dimensions.get('window');

export default function DriverHomeScreen({ navigation }) {
  const { t, language, setLanguage } = useLanguage();
  const driverId = auth().currentUser?.uid;
  const [driverData, setDriverData] = useState({
    name: 'Loading...',
    profileImageUrl: 'https://via.placeholder.com/150',
    vehicleOwner: 'Loading...',
    vehicleName: 'Loading...',
    totalEarnings: 0,
  });
  const [isAvailable, setIsAvailable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [currentRide, setCurrentRide] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const mapRef = useRef(null);

  // Fetch driver data
  useEffect(() => {
    if (!driverId) return;
    const unsubscribe = firestore()
      .collection('drivers')
      .doc(driverId)
      .onSnapshot(
        doc => {
          if (doc.exists) {
            const data = doc.data();
            setDriverData({
              name: data.fullName || 'Unknown Driver',
              profileImageUrl:
                data.driverImage || 'https://via.placeholder.com/150',
              vehicleOwner: data.fullName || 'Unknown Owner',
              vehicleName: data.carModel || 'Unknown Vehicle',
              totalEarnings: data.totalEarnings || 0,
            });
            setIsAvailable(data.isAvailable || false);
          } else {
            Alert.alert('Error', 'Driver profile not found in Firestore.');
          }
        },
        error => console.error('Error fetching driver data:', error),
      );
    return unsubscribe;
  }, [driverId]);

  // Track and update location
  useEffect(() => {
    if (!driverId) return;
    const watchId = Geolocation.watchPosition(
      position => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setCurrentLocation(newLocation);
        if (isAvailable) {
          updateDriverStatus(driverId, newLocation, true).catch(err =>
            console.error('Error updating status:', err),
          );
        }
      },
      error => console.log('Geolocation error:', error),
      { enableHighAccuracy: true, distanceFilter: 10 },
    );
    return () => Geolocation.clearWatch(watchId);
  }, [isAvailable, driverId]);

  // Listen to nearby ride requests
  useEffect(() => {
    let unsubscribe = () => {};
    if (isAvailable && currentLocation) {
      unsubscribe = subscribeToNearbyRequests(currentLocation, 5, requests => {
        setPendingRequests(requests);
        setCurrentRide(requests.length > 0 ? requests[0] : null);
      });
    } else {
      setPendingRequests([]);
      setCurrentRide(null);
    }
    return unsubscribe;
  }, [isAvailable, currentLocation]);

  // Fetch pending payments
  useEffect(() => {
    if (!driverId) return;

    const fetchPendingPayments = async () => {
      try {
        const payments = await getPendingPayments(driverId);
        setPendingPayments(payments);
      } catch (error) {
        console.error('Error fetching pending payments:', error);
      }
    };

    fetchPendingPayments();

    // Set up interval to check for pending payments every 30 seconds
    const interval = setInterval(fetchPendingPayments, 30000);

    return () => clearInterval(interval);
  }, [driverId]);

  // Toggle availability
  const toggleAvailability = async () => {
    if (!driverId) {
      Alert.alert('Error', 'Driver ID not found.');
      return;
    }
    const newStatus = !isAvailable;
    setIsAvailable(newStatus);
    try {
      await updateDriverStatus(driverId, currentLocation, newStatus);
      console.log('Availability updated:', newStatus);
    } catch (error) {
      console.error('Error updating availability:', error);
      Alert.alert('Error', 'Could not update availability.');
      setIsAvailable(!newStatus); // revert
    }
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      drawerRef.current.closeDrawer();
    } else {
      drawerRef.current.openDrawer();
    }
    setDrawerOpen(!drawerOpen);
  };

  const handleAcceptRide = async (rideId = null) => {
    const targetRideId = rideId || currentRide?.id;
    if (!targetRideId) return;

    const targetRequest = pendingRequests.find(req => req.id === targetRideId);
    if (!targetRequest) return;

    try {
      await acceptRideRequest(targetRideId, driverId);
      // Remove from pending requests
      setPendingRequests(prev => prev.filter(req => req.id !== targetRideId));
      // Clear current ride if it was the accepted one
      if (currentRide?.id === targetRideId) {
        setCurrentRide(null);
      }

      // Fetch rider's username for a friendlier alert
      const riderUserDoc = await firestore()
        .collection('users')
        .doc(targetRequest.riderId)
        .get();
      const riderName =
        riderUserDoc.data()?.username ||
        riderUserDoc.data()?.fullName ||
        'the rider';
      Alert.alert(
        'Ride Accepted',
        `You accepted the ride request from ${riderName}.`,
      );
    } catch (error) {
      console.error('Error accepting ride:', error);
      Alert.alert('Error', 'Failed to accept ride.');
    }
  };

  const handleDeclineRide = async (rideId = null) => {
    const targetRideId = rideId || currentRide?.id;
    if (!targetRideId) return;
    try {
      await declineRideRequest(targetRideId);
      Alert.alert('Ride Declined', 'You have declined the ride request.');
      // Remove from pending requests
      setPendingRequests(prev => prev.filter(req => req.id !== targetRideId));
      // If this was the current ride, clear it
      if (currentRide?.id === targetRideId) {
        setCurrentRide(null);
      }
    } catch (error) {
      console.error('Error declining ride:', error);
      Alert.alert('Error', 'Failed to decline ride.');
    }
  };

  const handleConfirmPayment = async payment => {
    try {
      Alert.alert(
        'Confirm Payment',
        `Confirm that you have received $${payment.amount} from the rider?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: async () => {
              try {
                await confirmPaymentReceived(payment.rideId, payment.id);
                setPendingPayments(prev =>
                  prev.filter(p => p.id !== payment.id),
                );
                Alert.alert(
                  'Payment Confirmed',
                  'Payment has been confirmed and added to your earnings.',
                );
              } catch (error) {
                console.error('Error confirming payment:', error);
                Alert.alert('Error', 'Failed to confirm payment.');
              }
            },
          },
        ],
      );
    } catch (error) {
      console.error('Error handling payment confirmation:', error);
      Alert.alert('Error', 'Failed to process payment confirmation.');
    }
  };

  // Drawer view
  const renderNavigationView = () => (
    <View style={styles.drawer}>
      <LinearGradient
        colors={['#000', '#1a1a1a']}
        style={styles.drawerContainer}
      >
        <View style={styles.drawerHeader}>
          <Image
            source={{ uri: driverData.profileImageUrl }}
            style={styles.drawerProfileImage}
          />
          <Text style={styles.drawerProfileName}>{driverData.name}</Text>
          <Text style={styles.drawerProfileStatus}>
            {isAvailable ? t('availableForWork') : t('offline')}
          </Text>
        </View>
        <View style={styles.drawerSection}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('EarningHistory');
            }}
          >
            <Icon name="wallet" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>{t('earningsHistory')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('Withdrawal');
            }}
          >
            <Icon name="money-check" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>{t('withdrawEarnings')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('ProfileSettingsScreen');
            }}
          >
            <Icon name="user-cog" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>{t('profileSettings')}</Text>
          </TouchableOpacity>

          {/* Language Selector */}
          <View style={styles.drawerItem}>
            <Icon name="language" size={20} color="#fff" />
            <Text style={[styles.drawerItemText, { flex: 1 }]}>
              {t('language')}
            </Text>
            <TouchableOpacity
              onPress={() => setLanguage('en')}
              style={{ marginHorizontal: 8 }}
            >
              <Text
                style={[
                  styles.drawerItemText,
                  { color: language === 'en' ? '#A91079' : '#fff' },
                ]}
              >
                {t('english')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLanguage('ar')}>
              <Text
                style={[
                  styles.drawerItemText,
                  { color: language === 'ar' ? '#A91079' : '#fff' },
                ]}
              >
                {t('arabic')}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              auth()
                .signOut()
                .then(() => navigation.replace('Login'));
            }}
          >
            <Icon name="sign-out-alt" size={20} color="#ff3b30" />
            <Text style={[styles.drawerItemText, { color: '#ff3b30' }]}>
              {t('logout')}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <DrawerLayout
        ref={drawerRef}
        drawerWidth={width * 0.8}
        drawerPosition="left"
        renderNavigationView={renderNavigationView}
        drawerBackgroundColor="transparent"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
              <Icon name="bars" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerName}>{driverData.name}</Text>
              <Text style={styles.headerStatus}>
                {isAvailable ? t('available') : t('offline')}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: isAvailable ? '#FF3B30' : '#00FF6A',
                alignSelf: 'flex-end',
                marginBottom: 5,
                marginStart: 20,
                borderRadius: 15,
                padding: 10,
              }}
              onPress={toggleAvailability}
            >
              <Text style={styles.availabilityButtonText}>
                {isAvailable ? t('goOffline') : t('goOnline')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={currentLocation}
              showsUserLocation={true}
              followsUserLocation={true}
            >
              <Marker coordinate={currentLocation} />
            </MapView>
            {/* <TouchableOpacity
              style={[
                styles.availabilityButton,
                { backgroundColor: isAvailable ? '#FF3B30' : '#00FF6A' },
              ]}
              onPress={toggleAvailability}
            >
              <Text style={styles.availabilityButtonText}>
                {isAvailable ? 'Go Offline' : 'Go Online'}
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.bottomPanel}>
            <View style={styles.earningsCard}>
              <View style={styles.earningsHeader}>
                <View style={styles.earningsInfo}>
                  <Text style={styles.earningsLabel}>{t('totalEarnings')}</Text>
                  <Text style={styles.earningsAmount}>
                    ${driverData.totalEarnings}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EarningHistory')}
                  >
                    <Text style={styles.detailsLink}>{t('viewDetails')}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.vehicleInfo}>
                  <Text style={styles.vehicleLabel}>{t('yourVehicle')}</Text>
                  <Text style={styles.vehicleName}>
                    {driverData.vehicleName}
                  </Text>
                </View>
              </View>
            </View>
            {pendingRequests.length > 0 ? (
              <View style={styles.requestsContainer}>
                <Text style={styles.requestsTitle}>
                  🚖 {t('rideRequests')} ({pendingRequests.length})
                </Text>
                {pendingRequests.map((request, index) => (
                  <View key={request.id} style={styles.rideCard}>
                    <Text style={styles.rideCardTitle}>
                      {t('requestHash')}
                      {index + 1}
                    </Text>

                    <Text style={styles.rideDestination}>
                      {typeof request.destination === 'string'
                        ? request.destination
                        : request.destination?.address ||
                          `${request.destination?.latitude?.toFixed(
                            5,
                          )}, ${request.destination?.longitude?.toFixed(5)}`}
                    </Text>

                    <View style={styles.rideInfoContainer}>
                      <View style={styles.rideInfo}>
                        <Text style={styles.rideInfoLabel}>
                          {t('distance')}
                        </Text>
                        <Text style={styles.rideInfoValue}>
                          {request.distance?.toFixed(2)} km
                        </Text>
                      </View>
                      <View style={styles.rideInfo}>
                        <Text style={styles.rideInfoLabel}>{t('fare')}</Text>
                        <Text style={styles.rideInfoValue}>
                          ${request.fare?.toFixed(2)}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.rideActionsModern}>
                      <TouchableOpacity
                        style={styles.declineButton}
                        onPress={() => handleDeclineRide(request.id)}
                      >
                        <Icon name="times-circle" size={20} color="#fff" />
                        <Text style={styles.actionButtonText}>
                          {t('decline')}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.acceptButton}
                        onPress={() => handleAcceptRide(request.id)}
                      >
                        <Icon name="check-circle" size={20} color="#fff" />
                        <Text style={styles.actionButtonText}>
                          {t('accept')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.noRideContainer}>
                <Text style={styles.noRideText}>{t('noRideRequests')}</Text>
                <Text style={styles.noRideSubtext}>
                  {t('turnOnAvailability')}
                </Text>
              </View>
            )}

            {/* Pending Payments Section */}
            {pendingPayments.length > 0 && (
              <View style={styles.pendingPaymentsContainer}>
                <Text style={styles.pendingPaymentsTitle}>
                  💰 {t('pendingPayments')} ({pendingPayments.length})
                </Text>
                {pendingPayments.map((payment, index) => (
                  <View key={payment.id} style={styles.paymentCard}>
                    <View style={styles.paymentInfo}>
                      <Text style={styles.paymentAmount}>
                        ${payment.amount}
                      </Text>
                      <Text style={styles.paymentStatus}>
                        {t('waitingForConfirmation')}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.confirmPaymentButton}
                      onPress={() => handleConfirmPayment(payment)}
                    >
                      <Icon name="check-circle" size={20} color="#fff" />
                      <Text style={styles.confirmPaymentButtonText}>
                        {t('paymentReceived')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </DrawerLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 20,
  },

  // ===== Header =====
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
  },
  menuButton: {
    position: 'absolute',
    left: 15,
    padding: 5,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerStatus: {
    color: '#ccc',
    fontSize: 14,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileStatus: {
    color: '#ccc',
    fontSize: 12,
  },

  // ===== Map =====
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  driverMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },

  // ===== Availability Button =====
  availabilityButton: {
    position: 'absolute',
    top: 120,
    right: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 10,
  },
  availabilityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // ===== Bottom Panel =====
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  // ===== Earnings Card =====
  earningsCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  earningsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  earningsInfo: {
    flex: 1,
  },
  earningsLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  earningsAmount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsLink: {
    color: '#0066FF',
    fontSize: 14,
  },
  vehicleInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  vehicleLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  changeLink: {
    color: '#0066FF',
    fontSize: 14,
  },

  // ===== Modern Ride Card =====
  rideCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  rideCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  // Rider Profile inside ride card
  rideProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rideProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  rideProfileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  rideProfileRating: {
    fontSize: 13,
    color: '#666',
  },

  rideDestination: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 20,
  },
  rideInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rideInfo: {
    alignItems: 'center',
  },
  rideInfoLabel: {
    color: '#666',
    fontSize: 13,
    marginBottom: 5,
  },
  rideInfoValue: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rideActionsModern: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  declineButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    marginRight: 10,
    borderRadius: 10,
  },
  acceptButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34C759',
    paddingVertical: 14,
    borderRadius: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },

  // ===== No Ride =====
  noRideContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  noRideText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  noRideSubtext: {
    fontSize: 14,
    color: '#999',
  },

  // ===== Drawer =====
  drawer: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
  },
  drawerHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  drawerProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  drawerProfileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  drawerProfileStatus: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 20,
  },
  getInTouchButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  getInTouchButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  drawerSection: {
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 15,
  },
  requestsContainer: {
    marginBottom: 20,
  },
  requestsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  pendingPaymentsContainer: {
    marginBottom: 20,
  },
  pendingPaymentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  paymentInfo: {
    flex: 1,
  },
  paymentAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00C851',
    marginBottom: 5,
  },
  paymentStatus: {
    fontSize: 14,
    color: '#666',
  },
  confirmPaymentButton: {
    backgroundColor: '#00C851',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmPaymentButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

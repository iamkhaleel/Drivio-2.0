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
} from '../../utils/RideService';

const { width } = Dimensions.get('window');

export default function DriverHomeScreen({ navigation }) {
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
        setCurrentRide(requests.length > 0 ? requests[0] : null);
      });
    } else {
      setCurrentRide(null);
    }
    return unsubscribe;
  }, [isAvailable, currentLocation]);

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

  const handleAcceptRide = async () => {
    if (!currentRide) return;
    try {
      await acceptRideRequest(currentRide.id, driverId);
      // Immediately hide the request card
      setCurrentRide(prev => (prev ? { ...prev, status: 'accepted' } : prev));
      // Fetch rider's username for a friendlier alert
      const riderUserDoc = await firestore()
        .collection('users')
        .doc(currentRide.riderId)
        .get();
      const riderName =
        riderUserDoc.data()?.username ||
        riderUserDoc.data()?.fullName ||
        'the rider';
      Alert.alert(
        'Ride Accepted',
        `You accepted the ride request from ${riderName}.`,
      );
      // No-op: card already hidden
    } catch (error) {
      console.error('Error accepting ride:', error);
      Alert.alert('Error', 'Failed to accept ride.');
    }
  };

  const handleDeclineRide = async () => {
    if (!currentRide) return;
    try {
      await declineRideRequest(currentRide.id);
      Alert.alert('Ride Declined', 'You have declined the ride request.');
      setCurrentRide(null);
    } catch (error) {
      console.error('Error declining ride:', error);
      Alert.alert('Error', 'Failed to decline ride.');
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
            {isAvailable ? 'Available for work' : 'Offline'}
          </Text>
        </View>
        <View style={styles.drawerSection}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('EarningsHistory');
            }}
          >
            <Icon name="wallet" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>Earnings History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('Withdrawal');
            }}
          >
            <Icon name="money-check" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>Withdraw Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              drawerRef.current.closeDrawer();
              navigation.navigate('ProfileSettings');
            }}
          >
            <Icon name="user-cog" size={20} color="#fff" />
            <Text style={styles.drawerItemText}>Profile Settings</Text>
          </TouchableOpacity>
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
              Logout
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
            <View style={styles.profileHeader}>
              <Image
                source={{ uri: driverData.profileImageUrl }}
                style={styles.profileImage}
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>{driverData.name}</Text>
                <Text style={styles.profileStatus}>
                  {isAvailable ? 'Available' : 'Offline'}
                </Text>
              </View>
            </View>
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
            <TouchableOpacity
              style={[
                styles.availabilityButton,
                { backgroundColor: isAvailable ? '#FF3B30' : '#00FF6A' },
              ]}
              onPress={toggleAvailability}
            >
              <Text style={styles.availabilityButtonText}>
                {isAvailable ? 'Go Offline' : 'Go Online'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomPanel}>
            <View style={styles.earningsCard}>
              <View style={styles.earningsHeader}>
                <View style={styles.earningsInfo}>
                  <Text style={styles.earningsLabel}>Total Earnings</Text>
                  <Text style={styles.earningsAmount}>
                    ${driverData.totalEarnings}
                  </Text>
                  <Text style={styles.detailsLink}>View details</Text>
                </View>
                <View style={styles.vehicleInfo}>
                  <Text style={styles.vehicleLabel}>Your Vehicle</Text>
                  <Text style={styles.vehicleName}>
                    {driverData.vehicleName}
                  </Text>
                  <Text style={styles.changeLink}>Change</Text>
                </View>
              </View>
            </View>
            {currentRide ? (
              <View style={styles.rideCard}>
                <Text style={styles.rideCardTitle}>New Ride Request</Text>
                <Text style={styles.rideDestination}>
                  {typeof currentRide.destination === 'string'
                    ? currentRide.destination
                    : currentRide.destination?.address ||
                      `${currentRide.destination?.latitude?.toFixed(
                        5,
                      )}, ${currentRide.destination?.longitude?.toFixed(5)}`}
                </Text>
                <View style={styles.rideInfoContainer}>
                  <View style={styles.rideInfo}>
                    <Text style={styles.rideInfoLabel}>Distance</Text>
                    <Text style={styles.rideInfoValue}>
                      {currentRide.distance} km
                    </Text>
                  </View>
                  <View style={styles.rideInfo}>
                    <Text style={styles.rideInfoLabel}>Fare</Text>
                    <Text style={styles.rideInfoValue}>
                      ₦{currentRide.fare}
                    </Text>
                  </View>
                </View>
                <View style={styles.rideActions}>
                  <TouchableOpacity
                    style={styles.rejectButton}
                    onPress={handleDeclineRide}
                  >
                    <Icon name="times" size={24} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.acceptButtonContainer}
                    onPress={handleAcceptRide}
                  >
                    <Text style={styles.swipeText}>Swipe to accept</Text>
                    <Icon name="chevron-right" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.noRideContainer}>
                <Text style={styles.noRideText}>No ride requests</Text>
                <Text style={styles.noRideSubtext}>
                  Turn on availability to receive requests
                </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  menuButton: {
    padding: 5,
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
  availabilityButton: {
    position: 'absolute',
    bottom: 120,
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
  rideCard: {
    backgroundColor: '#00FF6A',
    borderRadius: 15,
    padding: 20,
  },
  rideCardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rideDestination: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
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
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
  rideInfoValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rideActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: '#FF3B30',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  acceptButtonContainer: {
    flex: 1,
    backgroundColor: '#0066FF',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  swipeText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
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
});

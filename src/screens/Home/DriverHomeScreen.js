import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DrawerLayout } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function DriverHomeScreen({ navigation }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [earnings, setEarnings] = useState(459);
  const [currentRide, setCurrentRide] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      drawerRef.current.closeDrawer();
    } else {
      drawerRef.current.openDrawer();
    }
    setDrawerOpen(!drawerOpen);
  };

  const renderNavigationView = () => (
    <View style={styles.drawer}>
      <LinearGradient
        colors={['#000', '#1a1a1a']}
        style={styles.drawerContainer}
      >
        <View style={styles.drawerHeader}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.drawerProfileImage}
          />
          <Text style={styles.drawerProfileName}>Parsa Aghaei</Text>
          <Text style={styles.drawerProfileStatus}>Available for work</Text>
          <TouchableOpacity style={styles.getInTouchButton}>
            <Text style={styles.getInTouchButtonText}>Get in touch</Text>
          </TouchableOpacity>
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
              // Handle logout
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
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
              <Icon name="bars" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.profileHeader}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                }}
                style={styles.profileImage}
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>Parsa Aghaei</Text>
                <Text style={styles.profileStatus}>Available for work</Text>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="heart" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="comment" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Map View */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={currentLocation}
              showsUserLocation={true}
            >
              {/* Current location marker */}
              <Marker coordinate={currentLocation} title="Your Location">
                <Image
                  source={{
                    uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                  }}
                  style={styles.driverMarker}
                />
              </Marker>

              {/* Nearby ride requests */}
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <Marker
                    key={i}
                    coordinate={{
                      latitude:
                        currentLocation.latitude +
                        (Math.random() * 0.02 - 0.01),
                      longitude:
                        currentLocation.longitude +
                        (Math.random() * 0.02 - 0.01),
                    }}
                    pinColor="cyan"
                  />
                ))}
            </MapView>

            {/* Availability Toggle */}
            <View style={styles.availabilityToggle}>
              <Text style={styles.availabilityText}>Availability</Text>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  isAvailable && styles.toggleButtonActive,
                ]}
                onPress={toggleAvailability}
              >
                <View
                  style={[
                    styles.toggleCircle,
                    isAvailable && styles.toggleCircleActive,
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Panel */}
          <View style={styles.bottomPanel}>
            {/* Earnings Card */}
            <View style={styles.earningsCard}>
              <View style={styles.earningsHeader}>
                <View style={styles.earningsInfo}>
                  <Text style={styles.earningsLabel}>Total Earnings</Text>
                  <Text style={styles.earningsAmount}>${earnings}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EarningsDetails')}
                  >
                    <Text style={styles.detailsLink}>Details</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.vehicleInfo}>
                  <Text style={styles.vehicleLabel}>Doll Cook</Text>
                  <Text style={styles.vehicleName}>Toyota Camry</Text>
                  <TouchableOpacity>
                    <Text style={styles.changeLink}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.availabilitySection}>
                <Text style={styles.availabilityLabel}>Availability</Text>
                <Switch
                  value={isAvailable}
                  onValueChange={toggleAvailability}
                  trackColor={{ false: '#767577', true: '#00FF6A' }}
                  thumbColor={isAvailable ? '#fff' : '#f4f3f4'}
                />
              </View>
            </View>

            {/* Current Ride or Ride Request */}
            {currentRide ? (
              <View style={styles.rideCard}>
                <Text style={styles.rideCardTitle}>Destination</Text>
                <Text style={styles.rideDestination}>21 Andrew Ave.</Text>

                <View style={styles.rideInfoContainer}>
                  <View style={styles.rideInfo}>
                    <Text style={styles.rideInfoLabel}>Trip length</Text>
                    <Text style={styles.rideInfoValue}>23Km</Text>
                  </View>
                  <View style={styles.rideInfo}>
                    <Text style={styles.rideInfoLabel}>Your earning</Text>
                    <Text style={styles.rideInfoValue}>$45</Text>
                  </View>
                </View>

                <View style={styles.rideActions}>
                  <TouchableOpacity style={styles.rejectButton}>
                    <Icon name="times" size={20} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.acceptButtonContainer}>
                    <Text style={styles.swipeText}>Swipe to accept ride</Text>
                    <Icon name="chevron-right" size={20} color="#fff" />
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.noRideContainer}>
                <Text style={styles.noRideText}>No current rides</Text>
                <Text style={styles.noRideSubtext}>
                  Waiting for ride requests...
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
    paddingTop: 10, // Reduced top padding since we're using SafeAreaView
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
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
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
  availabilityToggle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  availabilityText: {
    marginRight: 10,
    fontSize: 12,
    color: '#333',
  },
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    padding: 2,
  },
  toggleButtonActive: {
    backgroundColor: '#00FF6A',
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  toggleCircleActive: {
    transform: [{ translateX: 25 }],
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
    fontSize: 36,
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
  availabilitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  availabilityLabel: {
    fontSize: 16,
    color: '#333',
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

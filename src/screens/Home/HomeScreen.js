import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  calculateDistance,
  calculateFare,
  findNearbyDrivers,
  createRideRequest,
  subscribeToRide,
  updateRideComplete,
} from '../../utils/RideService';
import 'react-native-get-random-values';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyDVHGYwW8ZjOxqLDxNjhp4LGBSer3K4o-g';

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [showRides, setShowRides] = useState(false);
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [distance, setDistance] = useState(null);
  const [estimatedFare, setEstimatedFare] = useState(null);
  const [rideStatus, setRideStatus] = useState(null);
  const [loadingDrivers, setLoadingDrivers] = useState(false);

  const [rideId, setRideId] = useState(null);
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  // Check internet connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  // Get user location
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setLocation(newLocation);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  const handlePress = selectedLocation => {
    setDestination(selectedLocation);

    if (location && selectedLocation) {
      const calculatedDistance = calculateDistance(location, selectedLocation);
      setDistance(calculatedDistance);
      const fare = calculateFare(calculatedDistance);
      setEstimatedFare(fare);

      const coordinates = [location, selectedLocation];
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  };

  const handleGoButtonPress = async () => {
    if (!location || !destination) {
      Alert.alert(
        'Error',
        'Please select both pickup and destination locations.',
      );
      return;
    }

    try {
      setShowRides(true); // open modal
      setLoadingDrivers(true); // show spinner
      const drivers = await findNearbyDrivers(location);
      setAvailableDrivers(drivers);
    } catch (error) {
      console.error('Error finding drivers:', error);
      Alert.alert('Error', 'Unable to find nearby drivers.');
    } finally {
      setLoadingDrivers(false); // stop spinner
    }
  };

  const handleDirectionsReady = result => {
    console.log('Directions ready:', result);
    if (result.distance) {
      setDistance(result.distance);
      setEstimatedFare(calculateFare(result.distance));
    }
  };

  const handleRideSelect = driver => {
    setSelectedDriver(driver);
    setShowRides(false);
  };

  const handleConfirmRide = async () => {
    if (!selectedDriver || !estimatedFare) return;

    try {
      const riderId = auth().currentUser.uid;
      const newRideId = await createRideRequest({
        pickup: location,
        destination: destination,
        riderId,
        estimatedFare,
        paymentMethod: paymentMethod || 'stripe', // Default to stripe if not set
      });
      setRideId(newRideId);

      // Subscribe to ride status updates
      const unsubscribe = subscribeToRide(newRideId, ride => {
        setRideStatus(ride.status);
        if (ride.status === 'accepted') {
          const displayName =
            selectedDriver?.driverName ||
            selectedDriver?.fullName ||
            selectedDriver?.username ||
            'your driver';
          Alert.alert(
            'Ride Accepted',
            `${displayName} has accepted your ride!`,
          );
          // Show payment now that the driver accepted
          setShowPayment(true);
        } else if (ride.status === 'declined') {
          Alert.alert('Ride Declined', 'Driver declined your request.');
          setSelectedDriver(null);
        } else if (ride.status === 'completed') {
          Alert.alert('Ride Completed', 'Your ride has ended.');
        }
      });
    } catch (error) {
      console.error('Error confirming ride:', error);
      Alert.alert('Error', 'Failed to confirm ride.');
    }
  };

  const handlePayment = async method => {
    try {
      if (!rideId || !selectedDriver || !estimatedFare) {
        Alert.alert('Error', 'Missing ride details. Please try again.');
        return;
      }
      setPaymentMethod(method);

      // Create a payment record (for testing, mark as succeeded)
      const paymentRef = await firestore()
        .collection('payments')
        .add({
          rideId,
          driverId: selectedDriver.id,
          riderId: auth().currentUser.uid,
          method,
          amount: Number(estimatedFare),
          currency: 'usd',
          status: 'succeeded',
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      // Update earnings and mark ride as completed
      await updateRideComplete(
        rideId,
        selectedDriver.id,
        Number(estimatedFare),
      );

      setShowPayment(false);
      setSelectedDriver(null);
      setRideId(null);
      Alert.alert('Payment Successful', 'Your ride is on the way!');
    } catch (err) {
      console.error('Payment error:', err);
      Alert.alert('Payment Failed', 'Could not process payment.');
    }
  };

  const renderRideItem = ({ item }) => (
    <TouchableOpacity
      style={styles.rideItem}
      onPress={() => handleRideSelect(item)}
    >
      <View style={styles.driverImageContainer}>
        <Image
          source={{ uri: item.driverImage }}
          style={styles.driverImage}
          onError={e => console.log('Image load error:', e.nativeEvent.error)}
        />
      </View>
      <View style={styles.rideInfo}>
        <Text style={styles.driverName}>{item.driverName}</Text>
        <Text style={styles.carInfo}>
          {item.carModel} • {item.carColor}
        </Text>
        <Text style={styles.licensePlate}>{item.licensePlate}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating?.toFixed(1) || 'N/A'}</Text>
        </View>
      </View>
      <View style={styles.carImageContainer}>
        <Image
          source={{ uri: item.carImage }}
          style={styles.carImage}
          onError={e =>
            console.log('Car image load error:', e.nativeEvent.error)
          }
        />
      </View>
      <View style={styles.ridePrice}>
        <Text style={styles.price}>
          ${calculateFare(item.distance).toFixed(2)}
        </Text>
        <Text style={styles.eta}>
          ETA: {Math.round(item.distance / 0.3)} min
        </Text>
        {/* Rough ETA estimate */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <GooglePlacesAutocomplete
          ref={inputRef}
          placeholder="Where to?"
          fetchDetails={true}
          debounce={200}
          enablePoweredByContainer={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          timeout={10000}
          keyboardShouldPersistTaps="handled"
          listViewDisplayed="auto"
          keepResultsAfterBlur={false}
          currentLocation={false}
          currentLocationLabel="Current location"
          enableHighAccuracyLocation={true}
          onFail={() => console.warn('Google Places Autocomplete failed')}
          onNotFound={() => console.log('No results found')}
          onTimeout={() => console.warn('Google Places request timeout')}
          predefinedPlaces={[]}
          predefinedPlacesAlwaysVisible={false}
          styles={{
            textInputContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginHorizontal: 20,
              position: 'relative',
              shadowColor: '#d4d4d4',
            },
            textInput: {
              backgroundColor: 'white',
              fontWeight: '600',
              fontSize: 16,
              marginTop: 5,
              width: '100%',
              fontFamily: 'JakartaSans-Medium',
              color: '#000',
            },
            listView: {
              backgroundColor: 'white',
              position: 'relative',
              top: 0,
              width: '100%',
              zIndex: 99,
              borderRadius: 10,
              shadowColor: '##d4d4d4',
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            types: 'geocode',
          }}
          onPress={(data, details = null) => {
            if (!details?.geometry?.location) {
              console.warn('Missing geometry details!');
              return;
            }

            handlePress({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              address: data.description,
            });
          }}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            radius: 1000,
          }}
          textInputProps={{
            placeholderTextColor: 'gray',
            placeholder: 'Where do you want to go?',
          }}
        />
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => inputRef.current?.focus()}
        >
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            ref={mapRef}
            style={styles.fakeMap}
            region={location}
            showsUserLocation={true}
            showsMyLocationButton={true}
            provider="google"
          >
            <Marker coordinate={location} title="You are here" />
            {destination && (
              <Marker
                coordinate={destination}
                title="Destination"
                description={destination.address}
                pinColor="red"
              />
            )}
            {destination && location && (
              <MapViewDirections
                origin={location}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="#0066FF"
                onReady={handleDirectionsReady}
                onError={errorMessage =>
                  console.log('Directions error:', errorMessage)
                }
              />
            )}
            {availableDrivers.map(driver => (
              <Marker
                key={driver.id}
                coordinate={driver.currentLocation}
                title={driver.driverName}
                pinColor="green"
              />
            ))}
          </MapView>
        ) : (
          <View style={styles.fakeMap}>
            <ActivityIndicator size="large" color="#FFFCFB" />
          </View>
        )}

        {/* <View style={styles.topButtons}>
          <TouchableOpacity style={styles.circleButton}>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.earningsBadge}>
            <Text style={styles.earningsText}>$36.45</Text>
          </View> 
        </View> */}

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.goButton}
            onPress={handleGoButtonPress}
          >
            <Text style={styles.goText}>GO</Text>
          </TouchableOpacity>
        </View>

        {/* Status Bar: Only show if offline */}
        {isOffline && (
          <View style={styles.statusBar}>
            <Text style={styles.statusText}>You're offline</Text>
            <Icon name="list-outline" size={22} color="#fff" />
          </View>
        )}
      </View>

      {/* Rides List Modal */}
      <Modal visible={showRides} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Available Drivers</Text>
              <TouchableOpacity onPress={() => setShowRides(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {loadingDrivers ? (
              <ActivityIndicator size="large" color="#0066FF" />
            ) : availableDrivers && availableDrivers.length > 0 ? (
              <FlatList
                data={availableDrivers}
                renderItem={renderRideItem}
                keyExtractor={item => item.id}
                style={styles.ridesList}
              />
            ) : (
              <View style={styles.noDrivers}>
                <Text style={styles.noDriversText}>
                  No drivers available nearby.
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Selected Ride Details */}
      {selectedDriver && (
        <View style={styles.rideDetails}>
          <View style={styles.rideDetailsHeader}>
            <Text style={styles.rideDetailsTitle}>Ride Details</Text>
            <TouchableOpacity onPress={() => setSelectedDriver(null)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.rideDetailsContent}>
            <View style={styles.driverInfoContainer}>
              <View style={styles.driverImageContainerLarge}>
                <Image
                  source={{ uri: selectedDriver.driverImage }}
                  style={styles.driverImageLarge}
                  onError={e =>
                    console.log('Image load error:', e.nativeEvent.error)
                  }
                />
              </View>
              <View style={styles.driverTextInfo}>
                <Text style={styles.driverNameLarge}>
                  {selectedDriver.driverName}
                </Text>
                <Text style={styles.carInfoLarge}>
                  {selectedDriver.carModel} • {selectedDriver.carColor}
                </Text>
                <Text style={styles.licensePlateLarge}>
                  {selectedDriver.licensePlate}
                </Text>
                <View style={styles.ratingContainerLarge}>
                  <Icon name="star" size={20} color="#FFD700" />
                  <Text style={styles.ratingLarge}>
                    {selectedDriver.rating?.toFixed(1) || 'N/A'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.carImageContainerLarge}>
              <Image
                source={{ uri: selectedDriver.carImage }}
                style={styles.carImageLarge}
                onError={e =>
                  console.log('Car image load error:', e.nativeEvent.error)
                }
              />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLarge}>
                ${estimatedFare?.toFixed(2) || 'N/A'}
              </Text>
              <Text style={styles.etaLarge}>
                ETA: {Math.round(distance / 0.3)} min
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmRide}
          >
            <Text style={styles.confirmButtonText}>Confirm Ride</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Payment Modal */}
      <Modal visible={showPayment} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Payment Method</Text>
              <TouchableOpacity onPress={() => setShowPayment(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.paymentAmount}>
              Amount: ${estimatedFare?.toFixed(2) || selectedDriver?.price}
            </Text>

            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment('stripe')}
            >
              <Icon name="card" size={24} color="#0066FF" />
              <Text style={styles.paymentOptionText}>Pay with Stripe</Text>
            </TouchableOpacity>

            {selectedDriver?.paymentMethods?.includes('bank_transfer') && (
              <TouchableOpacity
                style={styles.paymentOption}
                onPress={() => handlePayment('bank_transfer')}
              >
                <Icon name="business" size={24} color="#0066FF" />
                <Text style={styles.paymentOptionText}>
                  Bank Transfer to {selectedDriver.bankAccount}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  searchIcon: {
    marginLeft: 10,
    backgroundColor: '#A91079',
    borderRadius: 50,
    padding: 10,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#1C1C1C',
  },
  fakeMap: {
    width: '100%',
    height: '110%',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#FFFCFB',
    fontSize: 18,
  },
  topButtons: {
    position: 'absolute',
    top: 20,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleButton: {
    backgroundColor: '#1C1C1C',
    borderRadius: 30,
    padding: 10,
  },
  earningsBadge: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    right: '37%',
  },
  earningsText: {
    color: '#00FF6A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButton: {
    backgroundColor: '#0066FF',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  statusBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1C1C1C',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  statusText: {
    color: '#FFFCFB',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  ridesList: {
    maxHeight: 400,
  },
  rideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  driverImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    marginRight: 15,
    overflow: 'hidden',
  },
  driverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  rideInfo: {
    flex: 1,
    marginRight: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  carInfo: {
    fontSize: 14,
    color: '#666',
  },
  licensePlate: {
    fontSize: 12,
    color: '#999',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    color: '#000',
  },
  carImageContainer: {
    width: 60,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginRight: 15,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ridePrice: {
    alignItems: 'flex-end',
    minWidth: 60,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  eta: {
    fontSize: 12,
    color: '#666',
  },
  rideDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1C1C1C',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rideDetailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  rideDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  rideDetailsContent: {
    marginBottom: 20,
  },
  driverInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  driverImageContainerLarge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
    marginRight: 15,
    overflow: 'hidden',
  },
  driverImageLarge: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  driverTextInfo: {
    flex: 1,
  },
  driverNameLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  carInfoLarge: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  licensePlateLarge: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  ratingContainerLarge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingLarge: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 16,
  },
  carImageContainerLarge: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    overflow: 'hidden',
  },
  carImageLarge: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  priceContainer: {
    alignItems: 'center',
  },
  priceLarge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF6A',
    marginBottom: 5,
  },
  etaLarge: {
    fontSize: 16,
    color: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  noDrivers: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  noDriversText: {
    color: 'black',
    fontSize: 16,
  },
});

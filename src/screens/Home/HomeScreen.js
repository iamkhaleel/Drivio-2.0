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
  Platform,
  PermissionsAndroid,
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
import { useLanguage } from '../../context/LanguageContext';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyDVHGYwW8ZjOxqLDxNjhp4LGBSer3K4o-g';

export default function HomeScreen() {
  const { t } = useLanguage();
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
  const [locationPermissionDenied, setLocationPermissionDenied] =
    useState(false);

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

  // Request location permission and get user location
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message:
                'This app needs access to your location to find nearby drivers.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            fetchLocation();
          } else {
            setLocationPermissionDenied(true);
            Alert.alert(
              'Permission Denied',
              'Location permission is required to use this feature. Please enable it in your device settings.',
              [{ text: 'OK', onPress: () => console.log('Permission denied') }],
            );
          }
        } catch (err) {
          console.warn('Permission request error:', err);
          Alert.alert('Error', 'Failed to request location permission.');
        }
      } else {
        // iOS: Geolocation handles permission request automatically
        fetchLocation();
      }
    };

    const fetchLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          setLocation(newLocation);
          setLocationPermissionDenied(false);
        },
        error => {
          console.log('Geolocation error:', error);
          if (error.code === 1) {
            // Permission denied
            setLocationPermissionDenied(true);
            Alert.alert(
              'Permission Denied',
              'Location permission is required to use this feature. Please enable it in your device settings.',
              [{ text: 'OK', onPress: () => console.log('Permission denied') }],
            );
          } else {
            Alert.alert('Error', 'Unable to fetch location. Please try again.');
          }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    };

    requestLocationPermission();
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
        paymentMethod: 'bank_transfer', // Bank transfer only
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

      // Create a payment record with pending status for bank transfer
      const paymentRef = await firestore()
        .collection('payments')
        .add({
          rideId,
          driverId: selectedDriver.id,
          riderId: auth().currentUser.uid,
          method,
          amount: Number(estimatedFare),
          currency: 'usd',
          status: 'pending', // Pending until driver confirms payment received
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      // Update ride status to waiting for payment
      await firestore().collection('rides').doc(rideId).update({
        status: 'waiting_for_payment',
        paymentId: paymentRef.id,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });

      setShowPayment(false);
      setSelectedDriver(null);
      setRideId(null);
      Alert.alert(
        'Payment Instructions Sent',
        'Please transfer the money to the provided bank account. Your driver will confirm once payment is received.',
      );
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
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <GooglePlacesAutocomplete
          ref={inputRef}
          placeholder={t('whereTo')}
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
          currentLocationLabel={t('currentLocation')}
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
              marginHorizontal: 5,
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
              shadowColor: '#d4d4d4',
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
            placeholder: t('whereDoYouWantToGo'),
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
            <Marker coordinate={location} title={t('youAreHere')} />
            {destination && (
              <Marker
                coordinate={destination}
                title={t('destination')}
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
            {locationPermissionDenied ? (
              <Text style={styles.mapText}>
                Location permission denied. Please enable it in settings.
              </Text>
            ) : (
              <ActivityIndicator size="large" color="#FFFCFB" />
            )}
          </View>
        )}

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[
              styles.goButton,
              locationPermissionDenied && { opacity: 0.5 },
            ]}
            onPress={handleGoButtonPress}
            disabled={locationPermissionDenied}
          >
            <Text style={styles.goText}>{t('go')}</Text>
          </TouchableOpacity>
        </View>

        {/* Status Bar: Only show if offline */}
        {isOffline && (
          <View style={styles.statusBar}>
            <Text style={styles.statusText}>{t('youreOffline')}</Text>
            <Icon name="list-outline" size={22} color="#fff" />
          </View>
        )}
      </View>

      {/* Rides List Modal */}
      <Modal visible={showRides} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t('availableDrivers')}</Text>
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
                <Text style={styles.noDriversText}>{t('noDriversNearby')}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Selected Ride Details */}
      {selectedDriver && (
        <View style={styles.rideDetails}>
          <View style={styles.rideDetailsHeader}>
            <Text style={styles.rideDetailsTitle}>{t('rideDetails')}</Text>
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
                {t('eta')}: {Math.round(distance / 0.3)} {t('min')}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmRide}
          >
            <Text style={styles.confirmButtonText}>{t('confirmRide')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Payment Modal */}
      <Modal visible={showPayment} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t('paymentInstructions')}</Text>
              <TouchableOpacity onPress={() => setShowPayment(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.paymentAmount}>
              ${estimatedFare?.toFixed(2) || selectedDriver?.price}
            </Text>

            <View style={styles.bankTransferInfo}>
              <Icon
                name="business"
                size={24}
                color="#0066FF"
                style={styles.bankIcon}
              />
              <View style={styles.bankDetails}>
                <Text style={styles.bankTransferTitle}>
                  {t('bankTransferRequired')}
                </Text>
                <Text style={styles.bankAccountText}>{t('transferTo')}</Text>

                <View style={styles.bankInfoContainer}>
                  <View style={styles.bankInfoRow}>
                    <Text style={styles.bankInfoLabel}>{t('bank')}</Text>
                    <Text style={styles.bankInfoValue}>
                      {selectedDriver?.bankName || t('bankNameNA')}
                    </Text>
                  </View>

                  <View style={styles.bankInfoRow}>
                    <Text style={styles.bankInfoLabel}>{t('accountName')}</Text>
                    <Text style={styles.bankInfoValue}>
                      {selectedDriver?.bankAccountName || t('accountNameNA')}
                    </Text>
                  </View>

                  <View style={styles.bankInfoRow}>
                    <Text style={styles.bankInfoLabel}>
                      {t('accountNumber')}
                    </Text>
                    <Text style={styles.bankAccountNumber}>
                      {selectedDriver?.bankAccount || t('accountNumberNA')}
                    </Text>
                  </View>
                </View>

                <Text style={styles.bankTransferNote}>
                  {t('pleaseConfirmWithDriver')}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.confirmPaymentButton}
              onPress={() => handlePayment('bank_transfer')}
            >
              <Text style={styles.confirmPaymentButtonText}>
                {t('iHaveTransferred')}
              </Text>
            </TouchableOpacity>
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
    textAlign: 'center',
    padding: 20,
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
  bankTransferInfo: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  bankIcon: {
    marginRight: 15,
    marginTop: 5,
  },
  bankDetails: {
    flex: 1,
  },
  bankTransferTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  bankAccountText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  bankInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  bankInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bankInfoLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    flex: 1,
  },
  bankInfoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  bankAccountNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066FF',
    textAlign: 'right',
    flex: 2,
  },
  bankTransferNote: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  confirmPaymentButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmPaymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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

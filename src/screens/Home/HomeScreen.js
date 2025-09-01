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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyDVHGYwW8ZjOxqLDxNjhp4LGBSer3K4o-g';

// Mock data for rides with driver and car images
const mockRides = [
  {
    id: '1',
    driverName: 'John Doe',
    carModel: 'Toyota Camry',
    licensePlate: 'ABC123',
    rating: 4.8,
    price: 15.5,
    eta: '5 min',
    carColor: 'Black',
    paymentMethods: ['stripe', 'bank_transfer'],
    bankAccount: '****1234',
    driverImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    carImage:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop',
  },
  {
    id: '2',
    driverName: 'Jane Smith',
    carModel: 'Honda Civic',
    licensePlate: 'XYZ789',
    rating: 4.9,
    price: 12.75,
    eta: '3 min',
    carColor: 'White',
    paymentMethods: ['stripe'],
    bankAccount: '****5678',
    driverImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    carImage:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=200&h=120&fit=crop',
  },
  {
    id: '3',
    driverName: 'Mike Johnson',
    carModel: 'Tesla Model 3',
    licensePlate: 'TESLA1',
    rating: 4.7,
    price: 18.25,
    eta: '7 min',
    carColor: 'Red',
    paymentMethods: ['stripe', 'bank_transfer'],
    bankAccount: '****9012',
    driverImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    carImage:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=120&fit=crop',
  },
];

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [showRides, setShowRides] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
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
      const coordinates = [location, selectedLocation];
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  };

  const handleGoButtonPress = () => {
    if (destination && location) {
      setShowRides(true);
      console.log('Finding available rides...');
    }
  };

  const handleDirectionsReady = result => {
    console.log('Directions ready:', result);
  };

  const handleRideSelect = ride => {
    setSelectedRide(ride);
    setShowRides(false);
  };

  const handleConfirmRide = () => {
    setShowPayment(true);
  };

  const handlePayment = method => {
    setPaymentMethod(method);
    console.log(`Processing payment with ${method} for ride:`, selectedRide);
    // Simulate payment processing
    setTimeout(() => {
      setShowPayment(false);
      setSelectedRide(null);
      alert('Payment successful! Your ride is on the way.');
    }, 2000);
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
          <Text style={styles.rating}>{item.rating}</Text>
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
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.eta}>{item.eta}</Text>
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
                onError={errorMessage => {
                  console.log('Directions error:', errorMessage);
                }}
              />
            )}
          </MapView>
        ) : (
          <View style={styles.fakeMap}>
            <Text style={styles.mapText}>Loading map...</Text>
          </View>
        )}

        {/* Top Overlay Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.circleButton}>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.earningsBadge}>
            <Text style={styles.earningsText}>$36.45</Text>
          </View>
        </View>

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
              <Text style={styles.modalTitle}>Available Rides</Text>
              <TouchableOpacity onPress={() => setShowRides(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={mockRides}
              renderItem={renderRideItem}
              keyExtractor={item => item.id}
              style={styles.ridesList}
            />
          </View>
        </View>
      </Modal>

      {/* Selected Ride Details */}
      {selectedRide && (
        <View style={styles.rideDetails}>
          <View style={styles.rideDetailsHeader}>
            <Text style={styles.rideDetailsTitle}>Ride Details</Text>
            <TouchableOpacity onPress={() => setSelectedRide(null)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.rideDetailsContent}>
            <View style={styles.driverInfoContainer}>
              <View style={styles.driverImageContainerLarge}>
                <Image
                  source={{ uri: selectedRide.driverImage }}
                  style={styles.driverImageLarge}
                  onError={e =>
                    console.log('Image load error:', e.nativeEvent.error)
                  }
                />
              </View>
              <View style={styles.driverTextInfo}>
                <Text style={styles.driverNameLarge}>
                  {selectedRide.driverName}
                </Text>
                <Text style={styles.carInfoLarge}>
                  {selectedRide.carModel} • {selectedRide.carColor}
                </Text>
                <Text style={styles.licensePlateLarge}>
                  {selectedRide.licensePlate}
                </Text>
                <View style={styles.ratingContainerLarge}>
                  <Icon name="star" size={20} color="#FFD700" />
                  <Text style={styles.ratingLarge}>{selectedRide.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.carImageContainerLarge}>
              <Image
                source={{ uri: selectedRide.carImage }}
                style={styles.carImageLarge}
                onError={e =>
                  console.log('Car image load error:', e.nativeEvent.error)
                }
              />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLarge}>${selectedRide.price}</Text>
              <Text style={styles.etaLarge}>ETA: {selectedRide.eta}</Text>
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
              Amount: ${selectedRide?.price}
            </Text>

            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment('stripe')}
            >
              <Icon name="card" size={24} color="#0066FF" />
              <Text style={styles.paymentOptionText}>Pay with Stripe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => handlePayment('bank_transfer')}
            >
              <Icon name="business" size={24} color="#0066FF" />
              <Text style={styles.paymentOptionText}>
                Bank Transfer to {selectedRide?.bankAccount}
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
    height: '100%',
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
    bottom: 90,
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
});

import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
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
const GOOGLE_MAPS_APIKEY = 'AIzaSyDVHGYwW8ZjOxqLDxNjhp4LGBSer3K4o-g'; // Remove space from your key

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const mapRef = useRef(null);

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

    // Fit map to show both current location and destination
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
      // The MapViewDirections component will automatically draw the route
      console.log('Calculating route to destination');
    }
  };

  const handleDirectionsReady = result => {
    console.log('Directions ready:', result);
    // You can use the result for additional functionality if needed
  };

  const inputRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <GooglePlacesAutocomplete
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
              shadowColor: '#d4d4d4',
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            types: 'geocode',
          }}
          onPress={(data, details = null) => {
            console.log('Selected data:', data);
            console.log('Details:', details);

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
          ref={inputRef}
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
  searchInput: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    color: '#FFFCFB',
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
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
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
  },
  smallCircle: {
    backgroundColor: '#1C1C1C',
    borderRadius: 30,
    padding: 12,
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
});

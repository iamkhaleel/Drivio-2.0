import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <TextInput
          placeholder="Where to?"
          placeholderTextColor="#ccc"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        {/* Simulated Map Background */}
        <View style={styles.fakeMap}>
          <Text style={styles.mapText}>Map Placeholder</Text>
        </View>

        {/* Top Overlay Buttons */}
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.circleButton}>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.earningsBadge}>
            <Text style={styles.earningsText}>$36.45</Text>
          </View>

          <TouchableOpacity style={styles.circleButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.smallCircle}>
            <Icon name="options-outline" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.goButton}>
            <Text style={styles.goText}>GO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallCircle}>
            <Icon name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>You're offline</Text>
          <Icon name="list-outline" size={22} color="#fff" />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    alignItems: 'center',
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

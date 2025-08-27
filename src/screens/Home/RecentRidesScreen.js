import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecentRidesScreen() {
  const [rides] = useState([
    {
      id: '1',
      pickup: 'Downtown',
      destination: 'Airport',
      date: 'Aug 25, 2025',
      time: '10:30 AM',
      fare: '$15.00',
      status: 'Completed',
    },
    {
      id: '2',
      pickup: 'Mall Road',
      destination: 'City Center',
      date: 'Aug 24, 2025',
      time: '08:15 PM',
      fare: '$12.50',
      status: 'Canceled',
    },
    {
      id: '3',
      pickup: 'City Hospital',
      destination: 'Green Park',
      date: 'Aug 22, 2025',
      time: '03:45 PM',
      fare: '$11.20',
      status: 'Completed',
    },
    {
      id: '4',
      pickup: 'Central Library',
      destination: 'North Market',
      date: 'Aug 21, 2025',
      time: '09:00 AM',
      fare: '$14.50',
      status: 'Completed',
    },
    {
      id: '5',
      pickup: 'East Gate',
      destination: 'Tech Hub',
      date: 'Aug 20, 2025',
      time: '06:15 PM',
      fare: '$8.30',
      status: 'Completed',
    },
    {
      id: '6',
      pickup: 'City Mall',
      destination: 'Harbor View',
      date: 'Aug 18, 2025',
      time: '12:20 PM',
      fare: '$17.00',
      status: 'Canceled',
    },
    {
      id: '7',
      pickup: 'University Ave',
      destination: 'Metro Station',
      date: 'Aug 17, 2025',
      time: '08:50 PM',
      fare: '$6.75',
      status: 'Completed',
    },

    {
      id: '8',
      pickup: 'Washington St',
      destination: 'Michigan Ave',
      date: 'Aug 28, 2025',
      time: '10:10 AM',
      fare: '$9.75',
      status: 'canceled',
    },
  ]);

  const getStatusColor = status => {
    switch (status) {
      case 'Completed':
        return '#4CAF50';
      case 'Canceled':
        return '#E53935';
      default:
        return '#FFA000';
    }
  };

  const renderRide = ({ item }) => (
    <SafeAreaView style={styles.rideCard}>
      <View style={styles.rideHeader}>
        <Text style={styles.route}>
          {item.pickup} → {item.destination}
        </Text>
        <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.rideDetails}>
        <Icon name="calendar-outline" size={16} color="#aaa" />
        <Text style={styles.detailText}>{item.date}</Text>
        <Icon
          name="time-outline"
          size={16}
          color="#aaa"
          style={{ marginLeft: 10 }}
        />
        <Text style={styles.detailText}>{item.time}</Text>
        <Text style={styles.fare}>{item.fare}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recent Rides</Text>
      {rides.length > 0 ? (
        <FlatList
          data={rides}
          keyExtractor={item => item.id}
          renderItem={renderRide}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.noRidesContainer}>
          <Text style={styles.noRidesText}>No recent rides found.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
    padding: 20,
  },
  title: {
    color: '#FFFCFB',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rideCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  route: {
    color: '#FFFCFB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  rideDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  detailText: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 5,
  },
  fare: {
    color: '#FFFCFB',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  noRidesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRidesText: {
    color: '#aaa',
    fontSize: 18,
  },
});

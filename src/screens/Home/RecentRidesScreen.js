import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function RecentRidesScreen() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;
    const unsub = firestore()
      .collection('rides')
      .where('riderId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .limit(50)
      .onSnapshot(
        snap => {
          const items = snap.docs.map(doc => {
            const d = doc.data();
            const created = d.createdAt?.toDate?.() || new Date();
            return {
              id: doc.id,
              pickup:
                typeof d.pickup === 'string'
                  ? d.pickup
                  : d.pickup?.address || 'Pickup',
              destination:
                typeof d.destination === 'string'
                  ? d.destination
                  : d.destination?.address || 'Destination',
              date: created.toLocaleDateString(),
              time: created.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
              fare:
                typeof d.estimatedFare === 'number'
                  ? `$${d.estimatedFare.toFixed(2)}`
                  : '$0.00',
              status: (d.status || 'pending').replace(/\b\w/g, c =>
                c.toUpperCase(),
              ),
            };
          });
          setRides(items);
          setLoading(false);
        },
        () => setLoading(false),
      );
    return unsub;
  }, []);

  const refreshRides = async () => {
    try {
      const user = auth().currentUser;
      if (!user) return;
      setRefreshing(true);
      const snap = await firestore()
        .collection('rides')
        .where('riderId', '==', user.uid)
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();
      const items = snap.docs.map(doc => {
        const d = doc.data();
        const created = d.createdAt?.toDate?.() || new Date();
        return {
          id: doc.id,
          pickup:
            typeof d.pickup === 'string'
              ? d.pickup
              : d.pickup?.address || 'Pickup',
          destination:
            typeof d.destination === 'string'
              ? d.destination
              : d.destination?.address || 'Destination',
          date: created.toLocaleDateString(),
          time: created.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          fare:
            typeof d.estimatedFare === 'number'
              ? `$${d.estimatedFare.toFixed(2)}`
              : '$0.00',
          status: (d.status || 'pending').replace(/\b\w/g, c =>
            c.toUpperCase(),
          ),
        };
      });
      setRides(items);
    } catch (e) {
      // ignore
    } finally {
      setRefreshing(false);
    }
  };

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
      {loading ? (
        <View style={styles.noRidesContainer}>
          <Text style={styles.noRidesText}>Loading...</Text>
        </View>
      ) : rides.length > 0 ? (
        <FlatList
          data={rides}
          keyExtractor={item => item.id}
          renderItem={renderRide}
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshing={refreshing}
          onRefresh={refreshRides}
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

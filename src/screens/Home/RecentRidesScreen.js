import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function RecentRidesScreen() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) {
      setLoading(false);
      Alert.alert('Error', 'You must be logged in to view rides.');
      return;
    }

    // Fetch all rides with a high limit and sort locally to avoid index requirements
    const unsub = firestore()
      .collection('rides')
      .where('riderId', '==', user.uid)
      .limit(200)
      .onSnapshot(
        snap => {
          const rows = snap.docs
            .map(doc => {
              const d = doc.data();
              const createdAt =
                d.createdAt?.toDate?.() ||
                d.updatedAt?.toDate?.() ||
                new Date(0);
              return {
                id: doc.id,
                createdAt,
                pickup:
                  typeof d.pickup === 'string'
                    ? d.pickup
                    : d.pickup?.address || 'Pickup',
                destination:
                  typeof d.destination === 'string'
                    ? d.destination
                    : d.destination?.address || 'Destination',
                fareNum: Number(d.estimatedFare || 0),
                status: d.status || 'pending',
              };
            })
            .sort((a, b) => {
              const ta = a.createdAt.getTime();
              const tb = b.createdAt.getTime();
              return tb - ta; // Sort by descending order (newest first)
            })
            .map(row => {
              const t = row.createdAt;
              return {
                id: row.id,
                date: `${t.toLocaleDateString()} ${t.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}`,
                pickupDest: `${row.pickup} → ${row.destination}`,
                fare: `$${row.fareNum.toFixed(2)}`,
                status: row.status.replace(/\b\w/g, c => c.toUpperCase()),
              };
            });
          setRides(rows);
          setLoading(false);
        },
        err => {
          console.warn('Rides listener error:', err);
          setLoading(false);
          Alert.alert('Error', 'Failed to load rides. Please try again.');
        },
      );
    return unsub;
  }, []);

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
    <View style={styles.card}>
      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.label}>{item.pickupDest}</Text>
        <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.amount}>{item.fare}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recent Rides</Text>
      {loading ? (
        <View style={{ padding: 20 }}>
          <Text style={{ color: '#FFFCFB' }}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={rides}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderRide}
          ListEmptyComponent={() => (
            <View style={{ padding: 20 }}>
              <Text style={{ color: '#B0B0B0' }}>No recent rides found.</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFCFB',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1C1C1C',
    padding: 18,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    fontSize: 16,
    color: '#FFFCFB',
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00FF6A',
  },
});

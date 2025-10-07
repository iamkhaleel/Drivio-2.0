import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function AdminScreen() {
  const [activeTab, setActiveTab] = useState('drivers'); // 'drivers' | 'rides' | 'payments'
  const [drivers, setDrivers] = useState([]);
  const [rides, setRides] = useState([]);
  const [payments, setPayments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async () => {
    setRefreshing(true);
    try {
      const [driversSnap, ridesSnap, paymentsSnap] = await Promise.all([
        firestore().collection('drivers').limit(50).get(),
        firestore()
          .collection('rides')
          .orderBy('createdAt', 'desc')
          .limit(50)
          .get()
          .catch(() => ({ docs: [] })),
        firestore()
          .collection('payments')
          .orderBy('createdAt', 'desc')
          .limit(50)
          .get()
          .catch(() => ({ docs: [] })),
      ]);

      setDrivers(driversSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      setRides(ridesSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      setPayments(paymentsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error('Admin fetch error', e);
      Alert.alert('Error', 'Failed to load admin data.');
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setDriverAvailability = async (driver, makeAvailable) => {
    try {
      await firestore().collection('drivers').doc(driver.id).set(
        {
          isAvailable: makeAvailable,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      fetchData();
    } catch (e) {
      Alert.alert('Error', 'Failed to update availability');
    }
  };

  const resetDriverEarnings = async driver => {
    try {
      await firestore().collection('drivers').doc(driver.id).set(
        {
          totalEarnings: 0,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      fetchData();
    } catch (e) {
      Alert.alert('Error', 'Failed to reset earnings');
    }
  };

  const deleteDriver = async driver => {
    Alert.alert('Confirm', 'Delete this driver?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await firestore().collection('drivers').doc(driver.id).delete();
            fetchData();
          } catch (e) {
            Alert.alert('Error', 'Failed to delete driver');
          }
        },
      },
    ]);
  };

  const updateRideStatus = async (ride, status) => {
    try {
      await firestore()
        .collection('rides')
        .doc(ride.id)
        .set(
          { status, updatedAt: firestore.FieldValue.serverTimestamp() },
          { merge: true },
        );
      fetchData();
    } catch (e) {
      Alert.alert('Error', 'Failed to update ride');
    }
  };

  const deleteRide = async ride => {
    Alert.alert('Confirm', 'Delete this ride?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await firestore().collection('rides').doc(ride.id).delete();
            fetchData();
          } catch (e) {
            Alert.alert('Error', 'Failed to delete ride');
          }
        },
      },
    ]);
  };

  const approvePayment = async payment => {
    try {
      await firestore().collection('payments').doc(payment.id).update({
        status: 'approved',
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
      if (payment.rideId) {
        await firestore().collection('rides').doc(payment.rideId).set(
          {
            status: 'paid',
            updatedAt: firestore.FieldValue.serverTimestamp(),
          },
          { merge: true },
        );
      }
      Alert.alert('Success', 'Payment approved');
      fetchData();
    } catch (e) {
      console.error('Approve payment error', e);
      Alert.alert('Error', 'Could not approve payment');
    }
  };

  const declinePayment = async payment => {
    try {
      await firestore().collection('payments').doc(payment.id).update({
        status: 'declined',
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Updated', 'Payment declined');
      fetchData();
    } catch (e) {
      Alert.alert('Error', 'Could not decline payment');
    }
  };

  const deletePayment = async payment => {
    Alert.alert('Confirm', 'Delete this payment?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await firestore().collection('payments').doc(payment.id).delete();
            fetchData();
          } catch (e) {
            Alert.alert('Error', 'Failed to delete payment');
          }
        },
      },
    ]);
  };

  const renderDrivers = () => (
    <FlatList
      data={drivers}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      }
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.fullName || 'Unnamed Driver'}</Text>
          <Text style={styles.sub}>
            Available: {String(item.isAvailable ?? false)}
          </Text>
          <Text style={styles.sub}>
            Earnings: ${Number(item.totalEarnings || 0)}
          </Text>
          <Text style={styles.sub}>Vehicle: {item.carModel || 'N/A'}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.action}
              onPress={() =>
                setDriverAvailability(item, !(item.isAvailable ?? false))
              }
            >
              <Text style={styles.actionText}>
                {item.isAvailable ?? false ? 'Set Offline' : 'Set Available'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.action, { backgroundColor: '#FF9F0A' }]}
              onPress={() => resetDriverEarnings(item)}
            >
              <Text style={styles.actionText}>Reset Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.action, { backgroundColor: '#FF3B30' }]}
              onPress={() => deleteDriver(item)}
            >
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>No drivers</Text>}
    />
  );

  const renderRides = () => (
    <FlatList
      data={rides}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      }
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>Ride {item.id.slice(0, 6)}...</Text>
          <Text style={styles.sub}>Status: {item.status || 'unknown'}</Text>
          <Text style={styles.sub}>Rider: {item.riderId || '—'}</Text>
          <Text style={styles.sub}>Driver: {item.driverId || '—'}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.action}
              onPress={() => updateRideStatus(item, 'accepted')}
            >
              <Text style={styles.actionText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.action, { backgroundColor: '#FF9F0A' }]}
              onPress={() => updateRideStatus(item, 'declined')}
            >
              <Text style={styles.actionText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.action, { backgroundColor: '#34C759' }]}
              onPress={() => updateRideStatus(item, 'completed')}
            >
              <Text style={styles.actionText}>Complete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.action, { backgroundColor: '#FF3B30' }]}
              onPress={() => deleteRide(item)}
            >
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>No rides</Text>}
    />
  );

  const renderPayments = () => (
    <FlatList
      data={payments}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      }
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.cardRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>${Number(item.amount || 0)}</Text>
            <Text style={styles.sub}>Status: {item.status || 'pending'}</Text>
            <Text style={styles.sub}>Ride: {item.rideId || '—'}</Text>
            <Text style={styles.sub}>Driver: {item.driverId || '—'}</Text>
          </View>
          <View>
            {item.status === 'pending' && (
              <TouchableOpacity
                style={styles.action}
                onPress={() => approvePayment(item)}
              >
                <Text style={styles.actionText}>Approve</Text>
              </TouchableOpacity>
            )}
            {item.status === 'pending' && (
              <TouchableOpacity
                style={[
                  styles.action,
                  { backgroundColor: '#FF9F0A', marginTop: 8 },
                ]}
                onPress={() => declinePayment(item)}
              >
                <Text style={styles.actionText}>Decline</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[
                styles.action,
                { backgroundColor: '#FF3B30', marginTop: 8 },
              ]}
              onPress={() => deletePayment(item)}
            >
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>No payments</Text>}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'drivers' && styles.tabActive]}
          onPress={() => setActiveTab('drivers')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'drivers' && styles.tabTextActive,
            ]}
          >
            Drivers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'rides' && styles.tabActive]}
          onPress={() => setActiveTab('rides')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'rides' && styles.tabTextActive,
            ]}
          >
            Rides
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'payments' && styles.tabActive]}
          onPress={() => setActiveTab('payments')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'payments' && styles.tabTextActive,
            ]}
          >
            Payments
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'drivers' && renderDrivers()}
      {activeTab === 'rides' && renderRides()}
      {activeTab === 'payments' && renderPayments()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0E0E', paddingTop: 20 },
  tabs: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
    backgroundColor: '#1C1C1C',
  },
  tab: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 20 },
  tabActive: { backgroundColor: '#0066FF' },
  tabText: { color: '#FFFCFB', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardRow: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: '700', color: '#111' },
  sub: { color: '#444', marginTop: 4 },
  empty: { color: '#FFFCFB', textAlign: 'center', marginTop: 40 },
  action: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  actionText: { color: '#fff', fontWeight: '700' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
});

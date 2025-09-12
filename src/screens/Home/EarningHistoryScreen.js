import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function EarningHistoryScreen() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;
    const unsub = firestore()
      .collection('payments')
      .where('driverId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .limit(100)
      .onSnapshot(
        snap => {
          const rows = snap.docs.map(doc => {
            const d = doc.data();
            const t = d.createdAt?.toDate?.() || new Date();
            return {
              id: doc.id,
              date: `${t.toLocaleDateString()} ${t.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}`,
              amount: `$${Number(d.amount || 0).toFixed(2)}`,
              method: d.method || 'unknown',
              status: d.status || 'succeeded',
            };
          });
          setPayments(rows);
          setLoading(false);
        },
        () => setLoading(false),
      );
    return unsub;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Earning History</Text>

      {loading ? (
        <View style={{ padding: 20 }}>
          <Text style={{ color: '#FFFCFB' }}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={payments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.label}>Payment ({item.method})</Text>
              </View>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={{ padding: 20 }}>
              <Text style={{ color: '#B0B0B0' }}>No earnings yet.</Text>
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
    backgroundColor: '#0F0E0E', // Black background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFCFB', // Off-white text
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
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00FF6A', // Green for earnings
  },
});

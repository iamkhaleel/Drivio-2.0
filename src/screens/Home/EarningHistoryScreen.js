import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const earnings = [
  { id: '1', date: '2025-09-01', amount: '$50.00' },
  { id: '2', date: '2025-08-31', amount: '$35.00' },
  { id: '3', date: '2025-08-30', amount: '$60.00' },
];

export default function EarningHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Earning History</Text>

      <FlatList
        data={earnings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.label}>Completed Ride</Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        )}
      />
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

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const earnings = [
  { id: '1', date: '2025-09-01', amount: '$50.00' },
  { id: '2', date: '2025-08-31', amount: '$35.00' },
  { id: '3', date: '2025-08-30', amount: '$60.00' },
];

export default function EarningHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Earning History</Text>
      <FlatList
        data={earnings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

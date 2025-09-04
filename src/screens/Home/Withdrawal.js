import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function Withdrawal() {
  const [amount, setAmount] = useState('');
  const currentBalance = 120; // Example balance
  const minWithdrawal = 50;

  const handleWithdraw = () => {
    if (!amount) {
      Alert.alert('Error', 'Please enter a withdrawal amount.');
      return;
    }
    const withdrawalAmount = parseFloat(amount);
    if (withdrawalAmount < minWithdrawal) {
      Alert.alert('Error', `Minimum withdrawal is $${minWithdrawal}.`);
      return;
    }
    if (withdrawalAmount > currentBalance) {
      Alert.alert('Error', 'You do not have enough balance.');
      return;
    }
    Alert.alert('Success', `You withdrew $${withdrawalAmount}!`);
    setAmount('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>${currentBalance.toFixed(2)}</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Withdraw Funds</Text>
      <Text style={styles.subtitle}>
        Minimum withdrawal is{' '}
        <Text style={{ color: '#00FF6A' }}>${minWithdrawal}</Text>
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor="#aaa"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Withdraw Button */}
      <TouchableOpacity
        style={[
          styles.button,
          (parseFloat(amount) < minWithdrawal ||
            parseFloat(amount) > currentBalance) &&
            styles.buttonDisabled,
        ]}
        disabled={
          !amount ||
          parseFloat(amount) < minWithdrawal ||
          parseFloat(amount) > currentBalance
        }
        onPress={handleWithdraw}
      >
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
    padding: 20,
  },
  balanceCard: {
    backgroundColor: '#1C1C1C',
    padding: 20,
    borderRadius: 14,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFCFB',
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFCFB',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFFCFB',
    fontSize: 18,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#00FF6A',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#0F0E0E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

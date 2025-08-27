import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendLink = () => {
    console.log('Reset link sent to:', email);
    navigation.navigate('EmailVerification'); // go to verification after sending
  };

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email to reset your password
        </Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        {/* Send Link Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSendLink}>
          <Text style={styles.primaryButtonText}>Send Reset Link</Text>
        </TouchableOpacity>

        {/* Back to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold', marginBottom: 10 },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'start',
  },
  input: {
    backgroundColor: '#0F0E0E',
    color: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: '#0F0E0E',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: { color: '#ccc', textAlign: 'center', marginTop: 20 },
});

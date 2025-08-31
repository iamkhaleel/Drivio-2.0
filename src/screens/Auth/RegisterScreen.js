import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(username, email, password)
      .then(() => {
        Alert.alert('Success', 'Account created! Please verify your email.', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
      })
      .catch(err => {
        console.error('Sign-up error:', err.message);
        Alert.alert('Error', err.message || 'Sign-up failed');
      });
  };

  // Handle email/password sign-up
  // const handleSignUp = async () => {
  //   try {
  //     const userCredential = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     const user = userCredential.user;

  //     // Update user profile with username
  //     await user.updateProfile({ displayName: username });

  //     // Send email verification
  //     await user.sendEmailVerification();

  //     Alert.alert('Success', 'Account created! Please verify your email.', [
  //       { text: 'OK', onPress: () => navigation.navigate('Login') },
  //     ]);
  //   } catch (err) {
  //     console.error('Sign-up error:', err.message);
  //     Alert.alert('Error', err.message || 'Sign-up failed');
  //   }
  // };

  // Handle Google OAuth sign-up
  const handleGoogleSignUp = async () => {
    try {
      // Sign out from Google to ensure fresh login
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('Home');
    } catch (err) {
      console.error('Google sign-up error:', err.message);
      Alert.alert('Error', 'Google sign-up failed');
    }
  };

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Sign up</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
          <Text style={styles.primaryButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.orText}>Or sign up with</Text>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignUp}
          >
            <Icon name="google" size={20} color="#fff" />
            <Text style={styles.socialText}>Sign up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 30, color: '#fff', fontWeight: 'bold', marginBottom: 30 },
  input: {
    backgroundColor: '#0F0E0E',
    color: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
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
  orText: { color: '#0F0E0E', textAlign: 'center', marginBottom: 15 },
  socialContainer: { gap: 10 },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0E0E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialText: { color: '#fff', marginLeft: 10, fontSize: 16 },
  footerText: { color: '#0F0E0E', textAlign: 'center', marginTop: 20 },
});

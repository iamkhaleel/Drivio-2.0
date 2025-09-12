import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Configure Google Sign-In
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '548976357941-7r05gerdadgutk8lfsuboqbgg1v32m5e.apps.googleusercontent.com',
    });
  }, []);

  // Redirect user based on role
  const redirectBasedOnRole = async userId => {
    try {
      const userDoc = await firestore().collection('users').doc(userId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        const role = userData.role || 'customer'; // Default to 'customer' if role is not set

        // Store user role in AsyncStorage for quick access
        await AsyncStorage.setItem('userRole', role);
        await AsyncStorage.setItem('userLoggedIn', 'true');

        // Redirect based on role
        if (role === 'driver') {
          navigation.reset({
            index: 0,
            routes: [{ name: 'DriverHome' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
        }
      } else {
        // If user document doesn't exist, assume it's a customer
        await AsyncStorage.setItem('userRole', 'customer');
        await AsyncStorage.setItem('userLoggedIn', 'true');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    } catch (error) {
      console.error('Error redirecting user:', error);
      Alert.alert(
        'Error',
        'Failed to determine user role. Redirecting to default page.',
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  };

  // Email/Password Login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email.trim(),
        password,
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email first.');
        return;
      }

      await redirectBasedOnRole(user.uid);
    } catch (err) {
      console.error('Login error:', err.message);
      let message = 'Failed to log in.';
      if (err.code) {
        switch (err.code) {
          case 'auth/invalid-email':
            message = 'Invalid email address.';
            break;
          case 'auth/user-not-found':
            message = 'No account found for this email.';
            break;
          case 'auth/wrong-password':
            message = 'Incorrect password.';
            break;
          case 'auth/network-request-failed':
            message = 'Network error. Please check your connection.';
            break;
          default:
            message = err.message || message;
        }
      }
      Alert.alert('Login Error', message);
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential.user;

      // Check if user exists in Firestore, if not create
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      if (!userDoc.exists) {
        await firestore().collection('users').doc(user.uid).set({
          username: user.displayName,
          email: user.email,
          role: 'customer', // Default to customer for new users
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      }

      Alert.alert('Welcome', `Hello, ${user.displayName || 'User'}!`);
      await redirectBasedOnRole(user.uid);
    } catch (err) {
      console.error('Google Sign-In error:', err);
      Alert.alert('Error', err.message || 'Google Sign-In failed.');
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={styles.loadingIndicator}
          />
        ) : (
          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.orText}>Or Log In with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignIn}
            disabled={isLoading}
          >
            <Icon name="google" size={20} color="#fff" />
            <Text style={styles.socialText}>Login with Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.footerText}>Forgot Password? Click Here</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
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
  loadingIndicator: {
    marginBottom: 20,
  },
  orText: {
    color: '#0F0E0E',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    gap: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0E0E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  footerText: {
    color: '#0F0E0E',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

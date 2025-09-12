import React, { useState, useEffect } from 'react';
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

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    configureGoogleSign();
  }, []);

  const configureGoogleSign = async () => {
    try {
      await GoogleSignin.configure({
        webClientId:
          '548976357941-7r05gerdadgutk8lfsuboqbgg1v32m5e.apps.googleusercontent.com',
        offlineAccess: true,
        forceCodeForRefreshToken: true,
      });
    } catch (error) {
      console.error('Google Sign-in configuration error:', error);
      Alert.alert(
        'Error',
        'Failed to configure Google Sign-in. Please try again.',
      );
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential.user;

      const userDoc = await firestore().collection('users').doc(user.uid).get();
      if (!userDoc.exists) {
        await firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            username: user.displayName || username,
            email: user.email,
            role: 'rider',
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
      }

      Alert.alert('Success', `Welcome ${user.displayName || username}!`);
      navigation.navigate('Home');
    } catch (err) {
      console.error('Google Sign-In error:', err);
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Google Sign-In was cancelled.');
      } else if (err.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Another sign-in is in progress.');
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Play Services not available or outdated.');
      } else {
        Alert.alert('Error', err.message || 'Google Sign-In failed');
      }
    }
  };

  const handleSignUp = async () => {
    // Basic validation
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email.trim(),
        password,
      );
      const user = userCredential.user;

      await user.updateProfile({ displayName: username.trim() });

      await firestore().collection('users').doc(user.uid).set({
        username: username.trim(),
        email: email.trim(),
        role: 'rider',
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      await user.sendEmailVerification();

      Alert.alert('Success', 'Account created! Please verify your email.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (err) {
      console.error('Sign-up error:', err);
      let errorMessage = 'Sign-up failed';
      if (err.code) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'This email is already in use.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email format.';
            break;
          case 'auth/weak-password':
            errorMessage = 'Password should be at least 6 characters.';
            break;
          case 'auth/network-request-failed':
            errorMessage = 'Network error. Please check your connection.';
            break;
          default:
            errorMessage = err.message || errorMessage;
        }
      } else {
        errorMessage = 'An unexpected error occurred. Please try again.';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sign up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />

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
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
          <Text style={styles.primaryButtonText}>Sign up as Rider</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('DriverRegister')}
        >
          <Text style={styles.primaryButtonText}>Sign up as Driver</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign up with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleSignIn}
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

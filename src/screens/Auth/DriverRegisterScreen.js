import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker';

export default function DriverRegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [driverImage, setDriverImage] = useState(null);
  const [carImage, setCarImage] = useState(null);
  const [uploading, setUploading] = useState(false);

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
    }
  };

  const pickImage = async type => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
    };
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to pick image');
      } else if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        if (type === 'driver') {
          setDriverImage(uri);
        } else {
          setCarImage(uri);
        }
      }
    });
  };

  const uploadImage = async (uri, path) => {
    setUploading(true);
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });
      const ref = storage().ref().child(path);
      await ref.put(blob);
      blob.close();
      const downloadURL = await ref.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    } finally {
      setUploading(false);
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
        await firestore().collection('users').doc(user.uid).set({
          username: user.displayName,
          email: user.email,
          role: 'driver',
          createdAt: firestore.FieldValue.serverTimestamp(),
          profileCompleted: false,
        });
        await firestore()
          .collection('drivers')
          .doc(user.uid)
          .set({
            userId: user.uid,
            fullName: user.displayName || '',
            email: user.email,
            isAvailable: false,
            rating: 0,
            totalRides: 0,
            createdAt: firestore.FieldValue.serverTimestamp(),
            profileCompleted: false,
          });
      }
      Alert.alert('Success', `Welcome ${user.displayName}!`);
      navigation.navigate('DriverCompleteProfile');
    } catch (err) {
      console.error('Google Sign-In error:', err);
      Alert.alert('Error', err.message || 'Google Sign-In failed');
    }
  };

  const handleSignUp = async () => {
    // Basic validation including bank account required
    if (!email || !password || !username || !fullName || !bankAccount) {
      Alert.alert(
        'Error',
        'Please fill all required fields including bank account.',
      );
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }
    if (!/^[0-9]{6,}$/.test(bankAccount)) {
      Alert.alert('Error', 'Enter a valid bank account number.');
      return;
    }
    setUploading(true);
    try {
      // Create user with email/password
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      // Upload images if selected
      let driverImageUrl = '';
      let carImageUrl = '';
      if (driverImage) {
        const driverRef = storage().ref(`drivers/${user.uid}/driver.jpg`);
        await driverRef.putFile(driverImage.uri);
        driverImageUrl = await driverRef.getDownloadURL();
      }
      if (carImage) {
        const carRef = storage().ref(`drivers/${user.uid}/car.jpg`);
        await carRef.putFile(carImage.uri);
        carImageUrl = await carRef.getDownloadURL();
      }

      // Store user basics in 'users' collection with role
      await firestore().collection('users').doc(user.uid).set({
        username,
        email,
        role: 'driver', // Set role
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      await user.sendEmailVerification();

      // Store driver-specific details in 'drivers' collection
      await firestore().collection('drivers').doc(user.uid).set({
        fullName,
        carModel,
        carColor,
        licensePlate,
        bankAccount,
        driverLicense,
        driverImage: driverImageUrl,
        carImage: carImageUrl,
        isAvailable: false, // Default
        isOnline: false, // Default
        totalEarnings: 0,
        totalRides: 0,
        rating: 0,
        totalRatings: 0,
        currentLocation: null, // Will be updated later
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // Success alert
      Alert.alert(
        'Success',
        'Driver registration complete!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Additional alert to check email
              Alert.alert(
                'Verify Your Email',
                'Please check your inbox (and spam/junk folder) to verify your email before logging in. Once verified, you can log in.',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('DriverHome'),
                  },
                ],
              );
            },
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      // ... (existing error handling)
      console.error('Sign-up error:', error);
      let errorMessage = 'Sign-up failed';
      if (error.code) {
        switch (error.code) {
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
            errorMessage = error.message || errorMessage;
        }
      } else {
        errorMessage = 'An unexpected error occurred. Please try again.';
      }
      Alert.alert('Error', errorMessage);
    }
    setUploading(false);
  };

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Driver Sign Up</Text>

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
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.sectionTitle}>Driver Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#ccc"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Car Model"
          placeholderTextColor="#ccc"
          value={carModel}
          onChangeText={setCarModel}
        />

        <TextInput
          style={styles.input}
          placeholder="Car Color"
          placeholderTextColor="#ccc"
          value={carColor}
          onChangeText={setCarColor}
        />

        <TextInput
          style={styles.input}
          placeholder="License Plate"
          placeholderTextColor="#ccc"
          value={licensePlate}
          onChangeText={setLicensePlate}
        />

        <TextInput
          style={styles.input}
          placeholder="Bank Account Number"
          placeholderTextColor="#ccc"
          value={bankAccount}
          onChangeText={setBankAccount}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Driver License Number"
          placeholderTextColor="#ccc"
          value={driverLicense}
          onChangeText={setDriverLicense}
        />

        <Text style={styles.uploadTitle}>Upload Photos</Text>

        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickImage('driver')}
            disabled={uploading}
          >
            <Icon name="camera" size={20} color="#fff" />
            <Text style={styles.uploadText}>
              {driverImage ? 'Driver Photo Uploaded' : 'Driver Photo'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickImage('car')}
            disabled={uploading}
          >
            <Icon name="car" size={20} color="#fff" />
            <Text style={styles.uploadText}>
              {carImage ? 'Car Photo Uploaded' : 'Car Photo'}
            </Text>
          </TouchableOpacity>
        </View>
        {uploading && (
          <Text style={styles.uploadingText}>Uploading images...</Text>
        )}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSignUp}
          disabled={uploading}
        >
          <Text style={styles.primaryButtonText}>
            {uploading ? 'Creating Account...' : 'Sign up as Driver'}
          </Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
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
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: '15%',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#0F0E0E',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  uploadTitle: {
    color: '#0F0E0E',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#0F0E0E',
    color: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  uploadButton: {
    flex: 1,
    backgroundColor: '#0F0E0E',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3C3C3C',
    borderStyle: 'dashed',
  },
  uploadText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  uploadingText: {
    color: '#00FF6A',
    textAlign: 'center',
    marginBottom: 15,
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
  },
});

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage'; // Add Firebase Storage
import auth from '@react-native-firebase/auth';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ProfileSettingsScreen({ navigation }) {
  const uid = auth().currentUser?.uid;

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [driverImage, setDriverImage] = useState(null); // Store local URI for preview
  const [carImage, setCarImage] = useState(null); // Store local URI for preview
  const [driverImageUrl, setDriverImageUrl] = useState(null); // Store Firebase Storage URL
  const [carImageUrl, setCarImageUrl] = useState(null); // Store Firebase Storage URL

  // Fetch profile data
  useEffect(() => {
    const fetchData = async () => {
      if (!uid) {
        Alert.alert('Error', 'User not authenticated');
        setLoading(false);
        return;
      }

      try {
        const driverDoc = await firestore()
          .collection('drivers')
          .doc(uid)
          .get();
        const userDoc = await firestore().collection('users').doc(uid).get();

        if (driverDoc.exists) {
          const data = driverDoc.data();
          setFullName(data.fullName || '');
          setCarModel(data.carModel || '');
          setCarColor(data.carColor || '');
          setLicensePlate(data.licensePlate || '');
          setBankAccount(data.bankAccount || '');
          setBankName(data.bankName || '');
          setBankAccountName(data.bankAccountName || '');
          setDriverLicense(data.driverLicense || '');
          setDriverImage(data.driverImageUrl || null); // Load Firebase Storage URL
          setCarImage(data.carImageUrl || null); // Load Firebase Storage URL
        }

        if (userDoc.exists) {
          const data = userDoc.data();
          setUsername(data.username || '');
          setEmail(data.email || '');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        Alert.alert('Error', 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  // Pick Image
  const pickImage = async type => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.didCancel || !response.assets) {
        console.log('Image picker cancelled or no assets');
        return;
      }

      const asset = response.assets[0];
      const uri = asset.uri;

      if (type === 'driver') {
        setDriverImage(uri); // Set local URI for preview
      } else {
        setCarImage(uri); // Set local URI for preview
      }
    });
  };

  // Upload Image to Firebase Storage
  const uploadImage = async (uri, path) => {
    if (!uri) return null;

    try {
      const reference = storage().ref(path);
      await reference.putFile(uri); // Upload image to Firebase Storage
      const downloadUrl = await reference.getDownloadURL(); // Get download URL
      return downloadUrl;
    } catch (err) {
      console.error(`Error uploading image to ${path}:`, err);
      throw err;
    }
  };

  // Save changes
  const handleSave = async () => {
    if (!uid) {
      Alert.alert('Error', 'User not authenticated');
      return;
    }

    try {
      setUploading(true);

      // Upload images to Firebase Storage
      let driverImageUrlNew = driverImageUrl;
      let carImageUrlNew = carImageUrl;

      if (driverImage && !driverImage.startsWith('https://')) {
        // Only upload if the image is a local URI (not already a Firebase URL)
        driverImageUrlNew = await uploadImage(
          driverImage,
          `drivers/${uid}/driverImage.jpg`,
        );
        setDriverImageUrl(driverImageUrlNew); // Update state with new URL
      }

      if (carImage && !carImage.startsWith('https://')) {
        // Only upload if the image is a local URI
        carImageUrlNew = await uploadImage(
          carImage,
          `drivers/${uid}/carImage.jpg`,
        );
        setCarImageUrl(carImageUrlNew); // Update state with new URL
      }

      // Save profile data to Firestore
      await firestore()
        .collection('users')
        .doc(uid)
        .set({ username, email }, { merge: true });

      await firestore()
        .collection('drivers')
        .doc(uid)
        .set(
          {
            fullName,
            carModel,
            carColor,
            licensePlate,
            bankAccount,
            bankName,
            bankAccountName,
            driverLicense,
            driverImageUrl: driverImageUrlNew || null, // Store Firebase URL
            carImageUrl: carImageUrlNew || null, // Store Firebase URL
          },
          { merge: true },
        );

      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      console.error('Save error:', error);
      Alert.alert('Error', `Failed to save profile: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B00" />
      </View>
    );
  }

  return (
    <LinearGradient colors={['#1A1A1A', '#2C2C2C']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Profile Settings</Text>

        {/* Profile Image */}
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => pickImage('driver')}>
            {driverImage ? (
              <Image source={{ uri: driverImage }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Icon name="user" size={40} color="#aaa" />
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.avatarLabel}>Tap to update profile picture</Text>
        </View>

        {/* Inputs */}
        {[
          { placeholder: 'Username', value: username, setValue: setUsername },
          {
            placeholder: 'Email',
            value: email,
            setValue: setEmail,
            keyboardType: 'email-address',
          },
          { placeholder: 'Full Name', value: fullName, setValue: setFullName },
          { placeholder: 'Car Model', value: carModel, setValue: setCarModel },
          { placeholder: 'Car Color', value: carColor, setValue: setCarColor },
          {
            placeholder: 'License Plate',
            value: licensePlate,
            setValue: setLicensePlate,
          },
          {
            placeholder: 'Bank Name',
            value: bankName,
            setValue: setBankName,
          },
          {
            placeholder: 'Bank Account Name',
            value: bankAccountName,
            setValue: setBankAccountName,
          },
          {
            placeholder: 'Bank Account Number',
            value: bankAccount,
            setValue: setBankAccount,
            keyboardType: 'numeric',
          },
          {
            placeholder: 'Driver License',
            value: driverLicense,
            setValue: setDriverLicense,
          },
        ].map((field, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={field.placeholder}
            placeholderTextColor="#888"
            value={field.value}
            onChangeText={field.setValue}
            keyboardType={field.keyboardType || 'default'}
          />
        ))}

        {/* Car Image */}
        <TouchableOpacity
          style={styles.imageCard}
          onPress={() => pickImage('car')}
        >
          {carImage ? (
            <Image source={{ uri: carImage }} style={styles.carImage} />
          ) : (
            <View style={styles.carPlaceholder}>
              <Icon name="car" size={35} color="#aaa" />
              <Text style={{ color: '#aaa', marginTop: 5 }}>
                Upload Car Image
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          disabled={uploading}
        >
          {uploading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.saveButtonText}>Save Changes</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexGrow: 1, padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  avatarContainer: { alignItems: 'center', marginBottom: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF6B00',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLabel: { color: '#aaa', fontSize: 14, marginTop: 8 },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
  },
  imageCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  carImage: { width: '100%', height: '100%', borderRadius: 12 },
  carPlaceholder: { justifyContent: 'center', alignItems: 'center' },
  saveButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
});

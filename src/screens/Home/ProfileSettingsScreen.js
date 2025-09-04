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
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'react-native-image-picker';

export default function ProfileSettingsScreen({ navigation }) {
  // 🔥 TEMPORARY UID for testing
  const uid = 'test-user-123';

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [driverImage, setDriverImage] = useState(null);
  const [carImage, setCarImage] = useState(null);

  // Fetch profile data
  useEffect(() => {
    const fetchData = async () => {
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
          setDriverLicense(data.driverLicense || '');
          setDriverImage(data.driverImage || null);
          setCarImage(data.carImage || null);
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

  const pickImage = type => {
    const options = { mediaType: 'photo', quality: 0.8 };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', 'Failed to pick image');
      } else if (response.assets?.length) {
        if (type === 'driver') {
          setDriverImage(response.assets[0].uri);
        } else {
          setCarImage(response.assets[0].uri);
        }
      }
    });
  };

  const uploadImage = async (uri, path) => {
    if (!uri) return null;
    setUploading(true);
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(new TypeError('Network request failed'));
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });

      const ref = storage().ref().child(path);
      await ref.put(blob);
      blob.close();
      return await ref.getDownloadURL();
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to upload image');
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    try {
      setUploading(true);
      const driverImageURL = driverImage?.startsWith('http')
        ? driverImage
        : await uploadImage(driverImage, `drivers/${uid}/profile.jpg`);
      const carImageURL = carImage?.startsWith('http')
        ? carImage
        : await uploadImage(carImage, `drivers/${uid}/car.jpg`);

      await firestore()
        .collection('users')
        .doc(uid)
        .set({ username, email }, { merge: true });

      await firestore().collection('drivers').doc(uid).set(
        {
          fullName,
          carModel,
          carColor,
          licensePlate,
          bankAccount,
          driverLicense,
          driverImage: driverImageURL,
          carImage: carImageURL,
        },
        { merge: true },
      );

      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      console.error('Save error:', error);
      Alert.alert('Error', 'Failed to save profile');
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
            placeholder: 'Bank Account',
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

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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'react-native-image-picker';

export default function ProfileSettingsScreen({ navigation }) {
  const user = auth().currentUser;
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
          .doc(user.uid)
          .get();
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();

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
  }, [user.uid]);

  const pickImage = type => {
    const options = { mediaType: 'photo', quality: 0.8 };
    ImagePicker.launchImageLibrary(options, async response => {
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
        : await uploadImage(driverImage, `drivers/${user.uid}/profile.jpg`);
      const carImageURL = carImage?.startsWith('http')
        ? carImage
        : await uploadImage(carImage, `drivers/${user.uid}/car.jpg`);

      await firestore().collection('users').doc(user.uid).update({
        username,
        email,
      });

      await firestore().collection('drivers').doc(user.uid).update({
        fullName,
        carModel,
        carColor,
        licensePlate,
        bankAccount,
        driverLicense,
        driverImage: driverImageURL,
        carImage: carImageURL,
      });

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
        <Text style={{ color: '#000' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#0F0E0E', '#FFFCFB']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Profile Settings</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Model"
          value={carModel}
          onChangeText={setCarModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Color"
          value={carColor}
          onChangeText={setCarColor}
        />
        <TextInput
          style={styles.input}
          placeholder="License Plate"
          value={licensePlate}
          onChangeText={setLicensePlate}
        />
        <TextInput
          style={styles.input}
          placeholder="Bank Account"
          value={bankAccount}
          onChangeText={setBankAccount}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Driver License"
          value={driverLicense}
          onChangeText={setDriverLicense}
        />

        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => pickImage('driver')}>
            {driverImage ? (
              <Image
                source={{ uri: driverImage }}
                style={styles.imagePreview}
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#fff' }}>Driver Image</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => pickImage('car')}>
            {carImage ? (
              <Image source={{ uri: carImage }} style={styles.imagePreview} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#fff' }}>Car Image</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          disabled={uploading}
        >
          <Text style={styles.saveButtonText}>
            {uploading ? 'Saving...' : 'Save Changes'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexGrow: 1, padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imagePreview: { width: 100, height: 100, borderRadius: 12 },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

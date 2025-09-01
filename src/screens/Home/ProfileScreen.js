import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Fetch user profile data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (!user) return;
        setEmail(user.email);
        const doc = await firestore().collection('users').doc(user.uid).get();
        if (doc.exists) {
          const data = doc.data();
          setUsername(data.username || '');
        } else {
          console.log('No user document found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Save changes to Firestore (username only)
  const handleSave = async () => {
    try {
      const user = auth().currentUser;
      if (!user) {
        Alert.alert('Error', 'No authenticated user found');
        return;
      }

      // Update Firestore with username only
      await firestore().collection('users').doc(user.uid).set(
        {
          username,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );

      Alert.alert('Success', 'Username updated successfully');
    } catch (error) {
      console.error('Profile update error:', error);
      Alert.alert('Error', `Failed to update username: ${error.message}`);
    }
  };

  // Logout user
  const handleLogout = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('userLoggedIn');
    } catch (error) {
      Alert.alert('Logout Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture Placeholder (non-functional) */}
      <View style={styles.profilePicContainer}>
        <View style={styles.defaultImage}>
          <Icon name="person-circle-outline" size={100} color="#FFFCFB" />
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.readOnlyField}>
          <Text style={styles.readOnlyText}>{email}</Text>
        </View>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: '#FF3B30' }]}
        onPress={handleLogout}
      >
        <Text style={styles.saveText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0E',
    padding: 20,
    alignItems: 'center',
  },
  profilePicContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  defaultImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  infoContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    color: '#FFFCFB',
    fontSize: 16,
    marginBottom: 8,
  },
  readOnlyField: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  readOnlyText: {
    color: '#ccc',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFFCFB',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 25,
  },
  saveButton: {
    backgroundColor: '#0066FF',
    borderRadius: 30,
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

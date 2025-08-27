import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  const [username, setUsername] = useState('John Doe');
  const [email] = useState('john.doe@example.com'); // Email is read-only
  const [profilePic, setProfilePic] = useState(null); // Default no image

  const handleImageChange = () => {
    Alert.alert('Change Profile Picture', 'This will open image picker.');
    // Later integrate image picker: react-native-image-picker or expo-image-picker
  };

  const handleSave = () => {
    Alert.alert('Profile Updated', `Username changed to ${username}`);
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
    // Integrate actual logout logic here
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profilePicContainer}>
        <TouchableOpacity onPress={handleImageChange}>
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profileImage} />
          ) : (
            <View style={styles.defaultImage}>
              <Icon name="person-circle-outline" size={100} color="#FFFCFB" />
            </View>
          )}
          <View style={styles.editIcon}>
            <Icon name="camera" size={20} color="#FFFCFB" />
          </View>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleLogout}>
        <Text style={styles.saveText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  defaultImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#A91079',
    borderRadius: 20,
    padding: 5,
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

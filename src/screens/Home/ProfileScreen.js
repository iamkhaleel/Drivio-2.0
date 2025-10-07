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
import { useLanguage } from '../../context/LanguageContext';

export default function ProfileScreen({ navigation }) {
  const { t, language, setLanguage } = useLanguage();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [canAccessAdmin, setCanAccessAdmin] = useState(false);

  const ADMIN_EMAILS = [
    'rawadmuaz@gmail.com',
    'khaleelibraheem341@gmail.com',
    'ktubefootball@gmail.com',
  ];

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

        // Determine admin access: whitelist OR custom claim
        const isWhitelisted = ADMIN_EMAILS.includes(
          (user.email || '').toLowerCase(),
        );
        let hasClaim = false;
        try {
          await user.getIdToken(true);
          const tokenResult = await user.getIdTokenResult();
          hasClaim = tokenResult?.claims?.admin === true;
        } catch (e) {
          // ignore
        }
        setCanAccessAdmin(isWhitelisted || hasClaim);
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
      // Reset navigation stack to Login screen
      navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
    } catch (error) {
      Alert.alert('Logout Error', error.message);
    }
  };

  const navigateToAdminIfAllowed = async () => {
    try {
      const user = auth().currentUser;
      if (!user) return;

      const isWhitelisted = ADMIN_EMAILS.includes(
        (user.email || '').toLowerCase(),
      );
      if (isWhitelisted) {
        navigation.navigate('Admin');
      } else {
        await user.getIdToken(true);
        const tokenResult = await user.getIdTokenResult();
        const isAdmin = tokenResult?.claims?.admin === true;
        if (isAdmin) {
          navigation.navigate('Admin');
        } else {
          Alert.alert('Access Denied', 'You are not an admin.');
        }
      }
    } catch (e) {
      Alert.alert('Error', 'Could not verify admin access');
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
        <Text style={styles.label}>{t('email')}</Text>
        <View style={styles.readOnlyField}>
          <Text style={styles.readOnlyText}>{email}</Text>
        </View>

        <Text style={styles.label}>{t('username')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('enterUsername')}
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>{t('saveChanges')}</Text>
      </TouchableOpacity>

      {/* Language Switcher */}
      <View style={[styles.infoContainer, { marginTop: 10 }]}>
        <Text style={styles.label}>{t('language')}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => setLanguage('en')}
            style={{ marginRight: 16 }}
          >
            <Text
              style={{
                color: language === 'en' ? '#A91079' : '#FFFCFB',
                fontWeight: 'bold',
              }}
            >
              {t('english')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLanguage('ar')}>
            <Text
              style={{
                color: language === 'ar' ? '#A91079' : '#FFFCFB',
                fontWeight: 'bold',
              }}
            >
              {t('arabic')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: '#FF3B30' }]}
        onPress={handleLogout}
      >
        <Text style={styles.saveText}>{t('logoutBtn')}</Text>
      </TouchableOpacity>

      {/* Hidden/Conditional Admin Button */}
      {canAccessAdmin && (
        <TouchableOpacity
          style={[
            styles.saveButton,
            { backgroundColor: '#333', marginTop: 10 },
          ]}
          onPress={navigateToAdminIfAllowed}
        >
          <Text style={styles.saveText}>Admin</Text>
        </TouchableOpacity>
      )}
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

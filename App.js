import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import DriverRegisterScreen from './src/screens/Auth/DriverRegisterScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import DriverHomeScreen from './src/screens/Home/DriverHomeScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import EarningHistoryScreen from './src/screens/Home/EarningHistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      let route;
      if (user) {
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
        const role = userDoc.exists ? userDoc.data().role : 'rider';
        await AsyncStorage.setItem('userRole', role);
        route = role === 'driver' ? 'DriverHome' : 'Main';
      } else {
        route = 'Onboarding';
      }

      // force splash screen to stay for at least 2s
      setTimeout(() => {
        setInitialRoute(route);
        setIsLoading(false);
      }, 2000);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LottieView
          source={require('./src/assets/images/Blocks.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DriverRegister" component={DriverRegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="DriverHome" component={DriverHomeScreen} />
        <Stack.Screen name="EarningHistory" component={EarningHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { getUser } from '../utils/AuthStorage';
import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import EmailVerificationScreen from '../screens/Auth/EmainVerificationScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const checkUser = async () => {
  //       const user = await getUser();
  //       if (user) {
  //         navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
  //       } else {
  //         setLoading(false);
  //       }
  //     };
  //     checkUser();
  //   }, []);

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;

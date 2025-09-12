// navigation/MainDrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from '../navigation/MainTabNavigator';
import WithdrawalScreen from '../screens/Home/Withdrawal';
import EarningHistoryScreen from '../screens/Home/EarningHistoryScreen';
import ProfileSettingsScreen from '../screens/Home/ProfileSettingsScreen';
import Withdrawal from '../screens/Home/Withdrawal';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#000' },
        drawerLabelStyle: { color: '#fff' },
      }}
    >
      <Drawer.Screen name="HomeTabs" component={MainTabNavigator} />
      <Drawer.Screen name="EarningsHistory" component={EarningHistoryScreen} />
      <Drawer.Screen name="WithdrawalScreen" component={Withdrawal} />
      <Drawer.Screen
        name="ProfileSettingsScreen"
        component={ProfileSettingsScreen}
      />
    </Drawer.Navigator>
  );
}



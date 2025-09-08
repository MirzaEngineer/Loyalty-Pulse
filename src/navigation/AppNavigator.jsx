// AppNavigator.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInStackNavigation from './LoginStack';
import HomeBottom from './HomeBottom';
import ScanScreen from '../screens/ScanScreen';
import RedeemCashScreen from '../screens/RedeemCashScreen';
import BuyItemScreen from '../screens/BuyItemScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ByItemForm from '../screens/ByItemForm';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={SignInStackNavigation} />
      <Stack.Screen name="Home" component={HomeBottom} />
      <Stack.Screen 
        name="ScanModal" 
        component={ScanScreen}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="BuyItem" component={BuyItemScreen} />
      <Stack.Screen name="RedeemCash" component={RedeemCashScreen} />
      <Stack.Screen name="ItemForm" component={ByItemForm} />


    </Stack.Navigator>

  );
};

export default AppNavigator;

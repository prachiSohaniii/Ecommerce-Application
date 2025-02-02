import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Screens/Main';
import ProductDetail from './Screens/ProductDetail'
import HomeData from './Screens/HomeData';
import Cart from './Screens/Cart';
import LoginScreen from './Screens/Auth/LoginScreen';
import SignUpScreen from './Screens/Auth/SignUpScreen'
import Homescreen from './Screens/Homescreen';
import Checkout from './Screens/Checkout';
import Addresses from './Screens/Addresses';
import AddAddress from './Screens/AddAddress';
import OrderScreen from './Screens/OrderScreen';
import Order from './Screens/Order';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="HomeData"
          component={HomeData}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

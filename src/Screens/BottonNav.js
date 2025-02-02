import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Whislist from './Whislist';
import Search from './Search';
import Notification from './Notification';
import Profile from './Profile';
import {Image} from 'react-native';
import HomeData from './HomeData';
const Tab = createBottomTabNavigator();
const BottonNav = () => {
  return (
    <Tab.Navigator initialRouteName='HomeData'>
      <Tab.Screen
        name="Home"
        component={HomeData}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: '#292B44'}}
                source={require('../Images/home.png')}
                
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: '#292B44'}}
                source={require('../Images/search.png')}
                
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Whislist"
        component={Whislist}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: '#292B44'}}
                source={require('../Images/heart.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: '#292B44'}}
                source={require('../Images/user.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonNav;

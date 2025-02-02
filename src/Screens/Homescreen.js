import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import BottonNav from './BottonNav';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const Homescreen = ({}) => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header
        Menu={require('../Images/menu.png')}
        cart={require('../Images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCard={true}
      />
      <BottonNav />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

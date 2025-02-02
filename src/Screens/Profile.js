import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileView}
        source={require('../Images/profile.png')}
      />
      <Text style={styles.name}>{'Prachi'}</Text>
      <Text style={[styles.name, {fontSize: 16, marginTop: 1}]}>
        {'Prachi@gmail.com'}
      </Text>
      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}>
        <Text style={styles.textBtn}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 15}]} onPress={()=>{navigation.navigate('Order')}}>
        <Text style={styles.textBtn}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 15}]} onPress={()=>{navigation.navigate('Addresses')}}>
        <Text style={styles.textBtn}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 15}]}>
        <Text style={styles.textBtn}>Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen')}} style={[styles.tab, {marginTop: 15}]}>
        <Text style={styles.textBtn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileView: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 100,
    width: 100,
    marginTop: 100,
  },
  container: {
    flex: 1,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
  },
  tab: {
    height: 50,
    width: '90%',
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    borderBottomColor: 'light Gray',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  textBtn: {
    color: 'black',
  },
});

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Addresses = ({navigation}) => {
  const addresslist = useSelector(state => state.address);
  console.log('selector', addresslist);

  // const [data,setData]=useState("")
  // // const isFocused=useIsFocused()
  // useEffect(()=>{
  //   console.log('dataaaa',addresslist)
  // },[])
  const defaultAddress = async (item) => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      `${item.state},${item.city},${item.pincode},${item.homeAdd},${item.offAdd}`
    );
    navigation.goBack();
  };
  return (
    <View>
      <Header
        Menu={require('../Images/back.png')}
        title={'Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />

     
        <FlatList
          data={addresslist.data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
              onPress={() => {
                defaultAddress(item);
              }}>
              <View style={styles.listView}>
                <Text style={styles.text}>{`State : ${item.state}`}</Text>
                <Text style={styles.text}>{`City : ${item.city}`}</Text>
                <Text style={styles.text}>{`Pincode : ${item.pincode}`}</Text>
                <Text
                  style={styles.text}>{`Home Address : ${item.homeAdd}`}</Text>
                <Text
                  style={styles.text}>{`Office Address : ${item.offAdd}`}</Text>
              </View>
              </TouchableOpacity>
            );
          }}
        />
    

      <View style={{marginTop: '100%'}}>
        <TouchableOpacity
          style={styles.addbtn}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  addbtn: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    borderRadius: 35,
    position: 'absolute',
    top: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 25,
    color: 'white',
  },
  listView: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    marginLeft: 20,
    padding: 2,
  },
});

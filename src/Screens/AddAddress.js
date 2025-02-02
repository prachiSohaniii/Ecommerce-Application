import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CoustomButton from '../Components/CoustomButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../Redux/Slices/AddressSlice';

const AddAddress = ({navigation}) => {
  const [state, setState] = useState('');
  const [pincode, setpincode] = useState('');
  const [city, setCity] = useState('');
  const [homeAdd, setHomeAdd] = useState('');
  const [offAdd, setOffAdd] = useState('');

  const dispatch = useDispatch();

  return (
    <View>
      <Header
        Menu={require('../Images/back.png')}
        title={'Add Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View>
        <TextInput
          style={[styles.input, {marginTop: 60}]}
          placeholder="Enter State"
          onChangeText={txt => {
            setState(txt);
          }}
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Enter PinCode"
          keyboardType="numeric"
          onChangeText={txt => {
            setpincode(txt);
          }}
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Enter City"
          onChangeText={txt => {
            setCity(txt);
          }}
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Home Address"
          onChangeText={txt => {
            setHomeAdd(txt);
          }}
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Office Address"
          onChangeText={txt => {
            setOffAdd(txt);
          }}
        />
      </View>
      <CoustomButton
        bg={'#292B44'}
        title={'Save Address'}
        color={'white'}
        onClick={() => {
          dispatch(
            addAddress({
              state: state,
              pincode: pincode,
              city: city,
              homeAdd: homeAdd,
              offAdd: offAdd,
            }),
            navigation.goBack()
          );
        }}
      />
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 55,
    width: '90%',
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});

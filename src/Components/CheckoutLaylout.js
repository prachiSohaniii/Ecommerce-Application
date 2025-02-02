import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CheckoutLaylout = ({items,total}) => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={{color:'black'}}>{`Items ${items}`}</Text>
        <Text  style={{color:'black',fontWeight:'700',fontSize:16}}>{'Total : $'+ total}</Text>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Checkout')}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>
            {'Checkout'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutLaylout;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: 70,
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50',
  },
  btn: {
    backgroundColor: '#292B44',
    height: 50,
    width: '200%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'centers',
  },
});

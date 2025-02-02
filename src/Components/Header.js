import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const Header = ({Menu, cart, title, onClickLeftIcon,isCard}) => {
  const selector = useSelector(state => state.cart);
  const navigation=useNavigation()
  return (
    <View style={styles.headerBackground}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => onClickLeftIcon()}>
        <Image source={Menu} style={styles.MenuIcon} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      {!isCard && <View></View>} 
   {isCard &&   <TouchableOpacity style={styles.btnStyle} onPress={()=>{navigation.navigate('Cart')}}>
        <Image
          source={cart}
          style={[styles.MenuIcon, {width: 28, height: 28}]}
        />
      
        <View style={styles.lengthTextView}>
          <Text style={{alignSelf: 'center', color: 'black'}}>
            {selector.data.length}
          </Text>
        </View>
      </TouchableOpacity>}
    
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBackground: {
    width: width,
    height: 60,
    backgroundColor: '#292B44',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },

  btnStyle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuIcon: {
    height: 20,
    width: 20,
    tintColor: 'white',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
  },
  lengthTextView: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 20,
    right: 0,
    top: 0,
  },
});

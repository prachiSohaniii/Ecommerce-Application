import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CoustomButton from '../Components/CoustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addWishlist} from '../Redux/Slices/WishlistSlice';
import { addToCart } from '../Redux/Slices/CartSlice';
import { showMessage } from 'react-native-flash-message';

const ProductDetail = (...props) => {
  const navigation = useNavigation();

  const route = useRoute();
  const dispatch = useDispatch();
  const [qty ,setQty]=useState(1)
  return (
    <ScrollView style={styles.container}>
      <Header
        Menu={require('../Images/back.png')}
        cart={require('../Images/cart.png')}
        isCard={true}
        title={'Product Details'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <Image style={styles.image} source={{uri: route.params.data.image}} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.description}>{route.params.data.description}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.price, {color: 'black'}]}>Price :</Text>
        <Text style={styles.price}>{'$' + ' ' + route.params.data.price}</Text>
        <TouchableOpacity
          style={styles.wishlist}
          onPress={() => {
            dispatch(addWishlist(route.params.data));
            showMessage({
              message: "Item Added to wishlist",
              type: "default",
              backgroundColor: 'hwb(0, 0%, 100%)', // background color
              color: "white",
              position:'center' // text color
            });
          }}>
          <Image
            style={styles.icon}
            source={require('../Images/fillHeart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.quntyView}>
      <TouchableOpacity style={styles.qytybtn} onPress={()=>{ setQty(qty+1)
                  }}>
                    <Text style={styles.textColor}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.qutyLen}>{qty}</Text>
                  <TouchableOpacity style={styles.qytybtn} onPress={()=>{if(qty-1){setQty(qty-1)}else{qty}
                   
                    }}>
                    <Text style={styles.textColor}>-</Text>
                  </TouchableOpacity>
      </View>
      <CoustomButton
        bg={'#292B44'}
        title={'Add to Cart'}
        color={'white'}
        onClick={() => {dispatch(addToCart(route.params.data)), showMessage({
          message: "Item Added to cart",
          type: "default",
          backgroundColor: 'hwb(0, 0%, 100%)', // background color
          color: "white",
          position:'center' // text color
        });}}
      />
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    margin: 10,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    // marginRight:10,
    color: 'green',
    marginTop: 10,
  },
  wishlist: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#E2DFDF',
    position: 'absolute',
    right: 0,
    marginRight: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:4
  },
  icon: {
    height: 25,
    width: 25,
  },
  qytybtn:{
    backgroundColor:'#e6e6fa',
    height:35,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginVertical:3,
    borderWidth:1,
    borderColor:'#292B44'
    },
    textColor:{
     color:'#292B44',
     fontSize:20
    },
    qutyLen:{
     alignSelf:'center',
     color:'#292B44'
    },
    quntyView:{
      flexDirection:'row',
      gap:15,
      marginLeft:20,
      marginVertical:10
     
  },
});

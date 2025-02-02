import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import {addToCart, emptycart, reduceToCart, removeToCart} from '../Redux/Slices/CartSlice';
import CheckoutLaylout from '../Components/CheckoutLaylout';
import CoustomButton from '../Components/CoustomButton';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import { orderItem } from '../Redux/Slices/OrderSlice';
const Checkout = ({navigation}) => {
  const selector = useSelector(state => state.cart);
  console.log('.......', JSON.stringify(selector) + ' ' + selector.data.length);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [selectAddress, setSelectAddress] = useState('Select new address');
  // const [listData, setListData] = useState(selector.data);
  const getTotal = () => {
    total = 0;
    selector.data.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getAddress();
  }, [isFocused]);

  const getAddress = async () => {
    setSelectAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };

const orderPlaced=(paymentId)=>{
  const data={
    items:selector.data,
    amount:getTotal(),
    address:selectAddress,
    paymentId:paymentId,
    paymentStatus:selected == 3 ? 'pending' :'success'
  };
  dispatch(orderItem(data))
  dispatch(emptycart([]))
  navigation.navigate('OrderScreen')
  
}


  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          Menu={require('../Images/back.png')}
          title={'Checkout'}
          onClickLeftIcon={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginVertical: 15,
            marginLeft: 20,
            color: 'black',
            fontWeight: '700',
          }}>
          Added Items
        </Text>
        <FlatList
          data={selector.data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductDetail', {data: item});
                }}
                style={styles.listView}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View>
                  <Text style={styles.title}>
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + '...'
                      : item.title}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {item.description.length > 50
                      ? item.description.substring(0, 40) + '....'
                      : item.description}
                  </Text>
                  <View style={styles.quntyView}>
                    <Text style={styles.priceText}>
                      {'$' + ' ' + item.price}
                    </Text>

                    <TouchableOpacity
                      style={styles.qytybtn}
                      onPress={() => {
                        dispatch(addToCart(item));
                      }}>
                      <Text style={styles.textColor}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.qutyLen}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.qytybtn}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(reduceToCart(item));
                        } else {
                          dispatch(removeToCart(index));
                        }
                      }}>
                      <Text
                        style={styles.textColor}
                        onPress={() => {
                          dispatch(removeToCart(item));
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {selector.data.length < 1 && (
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              height: '100%',
              width: '70%',
              resizeMode: 'contain',
            }}
            source={require('../Images/nthing.png')}
          />
        )}
        {selector.data.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
              borderBottomWidth: 0.5,
            }}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>{'$' + getTotal()}</Text>
          </View>
        )}
        <Text
          style={{
            fontSize: 20,
            marginVertical: 15,
            marginLeft: 20,
            color: 'black',
            fontWeight: '700',
          }}>
          Select Payment Method
        </Text>

        <TouchableOpacity
          style={styles.paymentmethod}
          onPress={() => {
            setSelected(0);
          }}>
          <Image
            style={styles.radioImage}
            source={
              selected == 0
                ? require('../Images/selected.png')
                : require('../Images/nonselected.png')
            }
          />
          <Text style={styles.cardname}>Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentmethod}
          onPress={() => {
            setSelected(1);
          }}>
          <Image
            style={styles.radioImage}
            source={
              selected == 1
                ? require('../Images/selected.png')
                : require('../Images/nonselected.png')
            }
          />
          <Text style={styles.cardname}>Debit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentmethod}
          onPress={() => {
            setSelected(2);
          }}>
          <Image
            style={styles.radioImage}
            source={
              selected == 2
                ? require('../Images/selected.png')
                : require('../Images/nonselected.png')
            }
          />
          <Text style={styles.cardname}>UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentmethod}
          onPress={() => {
            setSelected(3);
          }}>
          <Image
            style={styles.radioImage}
            source={
              selected == 3
                ? require('../Images/selected.png')
                : require('../Images/nonselected.png')
            }
          />
          <Text style={styles.cardname}>Cash On Delivery</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 20,
              marginVertical: 15,
              marginLeft: 20,
              color: 'black',
              fontWeight: '700',
            }}>
            Address
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Addresses');
            }}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 15,
                marginLeft: 20,
                color: 'darkblue',
                fontWeight: '700',
                marginRight: 20,
                textDecorationLine: 'underline',
              }}>
              Address
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 15, marginLeft: 20}}>{selectAddress}</Text>
        <CoustomButton
          bg={'#292B44'}
          title={'Pay And Order'}
          color={'white'}
          onClick={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_3BUgv8kWFdjYMv', // Your api key
              amount: getTotal()*100,
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
              },
              theme: {color: '#292B44'}
            }
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                // alert(`Success: ${data.razorpay_payment_id}`);
                orderPlaced(data.razorpay_payment_id)
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 30,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    margin: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  descriptionText: {
    marginLeft: 5,
  },
  priceText: {
    margin: 5,
    color: 'green',
    fontWeight: '500',
  },
  quntyView: {
    flexDirection: 'row',
    gap: 15,
  },
  qytybtn: {
    backgroundColor: '#e6e6fa',
    height: 35,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: '#292B44',
  },
  textColor: {
    color: '#292B44',
    fontSize: 20,
  },
  qutyLen: {
    alignSelf: 'center',
    color: '#292B44',
  },
  totalText: {
    color: 'black',
    fontWeight: '600',
    marginVertical: 10,
    fontSize: 15,
  },
  paymentmethod: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
  },
  radioImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: 20,
    tintColor: '#292B44',
  },
  cardname: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginLeft: 30,
  },
});

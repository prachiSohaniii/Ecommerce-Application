import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import {addToCart, reduceToCart, removeToCart} from '../Redux/Slices/CartSlice';
import CheckoutLaylout from '../Components/CheckoutLaylout';
const Cart = ({navigation}) => {
  const selector = useSelector(state => state.cart);
  console.log('.......', JSON.stringify(selector) + ' ' + selector.data.length);
  const dispatch = useDispatch();
  // const [listData, setListData] = useState(selector.data);
  const getTotal = () => {
    total = 0;
    selector.data.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  return (
    <View style={styles.container}>
      <Header
        Menu={require('../Images/back.png')}
        title={'Cart Items'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
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
                  <Text style={styles.priceText}>{'$' + ' ' + item.price}</Text>

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
        <CheckoutLaylout items={selector.data.length} total={getTotal()} />
      )}
    </View>
  );
};

export default Cart;

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
});

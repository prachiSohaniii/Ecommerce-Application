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
import {removeToCart} from '../Redux/Slices/CartSlice';
import { removeWishlist } from '../Redux/Slices/WishlistSlice';

const Whislist = ({navigation}) => {
  const selector = useSelector(state => state.wishlist);
  console.log('.......', JSON.stringify(selector) + ' ' + selector.data.length);
  const dispatch = useDispatch();

  // const [listData, setListData] = useState(selector.data);
  const handleRemoveItem = (indexToRemove) => {
    dispatch(removeWishlist(indexToRemove));
  };

  return (
    <View style={styles.container}>
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
                <Text style={styles.priceText}>{'$' + ' ' + item.price}</Text>
              </View>
              <TouchableOpacity onPress={()=>{handleRemoveItem(index)}}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                    position: 'absolute',
                    right: 0,
                  }}
                  source={require('../Images/bin.png')}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity>
        <Image
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
            position: 'absolute',
            right: 0,
            top: 20,
            marginRight: 10,
          }}
          source={require('../Images/bin.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Whislist;

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
});

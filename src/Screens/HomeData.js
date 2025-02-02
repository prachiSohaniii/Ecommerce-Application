import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Slices/ProductSlice';

const HomeData = ({navigation}) => {

  const [products, setProducts] = useState([]);
  const dispatch= useDispatch();

  console.log('products', products);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        json.map((item)=>{
          item.qty=1
        })
        dispatch(addProduct(json)); // Move dispatch inside the .then block
      })
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetail',{data:item})}} style={styles.listView}>
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
                  <Text style={styles.priceText}>{'$'+" "+item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:5
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
    resizeMode:'contain'
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
  priceText:{
    margin:5,
    color:'green',
    fontWeight:'500'
  }
});

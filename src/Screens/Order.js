import {FlatList, StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {useSelector} from 'react-redux';

const Order = ({navigation}) => {
  const orderList = useSelector(state => state.order);
  console.log(orderList)
  return (
    <View style={styles.container}>
      <Header
        Menu={require('../Images/back.png')}
        title={'Orders'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View >
        <FlatList
          data={orderList.data}
          renderItem={({item ,index}) => {
            console.log('itemsssssss',item)
            return (
              <View>
                <FlatList
                  data={item.items}
                  renderItem={({item,index}) => {
                    console.log('itemssss........',item)
                    return (
                      <View style={styles.listView}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.image}
                        />
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
                        </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
      },
      title: {
        color: 'black',
        margin: 6,
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
      listView: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        marginTop: 10,
        paddingVertical: 30,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:'black',
        borderColor:'gray',
        borderRadius:20
        
      },
      container: {
        flex: 1,
      },

});

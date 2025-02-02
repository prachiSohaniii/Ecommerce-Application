import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {LogBox} from 'react-native';


const Search = ({navigation}) => {
  const [search, setSearch] = useState('');

  const products = useSelector(state => state);
  const [oldData, setOldData] = useState(products.product.data);
  const [searchList,setSearchList]=useState([])

  const filterData = (text) => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    setSearchList(newData)
  };


// Ignore log notification by message
LogBox.ignoreLogs([
  // Exact message
  'Warning: componentWillReceiveProps has been renamed',

  // Substring or regex match
  /GraphQL error: .*/,
]);

// Ignore all log notifications
LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.searchImage}
            source={require('../Images/search.png')}
          />
          <TextInput
            placeholder="Search items here"
            value={search}
            onChangeText={text =>{ setSearch(text);
                          filterData(text)}}
            style={styles.input}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity onPress={()=>{setSearch(''), filterData('')}}>
            <Image
              style={[styles.searchImage, {marginRight: 20}]}
              source={require('../Images/close.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <FlatList 
        data={searchList}
        renderItem={({item})=>{
          return(
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
          )
        }}
        
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    height: 50,
    width: '90%',
    borderColor: '#292B44',
    borderRadius: 25,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchImage: {
    height: 50,
    width: 20,
    resizeMode: 'center',
    marginLeft: 20,
  },
  input: {
    width: '70%',
    marginLeft: 10,
  },
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


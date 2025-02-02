import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const OrderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../Images/tick.png')}/>
        <Text style={{fontWeight:'600',color:'black',fontSize:15}}>Order placed succesfully</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>{
            navigation.navigate('Homescreen')
        }}><Text style={{fontWeight:'600',color:'white',fontSize:15}}>Go To Home</Text></TouchableOpacity>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:150,
        width:150,
        justifyContent:'center',
        resizeMode:'contain'
    },
    btn:{
        height:50,
        width:'50%',
        backgroundColor:'#292B44',
        marginVertical:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'black',
        borderWidth:0.5
    }
})
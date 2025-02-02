import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  
  const SignUpScreen = ({navigation}) => {
    return (
      <LinearGradient
        colors={['#292B44', '#dcdcdc']} // Specify your gradient colors
        style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <View style={styles.logoView}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
              SIGN UP
            </Text>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={'black'}
              style={{width: '80%'}}
            /></View>
              <View style={styles.inputStyle}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              style={{width: '80%'}}
            /></View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              style={{width: '80%'}}
            />
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Confirm-Password"
              placeholderTextColor={'black'}
              style={{width: '80%'}}
            />
          </View>
          <View style={styles.loginbtn}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontSize: 15}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text  style={{fontWeight:'600'}}>Already a member? </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen')}}>
            <Text  style={{fontWeight:'bold',fontSize:14}}s>LOGIN</Text>
          </TouchableOpacity>
        </View>
        </View>
      </LinearGradient>
    );
  };
  
  export default SignUpScreen;
  
  const styles = StyleSheet.create({
    inputStyle: {
      height: 50,
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 25,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderColor: '#292B44',
    },
    loginbtn: {
      height: 50,
      width: '40%',
      backgroundColor: '#292B44',
      borderRadius: 25,
      borderWidth: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderColor: 'white',
      marginVertical: 30,
      marginBottom: '50%',
     
    },
    logoView: {
      height: 150,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
      marginBottom: 30,
      // tintColor:'white',
      // backgroundColor:'red'
    },
    frgtView:{
      right:0,
      
    }
  });
  
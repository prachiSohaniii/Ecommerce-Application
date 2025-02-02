import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {showError, showSucces} from '../../Components/MessegeComponent';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useIsFocused } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state,setState]=useState('')
 

  const onLogin = () => {
    if (email == '' || password == '') {
      showError();
      return;
    }
    showSucces();
    navigation.navigate('Homescreen');
  };
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      setState({userInfo});
      navigation.navigate('Homescreen')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <LinearGradient
      colors={['#292B44', '#dcdcdc']} // Specify your gradient colors
      style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logoView}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
            LOGIN
          </Text>
        </View>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Example@gmail.com"
            placeholderTextColor={'gray'}
            onChangeText={email => {
              setEmail(email);
            }}
            value={email}
            style={{width: '80%'}}
          />
        </View>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            secureTextEntry={true}
            onChangeText={password => {
              setPassword(password);
            }}
            value={password}
            style={{width: '80%'}}
          />
        </View>
        <View style={styles.loginbtn}>
          <TouchableOpacity onPress={onLogin}>
            <Text style={{color: 'white', fontSize: 15}}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={{fontWeight: '600',fontSize:15,}}>OR LOGIN WITH</Text> */}

        <View style={styles.googleView}>
          
        <TouchableOpacity style={styles.googlebtn} onPress={()=>googleLogin()}>
            <Image style={{height:20,width:20,alignSelf:'center'}}source={require('../../Images/google.png')}/>
          <Text style={{color: 'black', fontSize: 16,alignSelf:'center'}}>Google</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.googlebtn} onPress={()=>googleLogin()}>
            <Image style={{height:25,width:25,alignSelf:'center'}}source={require('../../Images/facebook.png')}/>
          <Text style={{color: 'black', fontSize: 16,alignSelf:'center'}}>Facebook</Text>
        </TouchableOpacity>
        
        
        
        
        </View>



       <View  style={styles.frgtView}>
        <View>
          <TouchableOpacity>
            <Text style={{fontWeight: '600'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold'}}>OR</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '600'}}>Doesnt have an account yet </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}} s>
              SIGNUP?
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

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
    // marginBottom: '50%',
  },
  logoView: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: 30,
    marginTop:'15%'
    // tintColor:'white',
    // backgroundColor:'red'
  },
  frgtView: {
    // right: 0,
    bottom:0,
    // backgroundColor:'red',
    height:'10%',
    justifyContent:'flex-end',
    alignItems:'center'

  },
  googleView:{
    justifyContent:'center',
    alignItems:'flex-end',
  //  alignSelf:'center',
   width:'100%',
   flexDirection:'row',
   columnGap:20,
  //  backgroundColor:'red',
  //  marginTop:25,
   height:'28%'


  },
  googlebtn:{
  columnGap:10,
  width:'40%',
  backgroundColor:'white',
  flexDirection:'row',
  height:50,
  borderRadius:25,
  // alignSelf:'center',
  marginVertical:7,
  justifyContent:'center',
  alignItems:'center'
  // paddingLeft:10
   
  }
});

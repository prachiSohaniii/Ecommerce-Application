import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CoustomButton = ({bg, title, onClick, color}) => {
  return (
    
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: bg}]}
        onPress={() => {
          onClick();
        }}>
        <Text style={{color: color,fontSize:15}}>{title}</Text>
      </TouchableOpacity>
    
  );
};

export default CoustomButton;

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '9%',
    borderRadius:10,
    marginBottom:20
  },
});

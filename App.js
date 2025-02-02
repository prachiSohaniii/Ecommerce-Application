import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import FlashMessage from 'react-native-flash-message';
const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
      <FlashMessage position="top"/>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

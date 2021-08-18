import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './Screens/Home';
import Detailscreen from './Screens/Details';


export default class App extends React.Component {
  
  render(){
  return (
      <View>Planet App</View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

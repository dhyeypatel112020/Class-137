import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Homescreen extends React.Component {
  constructor(){
  super()
  this.state={
      url:"http://localhost:5000/",
      listdata:[]
  }
  
  }  
    render(){
  return (
      <View>Home</View>
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

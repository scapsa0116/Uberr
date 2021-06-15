import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView} from 'react-native-maps';

export default class App extends React.Component{

state = {
  region:{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421,
  }
}






  render(){
  return (
    <View style={styles.container}>
      <Text>hiii</Text>
      <MapView 
      initialRegion={this.state.region}
      showsCompass={true}
      rotateEnabled={true}
      style={{flex: 1}}/>
      

      
      
      
      <StatusBar style="auto" />
    </View>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
// import { BrowserRouter } from 'react-router-dom';
// require('jquery');
// import MapView from 'react-native-maps';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }
    }
  }


render(){
  return (
    <View style={styles.container}>
      <Text>hiii</Text>
      <MapView
      initialRegion={this.state.region}
      showsCompass={true}
      rotateEnabled={false}
      style={{flex: 1}}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import MapView from '../MapView';


// to do
// 1. add google maps api
// 2. add map view
// 3. add fake data
// 4. add heat map over map

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
      <MapView></MapView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

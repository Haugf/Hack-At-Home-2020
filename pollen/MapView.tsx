import React, { Component, constructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoogleMap, { Coords } from 'google-map-react';

import MapView2 from 'react-native-maps';


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const LOS_ANGELES_CENTER= [34.0522, -118.2437];



// to do
// 1. add google maps api
// 2. add map view
// 3. add fake data
// 4. add heat map over map


// static defaultProps = {
//     center: {lat: 40.73, lng: -73.93}, 
//     zoom: 12
//  }

const someLatLng = {lat: 55.751244, lng: 37.618423}

export default function MapView() {

    return (

    <MapView2
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
    />


      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FF7F50',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });

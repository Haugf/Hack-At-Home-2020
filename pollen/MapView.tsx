import React, { Component, constructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoogleMap, { Coords } from 'google-map-react';

import MapView2, { Heatmap, WeightedLatLng,  Marker } from 'react-native-maps';


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const LOS_ANGELES_CENTER= [34.0522, -118.2437];
const Ethos: Coords = {latitude: 28.538336,
  longitude: -81.379234,};



// to do
// 1. add google maps api
// 2. add map view
// 3. add fake data (markers)
// 4. add heat map over map



const someLatLng = {lat: 55.751244, lng: 37.618423}

export default function MapView() {

  const getHeatMapPoints = (size: number, withWeight = true) => {
    const points: WeightedLatLng = [];

    for (let i = 0; i < size; i++) {
      const pointData = {
        latitude: 28.538336 + (Math.random() / 50),
        longitude: -81.379234 + (Math.random() / 50),
        weight:0
      };
      if (withWeight) {
        pointData.weight = Math.round((Math.random() * 10) + 1);
      }
      points.push(pointData);
    }

    return points;
  };

  var heatmapPoints: WeightedLatLng = getHeatMapPoints(10, true);

  
    return (

    <MapView2
        style={styles.map}
        initialRegion={{
          latitude: 28.538336,
          longitude: -81.379234,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
    >


    {/* <Heatmap points={heatmapPoints} /> */}

      <Marker
        coordinate={{
          latitude: 28.538336,
          longitude: -81.379234}}
        title={"Etho's Vegan Kitchen"}
        description={"hi"}
        onDeselect={true}></Marker>
    </MapView2>


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

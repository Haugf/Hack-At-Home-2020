import React, { Component, constructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoogleMap, { Coords } from 'google-map-react';

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
           <GoogleMap
              bootstrapURLKeys={{
                key: "AIzaSyC3NjYULJrt49Dj4BQD1TTlhdUc",  //BAD
                language: 'en'
             }}
            defaultCenter={someLatLng}
            defaultZoom={16}
            heatmapLibrary={true}     
            // heatmap={heatMapData}  
           ></GoogleMap> 

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

import React from 'react'
import { View, Text, Image, FlatList } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({ origin, destination }) => {
  const lat = 0.3354670642213976;
  const long = 32.57583878879299;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDytX2Y8BTCdtT0iOsKcPX_CFHGCpiuT9E';

 const originT = {
    latitude: 0.3354670642213954,
  longitude: 32.55427878879218,
  }
  const destinationT = {
    latitude: 0.3380312117705973, 
    longitude: 32.59558057195873,
  }



  return (
            <MapView
              style={{width: '100%', height: '100%'}}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              /* style={styles.map} */
              region={{
                latitude: lat, /* 37.78825 */
                longitude: long, /* -122.4324 */
                latitudeDelta: 0.028,
                longitudeDelta: 0.031,
              }}>
                <MapViewDirections
                  origin={originT}
                  destination={destinationT}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeColor="black"
                  strokeWidth={6}
                />
                <Marker
                  coordinate={originT}
                  title={'Origin'}
                />
                <Marker
                  coordinate={destinationT}
                  title={'Destination'}
                />
              </MapView>
  )
}
export default RouteMap;
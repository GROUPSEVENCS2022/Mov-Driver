import { StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const HomeScreen = () => {

    const lat = 0.3354670642213976;
    const long = 32.57583878879299;

    const GOOGLE_MAPS_APIKEY = 'AIzaSyDytX2Y8BTCdtT0iOsKcPX_CFHGCpiuT9E';

 const origin = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destination = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }

  return (
    <View style={{width: 100, height: 100}}>
        <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.025,
          longitudeDelta: 0.022,
        }}
        >
            <MapViewDirections
               origin={origin}
               destination={destination}
               apikey={GOOGLE_MAPS_APIKEY}
            />

        </MapView>
    </View>   
  );
}

export default HomeScreen;
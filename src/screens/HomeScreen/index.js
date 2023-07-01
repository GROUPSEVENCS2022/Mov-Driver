import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import NewOrderPopup from '../../components/NewOrderPopup';

const HomeScreen = () => {

    const [isOnLine, setIsOnline] = useState(false);

    const onStartPress = () => {
        setIsOnline(!isOnLine);
    }

    const lat = 0.3354670642213976;
    const long = 32.57583878879299;

    const GOOGLE_MAPS_APIKEY = 'key';

 const origin = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destination = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }

  return (
    <View>
        <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 110}}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
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

        <Pressable 
            onPress={() => console.warn('pool')} 
            style={styles.poolButton}>
            <Text style={styles.poolText}>
                <Text>5 / 14 <Entypo name={"user"} size={24} color="#fafafa"/></Text>
            </Text>
            {/* <Entypo name={"menu"} size={24} color="#4a4a4a"/> */}
        </Pressable>

        <Pressable 
            onPress={() => console.warn('mov')} 
            style={[styles.roundButton, {top: 40, left: 10}]}>
            <Entypo name={"add-user"} size={24} color="#4a4a4a"/>
        </Pressable>

        <Pressable 
            onPress={() => console.warn('mov')} 
            style={[styles.roundButton, {top: 40, right: 10}]}>
            <Entypo name={"menu"} size={24} color="#4a4a4a"/>
        </Pressable>

        <Pressable 
            onPress={() => console.warn('mov')} 
            style={[styles.roundButton, {bottom: 160 , left: 10}]}>
            <Entypo name={"direction"} size={24} color="#4a4a4a"/>
        </Pressable>

        <Pressable 
            onPress={() => console.warn('mov')} 
            style={[styles.roundButton, {bottom: 160, right: 10}]}>
            <Entypo name={"gauge"} size={24} color="#4a4a4a"/>
        </Pressable>

        <Pressable 
            onPress={onStartPress} 
            style={styles.startButton}>
            <Text style={styles.startText}>
                {
                    isOnLine ? 'Start' : 'Stop'
                }
            </Text>
            {/* <Entypo name={"menu"} size={24} color="#4a4a4a"/> */}
        </Pressable>

        <View style={styles.bottomContainer}>
            <Ionicons name={"options"} size={24} color="#4a4a4a"/>
            {
                isOnLine
                ? <Text style={styles.bottomText}>Mov is Offline</Text>
                : <Text style={styles.bottomText}>Mov is Online</Text>
            }
            <Entypo name={"menu"} size={24} color="#4a4a4a"/>
        </View>
        <NewOrderPopup/>
    </View>   
  );
}

export default HomeScreen;
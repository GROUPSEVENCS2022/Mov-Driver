import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import NewOrderPopup from '../../components/NewOrderPopup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Location from 'expo-location';
import Geo from '../../components/Geo';

const HomeScreen = ({ navigation, route }) => {

    // user management
    const { user } = route.params;
    const [activeUser, setActiveUser] = useState({});

    // Fetch additional user data using the email
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make API call to fetch additional user data
        const response = await fetch(`http://192.168.1.173:3000/drivers?email=${user.email}`);

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();

        // Update the user object with additional data
        setActiveUser(userData);

        // Use the updated user object as needed
        console.log(activeUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [user.email]);

  // navigation to other screens

    const goToPoolsScreen = () => {
        navigation.navigate('PoolsScreen', { activeUser });
      };

    const goToCarsScreen = () => {
        navigation.navigate('CarsScreen', { activeUser });
    };

    const goToPoolStatus = () => {
        navigation.navigate('PoolStatus', { activeUser });
    };

    const goToParticipantStatus = () => {
        navigation.navigate('ParticipantStatus', { activeUser });
    };

    /* USER LOCATION START */
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [myPosition, setMyPosition] = useState();

    useEffect(() => {
      (async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
    
        let location = await Location.getCurrentPositionAsync();
        setLocation(location);
      })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    /* USER LOCATION END */

    

    const lat = 0.3354670642213976;
    const long = 32.57583878879299;

    const dlat = 0.3580312117705973;
    const dlong = 32.58758057195873;

    const GOOGLE_MAPS_APIKEY = 'AIzaSyDytX2Y8BTCdtT0iOsKcPX_CFHGCpiuT9E';

    const origin = {
        latitude: 0.3354670642213976,
        longitude: 32.56427878879299,
      }
    const destination = {
        latitude: 0.3380312117705973, 
        longitude: 32.58558057195873,
      }

    const [isOnLine, setIsOnline] = useState(false);
    const [order, setOrder] = useState(null);
    const [newOrder, setNewOrder] = useState({
        id: '1',
        type: 'Mov-Normal',

        originLatitude: lat,
        originLongitude: long,

        destinationLatitude: dlat,
        destinationLongitude: dlong,
        
        user: {
            rating: 4.8,
            name: 'Kirk',
        }
    });

    const onDecline = () => {
        setNewOrder(null);
    }

    const onAccept = (newOrder) => {
        setOrder(newOrder);
        setNewOrder(null);
    }

    const onStartPress = () => {
        setIsOnline(!isOnLine);
    }

    const onUserLocationChange = () => {
        console.log("UserLocationChange");
        () => setMyPosition({
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
        });
        // console.log(location?.coords.latitude);
        // console.log(location?.coords.longitude);
    }

    const onDirectionFound = (result) => {
        if(order) {
            setOrder({
                ...order,
                distance: parseFloat(`${result?.distance}`).toFixed(2),
                duration: parseFloat(`${result?.duration}`).toFixed(2),
                onStation: order.onStation || parseFloat(`${result?.duration}`).toFixed(2) < 9.0,
                isFinished: order.onStation && parseFloat(`${result?.duration}`).toFixed(2) < 6.5,
            })
        }
            /* console.log(`${result?.distance}`);
            console.log(`${result?.duration}`);  */    
    }

    const getDestination = () => {
        if(order && order?.onStation) {
            return {
                latitude: order.destinationLatitude,
                longitude: order.destinationLongitude,
            }
        }
        return {
            latitude: order.originLatitude,
            longitude: order.originLongitude,
        }
    }
    const renderBottomTitle = () => {

        if(order && order.isFinished) 
        {
            return(
                <View style={{alignItems: 'center'}}>
                    <View 
                        style={{
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: 'green', 
                            width: 200
                        }}
                    >
                        <Text style={{color: 'white', fontWeight: 'bold'}}>COMPLETE {order?.type}</Text>                        
                    </View> 
                    <Text style={styles.bottomText}>{order?.user.name}</Text>
                </View>           
            )
        }

        if(order && order.onStation) {
            return(
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>{order?.duration} Mins </Text>
                        <View style={{
                            backgroundColor: 'green', 
                            marginHorizontal: 10,
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            }}>
                            <FontAwesome name={"user"} color={'white'} size={20} />
                        </View>
                        <Text>{order?.distance} Km </Text>                        
                    </View> 
                    <Text style={styles.bottomText}>{order.user.name} On Station</Text>
                </View>           
            )
        }

        if(order) {
            return(
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>{order?.duration} Mins </Text>
                        <View style={{
                            backgroundColor: 'orange', 
                            marginHorizontal: 10,
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            }}>
                            <FontAwesome name={"user"} color={'white'} size={20} />
                        </View>
                        <Text>{order?.distance} Km </Text>                        
                    </View> 
                    <Text style={styles.bottomText}>{order.user.name} Arriving to VS</Text>
                </View>           
            )
        }
        if(isOnLine) {
            return (<Text style={styles.bottomText}>Mov is offline</Text>);
        }
        return (<Text style={styles.bottomText}>Mov is online</Text>);
    }



  return (
    <View>
        <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 200}}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
        onUserLocationChange={onUserLocationChange()}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.025,
          longitudeDelta: 0.022,
        }}
        >
        {order && (
            <MapViewDirections
            origin={{
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
            }}
            destination={getDestination()}
            /* latitude: order.originLatitude,
             longitude: order.originLongitude, */
            onReady={result => onDirectionFound(result)}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
         />
        )}

        </MapView>

        <Pressable 
            onPress={goToPoolsScreen}
            style={styles.poolButton}>
            <Text style={styles.poolText}>
                <Text>5 / 14 <Entypo name={"user"} size={24} color="#fafafa"/></Text>
            </Text>
            {/* <Entypo name={"menu"} size={24} color="#4a4a4a"/> */}
        </Pressable>

        <Pressable 
            onPress={goToCarsScreen} 
            style={[styles.roundButton, {top: 40, left: 10}]}>
            {/* <Entypo name={""} size={24} color="#4a4a4a"/> */}
            <FontAwesome name={"car"} size={24} color="#4a4a4a"/>
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
            onPress={goToParticipantStatus} 
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
            {renderBottomTitle()}
            <Entypo name={"menu"} size={24} color="#4a4a4a"/>
        </View>
        {newOrder && <NewOrderPopup 
            newOrder={newOrder}
            duration={2}
            distance={0.5}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrder)}
        />}
    </View>   
  );
}

export default HomeScreen;
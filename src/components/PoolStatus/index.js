import { useState, useEffect } from 'react';
import { Text, View, Dimensions} from "react-native";
import styles from "./styles";
import RouteMap from "../RouteMap";



const PoolStatus = ({ activePool }) => {

  /* const [activePool, setActivePool] = useState({});

  // fetch pool data
  useEffect(() => {
    const fetchPoolData = async () => {
      try {
        // Make API call to fetch pool data
        const response = await fetch(`http://192.168.1.173:3000/pools`);
      
        if (!response.ok) {
          throw new Error('pool check error');
        }
      
        const poolData = await response.json();
        setActivePool(poolData);
      
        // Use the updated pool object as needed
        console.log(activePool);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPoolData();
  }, []); */

  // 



 


  const originT = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destinationT = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }

  console.log(activePool[0].participants);


  
    return (
        
      <View style={{display: 'flex', justifyContent: 'space-between', }}>
        <View style={{height: Dimensions.get('window').height - 250}}>
          <RouteMap origin={originT} destination={destinationT} />
        </View>
        <View style={styles.bottomDashboard}>
          {/* commuters */}
          <View>
            <Text style={styles.bottomDashboardTitle}>Virtual Station Name:</Text>
            <Text style={styles.bottomDashboardTitle}>Origin:</Text>
            <Text style={styles.bottomDashboardTitle}>Destination:</Text>
            <Text style={styles.bottomDashboardTitle}>Participants:</Text>
            <Text style={styles.bottomDashboardTitle}>Commuters:</Text>
            <Text style={styles.bottomDashboardTitle}>Round Fare:</Text>
            <Text style={styles.bottomDashboardTitle}>Round Distance:</Text>
          </View>
          <View style={{marginLeft: 40}}>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.name}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.origin}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.destination}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.participants.length}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.commuters}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.price}</Text>
            <Text style={styles.bottomDashboardSpecifics}>{activePool[0]?.distance} Km</Text>
          </View>
        </View>        
      </View>        
    );
  };

export default PoolStatus;
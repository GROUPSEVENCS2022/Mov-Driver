import React from "react";
import { Text, View, Dimensions} from "react-native";
import styles from "./styles";
import RouteMap from "../RouteMap";



const PoolStatus = () => {

  const originT = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destinationT = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }


  
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
            <Text style={styles.bottomDashboardSpecifics}>Kasubi/Kawala</Text>
            <Text style={styles.bottomDashboardSpecifics}>Nakawa</Text>
            <Text style={styles.bottomDashboardSpecifics}>Namungona</Text>
            <Text style={styles.bottomDashboardSpecifics}>4</Text>
            <Text style={styles.bottomDashboardSpecifics}>5/14</Text>
            <Text style={styles.bottomDashboardSpecifics}>3000 UGX</Text>
            <Text style={styles.bottomDashboardSpecifics}>9 Km</Text>
          </View>
        </View>        
      </View>        
    );
  };

export default PoolStatus;
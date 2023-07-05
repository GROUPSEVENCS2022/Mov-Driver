import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';  
import HomeScreen from './src/screens/HomeScreen';
import * as Location from 'expo-location';
import PoolsScreen from './src/screens/PoolsScreen';
import PoolStatusScreen from './src/screens/PoolStatusScreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

 /*  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  } */

  return (
    <>
    <NavigationContainer>
    {/* <StatusBar style="auto" />
    <SafeAreaView> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <PoolsScreen></PoolsScreen> */}
      <PoolStatusScreen></PoolStatusScreen>
    {/* </SafeAreaView> */}
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
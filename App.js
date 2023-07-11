import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';  
import HomeScreen from './src/screens/HomeScreen';
import * as Location from 'expo-location';
import PoolsScreen from './src/screens/PoolsScreen';
import PoolStatusScreen from './src/screens/PoolStatusScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


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

  {/* <StatusBar style="auto" />
    <SafeAreaView> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <PoolsScreen></PoolsScreen> */}
      {/* </SafeAreaView> */}

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen} />   
        <Stack.Screen name="PoolsScreen" component={PoolsScreen} />  
        <Stack.Screen name="PoolStatusScreen" component={PoolStatusScreen} />  
        {/* <Stack.Screen name="Pool" component={PoolsScreen} />  */}  
        {/* <PoolStatusScreen></PoolStatusScreen> */}
      </Stack.Navigator>   
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
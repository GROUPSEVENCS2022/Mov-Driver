import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommuterStatus from '../../components/CommuterStatus';
import ParticipantStatus from '../../components/ParticipantStatus';
import PoolStatus from '../../components/PoolStatus';



const Tab = createMaterialTopTabNavigator();

const PoolStatusScreen = ({ navigation, route }) => {
  
    // user management
    const { activePool } = route.params;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              initialParams: route.name === 'Pool' ? activePool : null,
            })}
            tabBarOptions={{
                style: {
                  paddingTop: 12,
                  height: 60,
                   // Set the desired height for the tab bar
                },
                tabStyle: {
                  height: 70, // Set the desired height for individual tabs
                },
                labelStyle: {
                  fontSize: 12, // Set the desired font size for the tab labels
                },
            }}
        >
      {/* <View style={styles.container}>
        <Text>Pool Status Screen</Text> */}

                <Tab.Screen name="Pool" component={PoolStatus} />
                <Tab.Screen name="Commuter" component={CommuterStatus} />
                <Tab.Screen name="Participants" component={ParticipantStatus} />
                
            
            </Tab.Navigator>
      /* </View> */
    );
  };

export default PoolStatusScreen;


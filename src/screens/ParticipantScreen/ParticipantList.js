import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Modal, Pressable} from 'react-native';
import axios from 'axios';
import styles from './styles';

const ParticipantList = () => {

    // const [participants, setParticipants] = useState({});
    const [activePool, setActivePool] = useState({});
    const [selectedParticipant, setSelectedParticipant] = useState({});

    // fetch pool data
    useEffect(() => {
        const fetchPoolData = async () => {
          try {
            // Make API call to fetch pool data
            const response = await fetch('http://192.168.1.173:3000/pools');
        
            if (!response.ok) {
              throw new Error('pool check error');
            }
        
            const poolData = await response.json();
            setActivePool(poolData);
        
            // Use the updated pool object as needed
            //console.log(activePool);
          } catch (error) {
            console.error(error);
          }
    };
  
    fetchPoolData();
  }, [])

   const handlePress = (participant) => {
    setSelectedParticipant(participant);
  };

  const handleClose = () => {
    setSelectedParticipant(null);
  };

      return (
        <View style={styles.container}>
            {activePool[0]?.participants?.map((p, index) => (
                <Pressable key={index} style={styles.participantItem} onPress={() => handlePress(p)}>
                  <Text style={styles.driverName}>{p?.firstName}</Text>
                  <Text style={styles.driverName}>{p?.lastName}</Text>
                  <Text>Car Plate Number: {p?.plateNo}</Text>
                  <Text>Phone Number: {p?.phoneNumber}</Text>
                  {/* <Text>Type: {participant.type}</Text> */}
                  {/* <Text>Status: {participant.status}</Text> */}
                </Pressable>
              ))}

              <Modal visible={selectedParticipant !== null} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    {selectedParticipant && (
                      <>
                        <Text style={styles.modalTitle}>Driver Name: {selectedParticipant?.firstName}</Text>
                        <Text style={styles.modalTitle}>Driver Name: {selectedParticipant?.lastName}</Text>
                        <Text>License Plate Number: {selectedParticipant.plateNo}</Text>
                        <Text>Type: Mov-Normal</Text>
                        <Text>Status: on station</Text>
                        <Text>Capacity: 14</Text>
                        <Text>Phone Number: {selectedParticipant?.phoneNumber}</Text>
                        <Text>Email: {selectedParticipant?.userEmail}</Text>
                      </>
                    )}
                    <Pressable style={styles.modalCloseButton} onPress={handleClose}>
                      <Text style={styles.modalCloseButtonText}>Close</Text>
                    </Pressable>
                  </View>
                </View>
            </Modal>
            
    </View>
      )
}



export default ParticipantList;

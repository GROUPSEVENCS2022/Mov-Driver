import React, { useState, useEffect } from "react";
import { Text, View,Pressable, Modal } from "react-native";
import styles from "./styles";
import axios from 'axios';


/* const commuters = [
  {
    name: 'Patricia',
    origin: 'Nakawa',
    destination: 'City Square',
    status: 'Arriving',
  },
  {
    name: 'Marcus',
    origin: 'Nakawa',
    destination: 'Wandegeya',
    status: 'Onboard',
  },
  {
    name: 'Mugerwa',
    origin: 'Nakawa',
    destination: 'Nakulabye',
    status: 'Onboard',
  },
  {
    name: 'Ruth',
    origin: 'Nakawa',
    destination: 'Kasubi',
    status: 'Onboard',
  },
  {
    name: 'Mabel',
    origin: 'Nakawa',
    destination: 'Kawala',
    status: 'Onboard',
  },
  {
    name: 'Mugisha',
    origin: 'Nakawa',
    destination: 'Kasubi',
    status: 'Onboard',
  },
  {
    name: 'Kato',
    origin: 'Nakawa',
    destination: 'Kawala',
    status: 'Arriving',
  },
  {
    name: 'Adrone',
    origin: 'Nakawa',
    destination: 'Wandegeya',
    status: 'Onboard',
  },
]; */

const CommuterStatus = () => {

const [commuters, setCommuters] = useState([]);

  /* useEffect(() => {
    fetch('http://192.168.1.173:3000/commuters')
      .then((response) => response.json())
      .then((data) => setCommuters(data))
      .catch((error) => console.error(error));
  }, []); */

  useEffect(() => {
    axios.get('http://192.168.1.173:3000/commuters')
      .then(response => {
        setCommuters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);

  const renderCommuters = () => {
    return commuters.map((commuter, index) => (
      <Pressable key={index} onPress={() => setSelectedItem(commuter)}>
        <View style={styles.commuterContainer}>
          <Text style={styles.commuterName}>{commuter.name}</Text>
          <Text style={styles.commuterDetails}>
            Origin: {commuter.origin} | Destination: {commuter.destination} | Status: {commuter.status}
            {console.log(commuters)}
          </Text>
        </View>
      </Pressable>
    ));
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  
    return (
      <View style={styles.container}>
      {renderCommuters()}
      <Modal visible={selectedItem !== null} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedItem?.name}</Text>
          <Text style={styles.modalDetails}>
            Origin: {selectedItem?.origin} | Destination: {selectedItem?.destination} | Status: {selectedItem?.status}
          </Text>
          <Pressable style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
    );
  };

export default CommuterStatus;
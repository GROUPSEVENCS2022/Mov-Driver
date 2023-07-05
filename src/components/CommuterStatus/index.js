import React, { useState } from "react";
import { Text, View,Pressable, Modal } from "react-native";
import styles from "./styles";

const commuters = [
  {
    name: 'Commuter 1',
    origin: 'Nakawa',
    destination: 'City Square',
    status: 'Arriving',
  },
  {
    name: 'Commuter 2',
    origin: 'Nakawa',
    destination: 'Wandegeya',
    status: 'Onboard',
  },
  {
    name: 'Commuter 3',
    origin: 'Nakawa',
    destination: 'Nakulabye',
    status: 'Onboard',
  },
  {
    name: 'Commuter 4',
    origin: 'Nakawa',
    destination: 'Kasubi',
    status: 'Onboard',
  },
  {
    name: 'Commuter 5',
    origin: 'Nakawa',
    destination: 'Kawala',
    status: 'Onboard',
  },
  {
    name: 'Commuter 6',
    origin: 'Nakawa',
    destination: 'City Square',
    status: 'Onboard',
  },
  {
    name: 'Commuter 7',
    origin: 'Nakawa',
    destination: 'Wandegeya',
    status: 'Onboard',
  },
  {
    name: 'Commuter 8',
    origin: 'Nakawa',
    destination: 'Nakulabye',
    status: 'Arriving',
  },
  {
    name: 'Commuter 9',
    origin: 'Nakawa',
    destination: 'Kasubi',
    status: 'Onboard',
  },
  {
    name: 'Commuter 10',
    origin: 'Nakawa',
    destination: 'Kawala',
    status: 'Arriving',
  },
  {
    name: 'Commuter 11',
    origin: 'Nakawa',
    destination: 'Wandegeya',
    status: 'Onboard',
  },
  {
    name: 'Commuter 12',
    origin: 'Nakawa',
    destination: 'Nakulabye',
    status: 'Arriving',
  },
  {
    name: 'Commuter 13',
    origin: 'Nakawa',
    destination: 'Kasubi',
    status: 'Onboard',
  },
  {
    name: 'Commuter 14',
    origin: 'Nakawa',
    destination: 'Kawala',
    status: 'Arriving',
  },
];



const CommuterStatus = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const renderCommuters = () => {
    return commuters.map((commuter, index) => (
      <Pressable key={index} onPress={() => setSelectedItem(commuter)}>
        <View style={styles.commuterContainer}>
          <Text style={styles.commuterName}>{commuter.name}</Text>
          <Text style={styles.commuterDetails}>
            Origin: {commuter.origin} | Destination: {commuter.destination} | Status: {commuter.status}
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
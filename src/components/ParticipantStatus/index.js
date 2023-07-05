import React, { useState } from "react";
import { Text, View,  Pressable, Modal } from "react-native";
import styles from "./styles";

const ParticipantStatus = () => {

  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const participants = [
    {
      lplatenumber: 'UBA001A',
      driverName: 'John',
      type: 'Normal',
      status: 'Arriving',
      capacity: 14,
    },
    {
      lplatenumber: 'UBA002B',
      driverName: 'Abbas',
      type: 'Shuttle',
      status: 'On Station',
      capacity: 30,
    },
    {
      lplatenumber: 'UBA003C',
      driverName: 'Kateregga',
      type: 'XL',
      status: 'Arriving',
      capacity: 47,
    },
  ];

  const handlePress = (participant) => {
    setSelectedParticipant(participant);
  };

  const handleClose = () => {
    setSelectedParticipant(null);
  };

  
    return (
      <View style={styles.container}>
      {participants.map((participant, index) => (
        <Pressable key={index} style={styles.participantItem} onPress={() => handlePress(participant)}>
          <Text style={styles.driverName}>{participant.driverName}</Text>
          <Text>License Plate Number: {participant.lplatenumber}</Text>
          <Text>Type: {participant.type}</Text>
          <Text>Status: {participant.status}</Text>
        </Pressable>
      ))}

      <Modal visible={selectedParticipant !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedParticipant && (
              <>
                <Text style={styles.modalTitle}>Driver Name: {selectedParticipant.driverName}</Text>
                <Text>License Plate Number: {selectedParticipant.lplatenumber}</Text>
                <Text>Type: {selectedParticipant.type}</Text>
                <Text>Status: {selectedParticipant.status}</Text>
                <Text>Capacity: {selectedParticipant.capacity}</Text>
                <Text>Phone Number: {selectedParticipant.phoneNumber}</Text>
                <Text>Email: {selectedParticipant.email}</Text>
              </>
            )}
            <Pressable style={styles.modalCloseButton} onPress={handleClose}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    );
  };

export default ParticipantStatus;
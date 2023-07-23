import React, { useState, useEffect } from "react";
import { Text, View,  Pressable, Modal } from "react-native";
import styles from "./styles";
import axios from 'axios';
import ParticipantList from "./ParticipantList";

const ParticipantStatus = ({navigation, route}) => {

  // user management
  const { activeUser } = route.params;
  const userEmail = activeUser[0]?.email;  
    return (
      <ParticipantList />
    );
  };

export default ParticipantStatus;
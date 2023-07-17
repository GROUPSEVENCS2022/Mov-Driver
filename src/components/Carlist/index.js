import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import styles from './styles';



const CarList = ({email}) => {
    const activeEmail = email;
  const [carData, setCarData] = useState([]);

    // Function to get the background color based on car status


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://192.168.1.173:3000/cars?email=${activeEmail}`)
      .then(response => {
        setCarData(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  };

  const getBackgroundColor = (status) => {
    switch (status) {
      case 'on station':
        return 'red'; // Green color for "On Station" status
      case 'on trip':
        return 'green'; // Orange color for "On Trip" status
      case 'loading':
        return 'orange'; // Red color for "Unavailable" status
      default:
        return '#f0f0f0'; // Default color for unknown status
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/mov-Shuttle.png')} style={styles.carImage} />
      <Text style={styles.infoText}>License Plate: {carData[0]?.plateNo}</Text>
      <Text style={styles.infoText}>Model: {carData[0]?.brand}</Text>
      <View style={[styles.statusIndicator, { backgroundColor: getBackgroundColor(carData[0]?.status) }]}>
        <Text style={styles.infoText}>Model: {carData[0]?.status}</Text>
      </View>
    </View>
  );
};

export default CarList;
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarList = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://192.168.1.173:3000/cars`)
      .then(response => {
        setCarData(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  };
  console.log(carData);

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

  // image type
  const getImage = (type) => {
    if(type === 'Mov-Normal')
    {
      return require('../../assets/images/mov-Normal.png');
    }
    if(type === 'Mov-Shuttle')
    {
      return require('../../assets/images/mov-Shuttle.png');
    }
    return require('../../assets/images/mov-XL.png');
  }

  return (
    <>
    
    {/* {carData.map(({car, index}) => ( */}
        <View style={styles.container}>
            <Image source={getImage(carData[0]?.type)} style={styles.image} />
            <View style={styles.middleContainer}>
              {console.log(carData[0]?.type)}
              <Text style={styles.type}>
                {carData[0]?.type}{'  '}
                <Ionicons name={'person'} size={16}/>
                {carData[0]?.passengers}
              </Text>
              <Text style={styles.time}>
                8:03PM set off
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
              <Text style={styles.price}>
                {'  '}est. UGX{'  '}{carData[0]?.price}
              </Text>
            </View>
        </View>        
      {/* ))} */}
      
      
      {/* <Text style={styles.infoText}>License Plate: {carData[0]?.plateNo}</Text>
      <Text style={styles.infoText}>Model: {carData[0]?.brand}</Text>
      <View style={[styles.statusIndicator, { backgroundColor: getBackgroundColor(carData[0]?.status) }]}>
        <Text style={styles.infoText}>Model: {carData[0]?.status}</Text>
      </View> */}
      </>
    
  );
};

export default CarList;
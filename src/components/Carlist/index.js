import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const CarList = ({email}) => {
    const activeEmail = email;
  const [carData, setCarData] = useState([]);

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

  return (
    <View style={styles.carItemContainer}>
    {carData[0] && <Image source={require('../../assets/images/mov-Normal.png')} style={styles.carImage} />}
    <View style={[styles.statusIndicator, { backgroundColor: getStatusBackgroundColor(carData[0].status) }]} />
    <View style={styles.carDetails}>
      <Text style={styles.carBrand}>{carData[0].brand}</Text>
      <Text style={styles.carModel}>{carData[0].model}</Text>
      <Text style={styles.carPlate}>{carData[0].plate}</Text>
    </View>
  </View>
  );
};

const getStatusBackgroundColor = (status) => {
  switch (status) {
    case 'on station':
      return 'orange';
    case 'on trip':
      return 'green';
    default:
      return 'red';
  }
};

const getImagePath = (type) => {
    switch (type) {
      case 'Mov-Normal':
        return '../../assets/images/mov-Normal.png';
      case 'Mov-Shuttle':
        return '../../assets/images/mov-Shuttle.png';
      case 'Mov-XL':
        return '../../assets/images/mov-XL.png';
      default:
        return '../../assets/images/mov-Normal.png';
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  carItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  carImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  statusIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  carDetails: {
    flex: 1,
  },
  carBrand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carModel: {
    fontSize: 14,
    marginBottom: 4,
  },
  carPlate: {
    fontSize: 12,
    color: 'gray',
  },
});

export default CarList;

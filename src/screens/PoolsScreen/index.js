import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import PoolStatus from '../../components/PoolStatus';

const PoolsScreen = ({ navigation, route }) => {

  // user management
  const { activeUser } = route.params;
  const activeDriver = activeUser;
  const [activeCar, setActiveCar] = useState({});
  const [activePool, setActivePool] = useState({});
 
  

  // car management
  // Fetch car data using the email
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        // Make API call to fetch additional user data
        const response = await fetch(`http://192.168.1.173:3000/cars?email=${userEmail}`);

        if (!response.ok) {
          throw new Error('Car check error');
        }

        const carData = await response.json();
        setActiveCar(carData);

        // Use the updated user object as needed
        console.log(activeCar);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarData();
  }, [userEmail]);

  const carType = activeCar[0]?.type;

  // pool management
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  
    const handleNameChange = (text) => {
      setName(text);
    };
    const handleOriginChange = (text) => {
        setOrigin(text);
    };
    const handleDestinationChange = (text) => {
        setDestination(text);
    };
    const handlePriceChange = (text) => {
        setPrice(text);
    };
    const handleTypeChange = (carType) => {
        setType(carType);
    }; 
    
    // participance
    const userEmail = activeUser[0]?.email;
  const firstName = activeUser[0]?.firstName;
  const lastName = activeUser[0]?.lastName;
  const phoneNumber = activeUser[0]?.phoneNumber;
  const driversLicense = activeUser[0]?.driversLicense;
  const plateNo = activeCar[0]?.plateNo;
  
    const handleSubmit = () => {
      // Perform form submission logic here

      const timestamp = new Date().getTime();
      const latitude = '';
      const longitude = '';

      // new pool
      const newPoolData = {
        name: name,
        origin: origin,
        destination: destination,
        masterDriver: userEmail,
        participants: [{userEmail, firstName, lastName, phoneNumber, driversLicense, plateNo}],
        commuters: 0,
        price: price,
        distance: distanceCalculator(),
      }

      // Send form data to JSON server
    axios.post('http://192.168.1.173:3000/pools', newPoolData)
    .then(response => {
      console.log('pool created successfully:');
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });

    // clear form inputs
    setName('');
    setOrigin('');
    setDestination('');
    setType('');
    setPrice('');

    

      // goToPoolStatusScreen();
    };

    // screen navigation
    const goToPoolStatusScreen = () => { 
      navigation.navigate('Pool');
    }; 
    
    // distance calculator.
    const distanceCalculator = () => {
      // Generate a random number between 0 and 1
      const random = Math.random();
  
      // Scale the random number to the desired range
      const min = 4;
      const max = 20;
      const scaledRandom = Math.floor(random * (max - min + 1)) + min;
  
      // Display the generated random number
      console.log(scaledRandom);
      return scaledRandom;
    };

    // fetch existing pool
  // fetch pool data
  useEffect(() => {
    const fetchPoolData = async () => {
      try {
        // Make API call to fetch pool data
        const response = await fetch(`http://192.168.1.173:3000/pools`);
      
        if (!response.ok) {
          throw new Error('pool check error');
        }
      
        const poolData = await response.json();
        setActivePool(poolData);
      
        // Use the updated pool object as needed
        console.log(activePool);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPoolData();
  }, [])


  
    return (
      <>
      { activePool[0]?.name 
      ? 
      <PoolStatus activePool={activePool}/> 
      : 
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.title}>NEW POOL</Text>
            <Text style={styles.labels}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Pool Name / Stage Name"
              value={name}
              onChangeText={handleNameChange}
            />
            <Text style={styles.labels}>Origin</Text>
            <TextInput
              style={styles.input}
              placeholder="Origin"
              value={origin}
              onChangeText={handleOriginChange}
            />
            <Text style={styles.labels}>Destination</Text>
            <TextInput
              style={styles.input}
              placeholder="Destination"
              value={destination}
              onChangeText={handleDestinationChange}
            />
            <Text style={styles.labels}>Price</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Price"
              value={price}
              onChangeText={handlePriceChange}
            />
            <Text style={styles.labels}>Type</Text>
            <TextInput
              style={[styles.input, {backgroundColor: '#d0d0d0'}]}
              value={type}
              editable={false}
              placeholder={carType}
              onChangeText={handleTypeChange}              
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>create pool</Text>
            </Pressable>
            {/* <Button title="Submit" onPress={handleSubmit} /> */}
        </View>
      </View>
      }
      </>
      
    );
  };

export default PoolsScreen;


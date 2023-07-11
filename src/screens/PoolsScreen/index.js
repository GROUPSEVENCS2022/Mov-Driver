import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const PoolsScreen = ({ navigation }) => {

  const newPool = {
    name: 'Bweyogerere-Banda',
    origin: 'city-square',
    destination: 'Bweyogerere',
    price: 3000,
    type: 'Normal',
  }

  const goToPoolStatusScreen = () => {

      axios.post('http://192.168.1.173:3000/pools', newPool)
    .then(response => {
      console.log('Pool created successfully');
    })
    .catch(error => {
      console.log(error);
    });
  
      navigation.navigate('PoolStatusScreen');
    };

    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState('');
    const [selectedType, setSelectedType] = useState('Mov-Normal');

  
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
    const handleTypeChange = (text) => {
        setSelectedType(text);
    };
    
  
    const handleSubmit = () => {
      // Perform form submission logic here
      console.log('Name:', name);
      console.log('Origin:', origin);
      console.log('Destination:', destination);
      console.log(':Price', price);
      console.log(':Type', type);
    };
  
    return (
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
              placeholder="Price"
              value={price}
              onChangeText={handlePriceChange}
            />
            <Text style={styles.labels}>Type</Text>
            <DropDownPicker
              items={[
                { label: 'Mov-Normal', value: 'Mov Normal' },
                { label: 'Mov-Shuttle', value: 'Mov Shuttle' },
                { label: 'Mov-XL', value: 'Mov XL' },
              ]}
              defaultValue={selectedType}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              dropDownStyle={styles.dropdownList}
              onChangeItem={(item) => setSelectedType(item.value)}
            />
            <Pressable onPress={goToPoolStatusScreen} style={styles.button}>
              <Text style={styles.buttonText}>create pool</Text>
            </Pressable>
            {/* <Button title="Submit" onPress={handleSubmit} /> */}
        </View>
      </View>
    );
  };

export default PoolsScreen;


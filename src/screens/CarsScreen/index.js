import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Pressable, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import axios from 'axios';
import CarList from '../../components/Carlist';


const CarsScreen = ({ navigation, route }) => {

    // user management
    const { activeUser } = route.params;
    const userEmail = activeUser[0]?.email;
    const [activeCar, setActiveCar] = useState({});

    // car management
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carPlateNo, setCarPlateNo] = useState('');
    const [carType, setCarType] = useState('Mov-Normal');
    const [selectedImage, setSelectedImage] = useState(null);

    // pop up controls
    const openPopup = () => {
        setPopupVisible(true);
      };
    
    const closePopup = () => {
        setPopupVisible(false);
      };

    const handleImageSelect = (image) => {
      setSelectedImage(image);
      setCarType(getTypeForImage(image));
    };

  // user initials
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName?.charAt(0).toUpperCase();
    const lastInitial = lastName?.charAt(0).toUpperCase();
    return firstInitial + lastInitial;
  };

  // cars check
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

  // type select
        const getTypeForImage = (image) => {
          switch (image) {
            case 'Mov-Normal':
              return 'Mov-Normal';
            case 'Mov-Shuttle':
              return 'Mov-Shuttle';
            case 'Mov-XL':
              return 'Mov-XL';
            default:
              return '';
          }
        };


  // car crud
  const handleAddCar = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const status = 'on station'; // Default status
    const latitude = '';
    const longitude = '';
    // Handle the logic for adding the car to your data source
    const newCarData = {
        type: carType,
        brand: carBrand,
        email: userEmail,
        plateNo: carPlateNo,
        dateOfCreation: timestamp,
        status: status,
        latitude: latitude,
        longitude:longitude,
      };

      // Send form data to JSON server
    axios.post('http://192.168.1.173:3000/cars', newCarData)
    .then(response => {
      console.log('car created successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });


    // For now, we'll just log the car details
    console.log('Car Name:', carBrand);
    console.log('Car Model:', carModel);
    console.log('Car Type:', carType);
    console.log('Car Plate No:', carPlateNo);

    // Clear the form inputs
    setCarBrand('');
    setCarModel('');
    setCarPlateNo('');

    console.log('Selected Image:', selectedImage);

    // Close the popup
    closePopup();
  };


  
    return (
        <View style={styles.container}>
            {(Object.keys(activeCar).length === 0)
            ? 
            <>
            <Text>register some cars</Text>
            <Button title="Add Car" onPress={openPopup} /></>
            :
            <CarList email={userEmail} />

        }
          
          <Modal visible={isPopupVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupHeading}>Add a Car</Text>
            <View style={styles.typeContainer}>
                <Text style={styles.popupHeading}>Choose car type</Text>
                <View style={styles.imageContainer}>
              <TouchableOpacity
                style={[
                  styles.imageWrapper,
                  selectedImage === 'Mov-Normal' && styles.selectedImageWrapper,
                ]}
                onPress={() => handleImageSelect('Mov-Normal')}
              >
                <Image source={require('../../assets/images/mov-Normal.png')} style={styles.image} />
                <Text style={styles.imageLabel}>Mov-Normal</Text>
                {selectedImage === 'Mov-Normal' && <RadioButton />}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.imageWrapper,
                  selectedImage === 'Mov-Shuttle' && styles.selectedImageWrapper,
                ]}
                onPress={() => handleImageSelect('Mov-Shuttle')}
              >
                <Image source={require('../../assets/images/mov-Shuttle.png')} style={styles.image} />
                <Text style={styles.imageLabel}>Mov-Shuttle</Text>
                {selectedImage === 'Mov-Shuttle' && <RadioButton />}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.imageWrapper,
                  selectedImage === 'Mov-XL' && styles.selectedImageWrapper,
                ]}
                onPress={() => handleImageSelect('Mov-XL')}
              >
                <Image source={require('../../assets/images/mov-XL.png')} style={styles.image} />
                <Text style={styles.imageLabel}>Mov-XL</Text>
                {selectedImage === 'Mov-XL' && <RadioButton />}
              </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Car Brand"
              value={carBrand}
              onChangeText={text => setCarBrand(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Car Model"
              value={carModel}
              onChangeText={text => setCarModel(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Plate Number"
              value={carPlateNo}
              onChangeText={text => setCarPlateNo(text)}
            />

            <View style={styles.buttonContainer}>
              <Button style={styles.modalButton} title="Add" onPress={handleAddCar} />
              <Button style={styles.modalButtonStroke} title="Cancel" onPress={closePopup} />
            </View>
          </View>
        </View>
      </Modal>
        </View>
    );
  };


  const RadioButton = () => (
    <View style={styles.radioButton}>
      <View style={styles.radioButtonSelected} />
    </View>
  );

export default CarsScreen;


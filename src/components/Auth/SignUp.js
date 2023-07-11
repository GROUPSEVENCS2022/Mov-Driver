import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('07');
  const [driversLicense, setDriversLicense] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async () => {
    try {
      // Perform form validation
      if (!firstName || !lastName || !email || !phoneNumber || !driversLicense || !password) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      // Make API call to create a new driver
      const response = await axios.post('http://192.168.1.173:3000/drivers', {
        firstName,
        lastName,
        email,
        phoneNumber,
        driversLicense,
        password,
      });

      // Handle successful signup
      if (response.status === 201) {
        Alert.alert('Success', 'Signup successful');

        // Reset the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDriversLicense('');
        setPassword('');

        // Navigate to the sign-in screen
        navigation.navigate('Sign In');
      }
    } catch (error) {
      Alert.alert('Error', 'Signup failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Driver's License"
        value={driversLicense}
        onChangeText={text => setDriversLicense(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showPasswordButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text> 
      </TouchableOpacity>
      <Text style={styles.title}>OR</Text>
      <TouchableOpacity style={styles.buttonStroke} onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.buttonStrokeText}>Sigin</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  showPasswordButton: {
    marginLeft: 8,
    padding: 8,
  },
  showPasswordButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#202020',
    borderRadius: 4,
    paddingVertical: 12,
    marginBottom: 16,
  },
  buttonStroke: {
    backgroundColor: '#fff',
    borderColor: '#202020',
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStrokeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default SignupScreen;

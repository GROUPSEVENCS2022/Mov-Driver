import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Cars = ({ route }) => {
  const { user } = route.params;
  // userObject["propertyName"]
  //console.log(user.email);
  const [activeUser, setActiveUser] = useState({});

  // drawer
  const logout = () => {
    // Perform any necessary logout logic here
    // For simplicity, we'll just navigate back to the SignInScreen
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('SignIn');
  };

  // drawer rendering
  const renderDrawerContent = () => {
    return (
      <View style={styles.drawerContent}>
        <Text style={styles.drawerTitle}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.drawerSubtitle}>{user.email}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  // Fetch additional user data using the email
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make API call to fetch additional user data
        const response = await fetch(`http://192.168.1.173:3000/drivers?email=${user.email}`);

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();

        // Update the user object with additional data
        setActiveUser(userData);

        // Use the updated user object as needed
        console.log(activeUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [user.email]);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName?.charAt(0).toUpperCase();
    const lastInitial = lastName?.charAt(0).toUpperCase();
    return firstInitial + lastInitial;
  };

  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <Text style={styles.initials}>{getInitials(activeUser[0]?.firstName, activeUser[0]?.lastName)}
        {console.log()}</Text>
      </View>
      <Text style={styles.title}>Welcome, {activeUser[0]?.firstName} {activeUser[0]?.lastName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  drawerContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#0066cc',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 15,
  },
  initials: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Cars;

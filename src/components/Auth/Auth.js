// auth.js

import drivers from '../../../db/db.json'; // Import the user data from your JSON file

// Function to authenticate a user based on email and password
export const authenticateUser = (email, password) => {
  const driver = drivers.drivers.find(
    (driver) => driver.email === email && driver.password === password
  );

  return user;
};

// Function to get a user by their email
export const getUserByEmail = (email) => {
  const driver = driver.users.find((driver) => driver.email === email);

  return driver;
};

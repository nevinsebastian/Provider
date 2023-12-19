import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('grant_type', '');
      formData.append('username', username);
      formData.append('password', password);
      formData.append('scope', '');
      formData.append('client_id', '');
      formData.append('client_secret', '');

      const response = await axios.post('http://13.55.58.126:8000/loginprovider', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.status === 200) {
        setLoginSuccess(true);
        setErrorMessage(null);
        Alert.alert('Login Successful!');
      } else {
        setLoginSuccess(false);
        setErrorMessage('Unexpected response from server');
        Alert.alert('Login Failed', 'Unexpected response from server');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        setErrorMessage('Invalid username or password');
      } else {
        // Handle other errors
        console.error('Error during login:', error.message);
        setErrorMessage('An error occurred during login');
      }

      setLoginSuccess(false);
      Alert.alert('Login Failed', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  errorMessage: {
    color: 'red',
    marginTop: 16,
  },
});

export default LoginScreen;

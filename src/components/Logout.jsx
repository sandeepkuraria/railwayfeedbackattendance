import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear the user session
      await AsyncStorage.clear();

      // Navigate back to the login page
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error clearing user session:', error);
    }
  };
  // // Assume you have received the user token from your login API
  // const userToken = 'exampleToken123';

  // // Call storeUserSession with the received token
  // storeUserSession(userToken);

  // After successful login
  const storeUserSession = async token => {
    try {
      await AsyncStorage.setItem('userToken', token);
      // Navigate to the next screen (TrainList or any other screen)
      navigation.replace('TrainList');
    } catch (error) {
      console.error('Error storing user session:', error);
    }
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require('../assets/images/power-switch.png')}
            style={styles.logoutButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  logoutButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: '2%',
    width: 22,
    height: 22,
  },
});

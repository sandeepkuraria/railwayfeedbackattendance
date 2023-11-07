import {useEffect} from 'react';
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
      navigation.replace('Login');
    } catch (error) {
      console.error('Error clearing user session:', error);
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
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 22,
    height: 22,
  },
});

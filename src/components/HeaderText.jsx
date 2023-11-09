import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logout from './Logout';
import {blue} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {Image} from 'react-native-svg';
import {Avatar} from 'react-native-paper';

const HeaderText = ({name, pic}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Avatar.Image
          size={65}
          source={pic ? {uri: pic} : require('../assets/images/krhitik.png')}
        />
      </View>

      <View>
        <Text style={styles.headerText}>{name}</Text>
      </View>

      {/* Logout Button */}

      <View style={styles.logout}>
        <Logout />
      </View>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: '1%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    backgroundColor: '#EFCBB4',
    paddingVertical: '1%',
  },
  headerText: {
    paddingVertical: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#167fb9',
  },
  logout: {
    paddingVertical: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#167fb9',
  },
});

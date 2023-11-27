import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Logout from './Logout';
import {blue} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {Image} from 'react-native-svg';
import {Avatar} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

const HeaderText = () => {
  // const {name, pic} = useContext(AuthContext); // Destructure the token from AuthContext
  const {token, getToken, name, pic} = useContext(AuthContext);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.pic}>
        <Avatar.Image
          size={40}
          source={pic ? {uri: pic} : require('../assets/images/user.png')}
        />
        <View>
          <Text style={styles.headerText}>{name}</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#EFCBB4',
    paddingVertical: '1%',
  },
  headerText: {
    paddingVertical: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#167fb9',
    paddingLeft: '3%',
  },
  logout: {
    paddingVertical: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#167fb9',
    marginHorizontal: '3%',
  },
  pic: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '3%',
  },
});

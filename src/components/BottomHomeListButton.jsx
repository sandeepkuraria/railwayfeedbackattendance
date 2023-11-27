import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../context/AuthContext';

const BottomHomeListButton = () => {
  const {token, name, pic} = useContext(AuthContext); // Destructure the token from AuthContext

  const navigation = useNavigation();

  console.log('name in BottomHomeListButton Component.......', name);
  return (
    <View style={styles.buttonBottomRowContainer}>
      <View style={styles.homeButton}>
        <TouchableOpacity
          style={styles.BottomRowbutton}
          onPress={() =>
            navigation.navigate('TrainList', {
              name: name,
              token: token,
              pic: pic,
            })
          }>
          <FontAwesomeIcon icon={faHouse} size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.verticalBar}></View>

      <View style={styles.homeButton}>
        <TouchableOpacity
          style={styles.BottomRowbutton}
          onPress={() =>
            navigation.navigate('CompletedJourney', {
              name: name,
              token: token,
              pic: pic,
            })
          }>
          <FontAwesomeIcon icon={faBars} size={25} />
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity style={styles.BottomRowbutton}>
        <FontAwesomeIcon icon={faFile} size={35} />
      </TouchableOpacity> */}
    </View>
  );
};

export default BottomHomeListButton;

const styles = StyleSheet.create({
  buttonBottomRowContainer: {
    flex: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EFCBB4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: '2%',
  },
  homeButton: {
    // borderWidth: 2,
    // borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // BottomRowbutton: {
  //   flex: 1,
  //   // flexDirection: 'row',
  //   // backgroundColor: '#EFCBB4',
  //   padding: '0.5%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // icon: {
  //   fontSize: 12,
  //   justifyContent: 'space-between',
  //   // marginHorizontal: 15,
  //   // width: 30,
  //   // height: 30,
  //   // marginHorizontal: '10%',
  //   // marginBottom: 5,
  // },
  verticalBar: {
    height: '155%',
    borderWidth: 1,
    borderColor: 'orange',
  },
});

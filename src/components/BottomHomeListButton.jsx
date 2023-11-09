import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';

const BottomHomeListButton = ({name, token, pic}) => {
  const navigation = useNavigation();

  console.log('name in BottomHomeListButton Component.......', name);
  return (
    <View style={styles.buttonBottomRowContainer}>
      <TouchableOpacity
        style={styles.BottomRowbutton}
        onPress={() =>
          navigation.navigate('TrainList', {
            name: name,
            token: token,
            pic: pic,
          })
        }>
        <FontAwesomeIcon icon={faHouse} size={35} />
      </TouchableOpacity>

      <View style={styles.verticalBar}></View>

      <TouchableOpacity style={styles.BottomRowbutton}>
        <FontAwesomeIcon icon={faFile} size={35} />
      </TouchableOpacity>
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
  },
  BottomRowbutton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFCBB4',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'space-between',
    // marginHorizontal: 15,
    width: 30,
    height: 30,
    // marginHorizontal: '10%',
    // marginBottom: 5,
  },
  verticalBar: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },
});

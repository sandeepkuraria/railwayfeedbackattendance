import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook

const BottomHomeListButton = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const token = route.params.token;
  console.log('name in BottomHomeListButton Component.......', name);
  return (
    <View style={styles.buttonBottomRowContainer}>
      <TouchableOpacity
        style={styles.BottomRowbutton}
        onPress={() =>
          navigation.navigate('TrainList', {
            name: name,
            token: token,
          })
        }>
        <Image
          source={require('../assets/images/home.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.verticalBar}></View>
      <TouchableOpacity style={styles.BottomRowbutton}>
        <Image
          source={require('../assets/images/report.png')}
          style={styles.icon}
        />
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

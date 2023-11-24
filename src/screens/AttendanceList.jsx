import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomHomeListButton from '../components/BottomHomeListButton';
import Header from '../components/Header';

const AttendanceList = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      {/* <Text style={{color: 'black'}}>AttendanceList</Text> */}
      <BottomHomeListButton />
    </View>
  );
};

export default AttendanceList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

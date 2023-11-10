import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CurrentDate = () => {
  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return currentDate.toLocaleDateString('en-IN', options);
  };
  return (
    <View>
      <Text style={styles.cardTextDate}>{getFormattedCurrentDate()}</Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({
  cardTextDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

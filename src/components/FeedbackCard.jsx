// FeedbackCard.jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FeedbackCard = ({feedbackData}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>PNR: {feedbackData.pnr}</Text>
      {/* Add other feedback details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    width: 250, // Adjust the width as needed
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackCard;

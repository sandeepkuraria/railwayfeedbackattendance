import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useContext} from 'react';
import {FeedbackContext} from '../context/FeedbackContext';
import {TrainListContext} from '../context/TrainListContext';
import {AuthContext} from '../context/AuthContext';
import BottomHomeListButton from '../components/BottomHomeListButton';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedbackList = () => {
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {feedbackList, isLoading, fetchFeedbackList} =
    useContext(FeedbackContext);

  console.log('feedbackList in FeedbackList page:', feedbackList);
  const {trainData, trainDataFirstIndex, upcomingDutiesApi, coachB} =
    useContext(TrainListContext);
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const FeedbackCard = ({item}) => (
    <View style={[styles.cardContainer, {color: 'darkred'}]}>
      <Text style={styles.cardText}>PNR: {item.pnr}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      {/* <Text style={{color: 'black'}}>FeedbackList</Text> */}
      <FlatList
        horizontal
        data={feedbackList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={FeedbackCard}
      />
      <BottomHomeListButton />
    </View>
  );
};

export default FeedbackList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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

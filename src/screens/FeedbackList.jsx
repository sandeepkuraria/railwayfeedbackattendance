import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {FeedbackContext} from '../context/FeedbackContext';
import {TrainListContext} from '../context/TrainListContext';
import {AuthContext} from '../context/AuthContext';
import BottomHomeListButton from '../components/BottomHomeListButton';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrentDate from '../components/CurrentDate';
import HeaderText from '../components/HeaderText';

const FeedbackList = ({route}) => {
  // const { completedJourneys  } = route.params;
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {feedbackList, setFeedbackList, isLoading, fetchFeedbackList} =
    useContext(FeedbackContext);

  console.log(
    'feedbackList in FeedbackList.jsx page_____---+++++++',
    feedbackList,
  );
  const {
    trainData,
    trainDataFirstIndex,
    upcomingDutiesApi,
    coachB,
    completedJourneys,
    setCompletedJourneys,
    fetchCompletedJourneys,
    activeFAButton,
    setActiveFAButton,
  } = useContext(TrainListContext);
  // Extracting the dutyId from the route params
  // const {dutyId} = route.params;

  // Change the useEffect to use the dutyId from route.params
  useEffect(() => {
    // Extracting the dutyId from the route params
    const {dutyId} = route.params;
    fetchFeedbackList(dutyId);
  }, []);

  // useEffect(() => {
  //   fetchFeedbackList();
  // }, []);

  // useEffect(() => {
  //   fetchCompletedJourneys();
  // }, []);

  // const feedbackData = feedbackList.filter(
  //   journey => journey.dutyId === dutyId,
  // );

  // // Filtering feedback data based on dutyId
  // const feedbackData = feedbackList
  //   .filter(journey => journey.dutyId === dutyId)
  //   .map(journey => journey.id);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const FeedbackCard = ({item}) => (
    <View style={[styles.cardContainer]}>
      <Text style={styles.cardText}>dutyId: {item.dutyId}</Text>
      <Text style={styles.cardText}>coach: {item.coach}</Text>
      <Text style={styles.cardText}>PNR: {item.pnr}</Text>
      <Text style={styles.cardText}>mobile: {item.mobile}</Text>
      {/* <Text style={styles.cardText}>feedback: {item.feedback}</Text> */}
      <Text style={styles.cardText}>
        bedroll_provided_on_time: {item.bedroll_provided_on_time}
      </Text>
      <Text style={styles.cardText}>
        all_linen_items_provided_in_bedroll:
        {item.all_linen_items_provided_in_bedroll}
      </Text>
      <Text style={styles.cardText}>
        all_linen_items_provided_fresh: {item.all_linen_items_provided_fresh}
      </Text>
      <Text style={styles.cardText}>
        behaviors_of_attender: {item.behaviors_of_attender}
      </Text>
      <Text style={styles.cardText}>
        are_you_feeling_safe_in_journey: {item.are_you_feeling_safe_in_journey}
      </Text>
      <Text style={styles.cardText}>description: {item.description}</Text>
      <Text style={styles.cardText}>rating: {item.rating}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View>
        <HeaderText name={name} pic={pic} />
      </View>

      {/* ************************Date and Time************* */}

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>
      {/* <Header /> */}
      {/* <Text style={{color: 'black'}}>FeedbackList</Text> */}
      <FlatList
        // horizontal
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
    // backgroundColor: '#ffffff',
    // borderRadius: 10,
    // padding: 16,
    // margin: 8,
    // width: 250, // Adjust the width as needed

    // backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: '0.5%',
    // padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
    flex: 2,
    // justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    backgroundColor: '#F8F9F9',
  },
  cardText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTextDateHeading: {
    flex: 0,
    padding: 5,
    marginBottom: '1%',
    backgroundColor: '#F8F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  // journeyItem: {
  //   // backgroundColor: '#fff',
  //   marginBottom: 10,
  //   marginHorizontal: '0.5%',
  //   // padding: 10,
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   borderColor: '#EFCBB4',
  //   flex: 2,
  //   // justifyContent: 'center',
  //   elevation: 30,
  //   shadowColor: '#EFCBB4',
  //   shadowOffset: {width: 5, height: 100},
  //   shadowOpacity: 0.1,
  //   shadowRadius: 8,
  //   padding: '2%',
  //   backgroundColor: '#F8F9F9',
  // },
});

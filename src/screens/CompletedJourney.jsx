import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomHomeListButton from '../components/BottomHomeListButton';
import Header from '../components/Header';
import {TrainListContext} from '../context/TrainListContext';
import {AuthContext} from '../context/AuthContext';
import HeaderText from '../components/HeaderText';
import CurrentDate from '../components/CurrentDate';
import FeedbackList from './FeedbackList'; // Import FeedbackList component

const CompletedJourney = () => {
  const {token, getToken, name, pic} = useContext(AuthContext);

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

  const navigation = useNavigation();

  useEffect(() => {
    fetchCompletedJourneys();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.journeyItem}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '8%',
          }}>
          <Text style={styles.cardTextHeaders}>{item.train_no}</Text>
          <Text style={styles.cardTextHeaders}>{item.date}</Text>
        </View>

        <Text style={styles.cardTextDate}>{item.train_name}</Text>

        <View>
          <View style={styles.buttonFAContainer}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleFeedbackList(item.id);
                  handleFAPress('FeedbackList');
                }}
                style={[
                  styles.buttonF,
                  activeFAButton ===
                    //  'FeedbackList' &&
                    styles.activeFAButton,
                ]}>
                <Text style={styles.buttonFeedbackText}>Feedback-List</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleAttendanceList(item.id);
                  handleFAPress('AttendanceList');
                }}
                style={[
                  styles.buttonA,
                  activeFAButton ===
                    // 'AttendanceList' &&
                    styles.activeFAButton,
                ]}>
                <Text style={styles.buttonAttendanceText}>Attendance-List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const handleFAPress = button => {
    setActiveFAButton(button);
  };

  // Inside handleFeedbackList function
  const handleFeedbackList = id => {
    console.log(
      'FeedbackList pressed ++++++++++++++++++++++++++++++++++++++++++++++',
      id,
    );

    navigation.navigate('FeedbackList', {
      dutyId: id, // Pass the completed journey id dynamically
    });

    console.log(
      'completedJourneys.id while AttendanceList pressed in CompletedJourneys page ***************++++++',
      completedJourneys.id,
    );
  };

  const handleAttendanceList = id => {
    console.log(
      'AttendanceList pressed ++++++++++++++++++++++++++++++++++++++++++++++',
      id,
    );
    navigation.navigate('AttendanceList', {
      dutyId: id, // Pass the completed journey id dynamically
    });
    console.log(
      'completedJourneys.id while AttendanceList pressed in CompletedJourneys page ***************++++++',
      completedJourneys.id,
    );
    // console.log('AttendanceList pressed', item);
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderText />

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>

      <ScrollView style={{marginBottom: 35}}>
        <FlatList
          data={completedJourneys}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <BottomHomeListButton />
    </View>
  );
};

export default CompletedJourney;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  journeyItem: {
    // backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: '0.5%',
    // padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
    flex: 2,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    backgroundColor: '#F8F9F9',
  },
  cardTextHeaders: {
    paddingTop: '1%',
    color: 'black',
    fontSize: 16,
    // backgroundColor: 'red',
  },
  cardTextDate: {
    padding: '3%',

    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },

  buttonFAContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  buttonF: {
    borderWidth: 2,
    borderColor: '#EFCBB4',
    paddingVertical: '6%',
    // paddingHorizontal: '1%',
    borderRadius: 50,
  },
  buttonA: {
    borderWidth: 2,
    borderColor: '#EFCBB4',
    paddingVertical: '6%',
    paddingHorizontal: '3%',
    borderRadius: 50,
  },
  activeFAButton: {
    backgroundColor: '#ff8d3c',
  },
  buttonFeedbackText: {
    fontSize: 12,
    paddingHorizontal: '8%',
    textAlign: 'center',
    color: 'black',
    // fontWeight: 'bold',
  },
  buttonAttendanceText: {
    fontSize: 12,
    paddingHorizontal: '3%',
    textAlign: 'center',
    color: 'black',
    // fontWeight: 'bold',
  },
});

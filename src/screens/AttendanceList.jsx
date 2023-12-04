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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrentDate from '../components/CurrentDate';
import HeaderText from '../components/HeaderText';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {AttendanceContext} from '../context/AttendanceContext';

const AttendanceList = ({route}) => {
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {attendanceList, setAttendanceList, isLoading, fetchAttendanceList} =
    useContext(AttendanceContext);

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

  // Change the useEffect to use the dutyId from route.params
  useEffect(() => {
    // Extracting the dutyId from the route params
    const {dutyId} = route.params;
    fetchAttendanceList(dutyId);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  // console.log(
  //   'attendanceList in attendanceList page +++++++++++++++++',
  //   attendanceList,
  // );
  const AttendanceCard = ({item}) => (
    <View style={[styles.cardContainer]}>
      {/* Display attendance information as needed */}
      <Text style={styles.cardText}>DutyId: {item.dutyId}</Text>
      <Text style={styles.cardText}>Employee ID: {item.employeeId}</Text>
      <Text style={styles.cardText}>
        Source Date Time: {item.source_date_time}
      </Text>
      <Text style={styles.cardText}>
        Destination Date Time: {item.destination_date_time}
      </Text>
      {/* Add more fields as needed */}
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View>
        <HeaderText />
      </View>

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>

      <ScrollView style={{marginBottom: 40}}>
        <Text style={{color: 'black'}}>hello..........</Text>
        <FlatList
          data={attendanceList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={AttendanceCard}
        />
      </ScrollView>

      <BottomHomeListButton />
    </View>
  );
};

export default AttendanceList;

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
    marginBottom: '1%',
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
    // fontWeight: 'bold',
  },
  cardTextPNR: {
    color: 'darkred',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTextCoach: {
    color: '#167fb9',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTextMobile: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
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
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 6,
    borderColor: '#EFCBB4',
    marginBottom: '2%',
  },
  fieldContainerDescription: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 6,
    borderColor: '#EFCBB4',
    marginBottom: '2%',
  },
  fieldTextContainer: {
    marginLeft: 10,
  },
  feedbackList: {
    color: 'black',
    marginVertical: '4%',
  },
  fieldInputContainer: {
    marginRight: 10,
  },
  radioYesNo: {
    marginVertical: '3%',
  },
  radioYesNo: {
    marginVertical: '3%',
  },
  radioYesNoDescription: {
    marginBottom: '1%',
    marginHorizontal: '0.5%',
    paddingHorizontal: '33%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
    // flex: 2,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    backgroundColor: '#F8F9F9',
  },
  textBlack: {
    color: 'black',
  },
});

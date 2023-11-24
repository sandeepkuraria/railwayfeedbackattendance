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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/AuthContext';

const ReportList = () => {
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {trainData, trainDataFirstIndex, upcomingDutiesApi, coachB} =
    useContext(TrainListContext);

  const navigation = useNavigation();
  const [activeFAButton, setActiveFAButton] = useState('');
  const handleFAPress = button => {
    setActiveFAButton(button);
  };
  const handleFeedbackList = item => {
    console.log('FeedbackList pressed', item);

    navigation.navigate('FeedbackList', {
      name: name,
      token: token,
      pic: pic,
      trainData: trainData,
      coachB: coachB,
    });
  };

  const markAttendanceList = item => {
    navigation.navigate('AttendanceList', {
      name: name,
      token: token,
      pic: pic,
      trainData: trainData,
    });
    console.log('AttendanceList pressed', item);
  };
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View>
        <ScrollView>
          {[trainDataFirstIndex].map((train, index) => (
            <View key={index}>
              <View style={styles.buttonFAContainer}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      handleFeedbackList(train);
                      handleFAPress('FeedbackList');
                    }}
                    style={[
                      styles.buttonF,
                      activeFAButton === 'FeedbackList' &&
                        styles.activeFAButton,
                    ]}>
                    <Text style={styles.buttonFeedbackText}>Feedback-List</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      markAttendanceList(train);
                      handleFAPress('AttendanceList');
                    }}
                    style={[
                      styles.buttonA,
                      activeFAButton === 'AttendanceList' &&
                        styles.activeFAButton,
                    ]}>
                    <Text style={styles.buttonAttendanceText}>
                      Attendance-List
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <BottomHomeListButton />
    </View>
  );
};

export default ReportList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonFAContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '5%',
    marginHorizontal: '3%',
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
    fontSize: 17,
    paddingHorizontal: '8%',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  buttonAttendanceText: {
    fontSize: 17,
    paddingHorizontal: '3%',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

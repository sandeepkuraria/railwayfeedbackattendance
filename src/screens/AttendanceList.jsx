import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {TrainListContext} from '../context/TrainListContext';
import {AuthContext} from '../context/AuthContext';
import BottomHomeListButton from '../components/BottomHomeListButton';
import CurrentDate from '../components/CurrentDate';
import HeaderText from '../components/HeaderText';
import {AttendanceContext} from '../context/AttendanceContext';
import {Avatar} from 'react-native-paper';
import LeafletMap from '../components/LeafletMap';

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
  // useEffect(() => {
  //   const {dutyId} = route.params;
  //   fetchAttendanceList(dutyId);
  // }, []);

  useEffect(() => {
    // Extracting the dutyId from the route params
    const {dutyId} = route.params;
    fetchAttendanceList(dutyId);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <ActivityIndicator size="500" color="#0000ff" />
      </View>
    );
  }

  console.log(
    'attendanceList.dutyId in attendanceList page +++++++++++++++++',
    attendanceList.dutyId,
  );

  const source_pic = attendanceList.source_photo;
  const destination_pic = attendanceList.destination_photo;
  const return_pic = attendanceList.return_photo;
  const sourceLat = parseFloat(attendanceList.source_lat);
  const sourceLong = parseFloat(attendanceList.source_long);

  return (
    <View style={styles.mainContainer}>
      <View>
        <HeaderText />
      </View>

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>

      <ScrollView style={{marginBottom: 40}}>
        <View style={[styles.cardContainer]}>
          <Text style={styles.cardText}>DutyId: {attendanceList.dutyId}</Text>
          <Text style={styles.cardText}>
            Employee ID: {attendanceList.employeeId}
          </Text>
          <Text style={styles.cardText}>
            Source Date Time: {attendanceList.source_date_time}
          </Text>
          <Text style={styles.cardText}>
            Destination Date Time: {attendanceList.destination_date_time}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: '3%',
            }}>
            <View style={{padding: 10}}>
              <Avatar.Image
                size={40}
                source={
                  pic ? {uri: source_pic} : require('../assets/images/user.png')
                }
              />
            </View>
            <View style={{padding: 10}}>
              <Avatar.Image
                size={40}
                source={
                  pic
                    ? {uri: destination_pic}
                    : require('../assets/images/user.png')
                }
              />
            </View>
            <View style={{padding: 10}}>
              <Avatar.Image
                size={40}
                source={
                  pic ? {uri: return_pic} : require('../assets/images/user.png')
                }
              />
            </View>
          </View>
          <View style={styles.mapContainer}>
            {/* Replace the MapView section with LeafletMap */}
            {/* <LeafletMap sourceLat={sourceLat} sourceLong={sourceLong} /> */}
          </View>
        </View>
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'black',
  },
  mapContainer: {
    height: 200,
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logout from '../components/Logout';
import BottomHomeListButton from '../components/BottomHomeListButton';

const TrainList = ({route}) => {
  const name = route.params.name;
  const token = route.params.token;
  const navigation = useNavigation();
  const [activeFAButton, setActiveFAButton] = useState('');
  const [trainData, setTrainData] = useState([]);
  const [trainDataFirstIndex, setTrainDataFirstIndex] = useState([]);
  // const [trainDataUpcomingJourney, setTrainDataUpcomingJourney] = useState([]);

  let trainDataUpcomingJourney = [];

  trainDataUpcomingJourney = trainData.slice(1);

  console.log(
    'this is trainData in trainlist ___***********************',
    trainData,
  );
  console.log(
    'trainDataFirstIndex in trainlist___________-------',
    trainDataFirstIndex,
  );

  console.log(
    'trainDataUpcomingJourney in trainlist___________-------',
    trainDataUpcomingJourney,
  );

  useEffect(() => {
    upcomingDutiesApi();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={[styles.bottomText, {color: 'darkred'}]}>{item.date}</Text>
      <Text style={styles.bottomTrainNumberText}>{item.train_no}</Text>
      <Text style={[styles.bottomText, {color: '#167fb9'}]}>
        {item.train_name}
      </Text>
    </View>
  );

  // ******************** upcoming duties API start *******************************
  const upcomingDutiesApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const res = await fetch(
      'https://railway.retinodes.com/api/v1/assignduty/upcomingduties',
      requestOptions,
    );
    const response = await res.json();

    // setTrainData(response.data);

    setTrainData(response.data || []);
    setTrainDataFirstIndex(response.data[0] || []);
    // setTrainDataUpcomingJourney(response.data.slice(1) || []);

    if (response.status === true) {
      console.log(
        'TrainList console data : - ',
        trainData[0].date,
        trainData[0].train_no,
        trainData[0].train_name,
      );
    } else {
      Alert.alert(response.message);
    }
  };

  // ******************** upcoming duties API end *******************************
  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return currentDate.toLocaleDateString('en-US', options);
  };

  //for upcoming trainlist data to be shown as list end

  const handleFeedback = item => {
    console.log('Feedback pressed', item);
    navigation.navigate('Feedback', {
      name: name,
      token: token,
      trainData: trainData,
    });
  };

  const markAttendance = () => {
    navigation.navigate('Attendance', {
      name: name,
      token: token,
      trainData: trainData,
    });
    console.log('Attendance pressed');
  };

  const handleFAPress = button => {
    setActiveFAButton(button);
  };

  //*************RAILWAY API************** */
  // const fetchTrain = async () => {
  //   const url = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '3c1ab7d50amshde485bf4334ce79p11debajsn5a0be495413d',
  //       'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result.data);
  //     setTrainData(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //*********************************** */

  console.log(trainData, '-----traindata');

  return (
    <View style={styles.mainContainer}>
      {/* ********Hello, Mr. userName */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <View>
          <Logout />
        </View>
      </View>

      {/* ************************Date and Time************* */}
      <View style={styles.cardTextDateHeading}>
        <Text style={styles.cardTextDate}>{getFormattedCurrentDate()}</Text>
      </View>

      <View>
        <ScrollView>
          {[trainDataFirstIndex].map((train, index) => (
            <View key={index}>
              <View style={styles.trainCard}>
                <View
                  style={{
                    // paddingTop: '1%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '6%',
                  }}>
                  <Text style={styles.cardTextHeaders}>{train.train_no}</Text>
                  <Text style={styles.cardTextHeaders}>{train.train_name}</Text>
                </View>
                <View style={styles.fromTo}>
                  <View>
                    <Text style={styles.fromToText}>{train.from_station}</Text>
                    <Text style={styles.fromToText}>
                      {train.start_time} Hrs
                    </Text>
                  </View>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                    -
                  </Text>
                  <View>
                    <Text style={styles.fromToText}>{train.to_station}</Text>
                    <Text style={styles.fromToText}>
                      {train.reach_time} Hrs
                    </Text>
                  </View>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                    -
                  </Text>
                  <View>
                    <Text style={styles.fromToText}>
                      {train.return_station}
                    </Text>
                    <Text style={styles.fromToText}>
                      {train.return_time} Hrs
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.allotedCoach}>
                <View>
                  <Text style={styles.allotedCoachHeading}>
                    Alloted Coaches
                  </Text>
                </View>
                <View style={styles.verticalBar1}></View>
                <View>
                  <Text style={styles.allotedCoachName}>{train.coaches}</Text>
                </View>
              </View>

              <View style={styles.buttonFAContainer}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      handleFeedback(train);
                      handleFAPress('Feedback');
                    }}
                    style={[
                      styles.buttonFA,
                      activeFAButton === 'Feedback' && styles.activeFAButton,
                    ]}>
                    <Text style={styles.buttonFeedbackText}>FEEDBACK</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      markAttendance();
                      handleFAPress('Attendance');
                    }}
                    style={[
                      styles.buttonFA,
                      activeFAButton === 'Attendance' && styles.activeFAButton,
                    ]}>
                    <Text style={styles.buttonAttendanceText}>ATTENDANCE</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.dashedLine}></View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* ********************************buttonBottomRowContainer start ***************************** */}
      <View style={styles.upComingJourney}>
        <Text style={styles.upComingJourneyText}>Up-Coming Journey</Text>
      </View>
      {/* upcoming train List */}
      <View>
        <View>
          {/* **************bottom list container start **************************/}
          <View style={styles.bottomTextContainer}>
            <ScrollView>
              <FlatList
                data={trainDataUpcomingJourney}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>

          {/* **************bottom list container end **************************/}
        </View>
      </View>

      <View style={styles.buttonBottomRowContainer}>
        <TouchableOpacity style={styles.BottomRowbutton}>
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

      {/* ********************************buttonBottomRowContainer end ***************************** */}
    </View>
  );
};

export default TrainList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0,

    flexDirection: 'row',
    paddingVertical: '3%',
    marginBottom: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#167fb9',
  },
  allotedCoach: {
    flex: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: '17%',
    marginTop: '10%',
    marginHorizontal: '10%',
    marginBottom: '1%',
    backgroundColor: '#EFCBB4',
    borderRadius: 8,
  },

  allotedCoachHeading: {
    color: 'black',
    fontSize: 18,
    // paddingHorizontal: '17%',
    // paddingVertical: '1%',
  },
  verticalBar1: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
    // paddingVertical: '1%',
  },
  allotedCoachName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
    // paddingRight: '15%',
    // paddingVertical: '1%',
    // marginRight: '10%',
  },

  trainCard: {
    flex: 2,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70,
    backgroundColor: '#F8F9F9',
  },
  cardTextHeaders: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fromTo: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
  },
  fromToText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  cardTextDateHeading: {
    flex: 0,
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
  cardTextDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  // coach buttons style start*************************************************
  coachContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '12%',
    marginTop: '5%',
  },
  coachButton: {
    borderWidth: 2,
    borderColor: '#EFCBB4',
    backgroundColor: '#EFCBB4',
    padding: '3%',
  },
  activeCoachButton: {
    backgroundColor: '#EFCBB4',
  },
  coachButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  // coach buttons style end*************************************************

  buttonFAContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%',
    marginHorizontal: '10%',
  },
  buttonFA: {
    borderWidth: 2,
    borderColor: '#EFCBB4',
    paddingVertical: '6%',
    paddingHorizontal: '1%',
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

  dashedLine: {
    flex: 0,
    marginTop: '10%',
    width: '100%',
    borderBottomColor: '#EFCBB4',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },

  upComingJourney: {
    flex: 0,
    marginTop: '2%',
    //borderBottomWidth: 1,
    paddingLeft: '2%',
    //borderBottomColor: '#EFCBB4',
    width: '60%',
    justifyContent: 'center',
  },
  upComingJourneyText: {
    fontWeight: '500',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '2%',
    paddingBottom: '3%',
  },
  bottomTextContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.1,
    paddingVertical: '1%',
  },
  bottomText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  bottomTrainNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#EFCBB4',
    marginHorizontal: '2%',
    //borderRadius: 10,
    padding: '1%',
    marginBottom: '0.5%',
  },
});

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

const TrainList = ({route}) => {
  const name = route.params.name;
  const token = route.params.token;
  const navigation = useNavigation();
  const [activeFAButton, setActiveFAButton] = useState('');
  const [trainData, setTrainData] = useState([]);

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
    myHeaders.append(
      'Cookie',
      'ci_session=e44c2130f742804bc9d125bd187343e9dda13094',
    );

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

    if (response.status === true) {
      console.log(
        response.data.date,
        response.data.train_no,
        response.data.train_name,
      );

      // {
      //   name: response.data.name,
      //   date:response.data.date,
      //   train_no:response.data.train_no,
      //   train_name:response.data.train_name,
      //   from_station:response.data.from_station,
      //   to_station:response.data.to_station,
      //   start_time:response.data.start_time,
      //   coaches:response.data.coaches,
      // });
    } else {
      Alert.alert(response.message);
    }
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
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
      date: trainData.date,
      train_no: trainData.train_no,
      train_name: trainData.train_name,
      from_station: trainData.from_station,
      to_station: trainData.to_station,
      start_time: trainData.start_time,
      coaches: trainData.coaches,
    });
  };

  const markAttendance = () => {
    navigation.navigate('Attendance', {
      name: name,
      token: token,
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
        <Text style={styles.headerText}>Hello, Mr.{name}</Text>
      </View>

      <View>
        {/* ************************Date and Time************* */}
        <View>
          <Text style={styles.cardTextDate}>{getFormattedCurrentDate()}</Text>
        </View>
      </View>

      {/* ))} */}
      <View>
        <ScrollView>
          {/* {data && data.map(item => <Component key={item.id} {...item} />)}
           */}
          {trainData.map((train, index) => (
            <View key={index}>
              <View style={styles.trainCard}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '6%',
                  }}>
                  <Text style={styles.cardTextHeaders}>{train.train_no}</Text>
                  <Text style={styles.cardTextHeaders}>{train.train_name}</Text>
                </View>
                <View style={styles.fromTo}>
                  <View>
                    <Text style={styles.fromToText}>
                      <Text style={{fontWeight: 'bold'}}>From</Text>
                    </Text>
                    <Text style={styles.fromToText}>{train.from_station}</Text>
                    <Text style={styles.fromToText}>
                      {train.start_time} Hrs
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.fromToText}>
                      <Text style={{fontWeight: 'bold'}}>To</Text>
                    </Text>
                    <Text style={styles.fromToText}>{train.to_station}</Text>
                    <Text style={styles.fromToText}>
                      {train.reach_time} Hrs
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

              {/* *******************Feedback and Attendance Container start******************* */}
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

              {/* *******************Feedback and Attendance Container end******************* */}

              <View style={styles.dashedLine}></View>

              {/* **************bottom text container end*************************** */}
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
                data={trainData}
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
    position: 'relative',
  },
  allotedCoach: {
    flexDirection: 'row',
    marginTop: '10%',
    marginHorizontal: '10%',
    marginBottom: '3%',
    height: '10%',
    backgroundColor: '#EFCBB4',
    borderRadius: 12,
  },

  allotedCoachHeading: {
    color: 'black',
    fontSize: 18,
    paddingHorizontal: '17%',
    paddingVertical: '1%',
  },
  verticalBar1: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
    paddingVertical: '1%',
  },
  allotedCoachName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '1%',
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

  headerContainer: {
    height: '4%',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#167fb9',
  },
  trainCard: {
    height: '38%',
    elevation: 20,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '1%',
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
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  cardTextDate: {
    elevation: 10,
    shadowColor: '#ff8d3c',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    height: 25,
    marginBottom: 4,
    backgroundColor: '#F8F9F9',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },

  buttonFAContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%',
    marginHorizontal: '10%',
  },
  buttonFA: {
    borderWidth: 2,
    borderColor: '#EFCBB4',
    paddingVertical: '2%',
    paddingHorizontal: '1%',
    borderRadius: 50,
  },
  activeFAButton: {
    backgroundColor: '#EFCBB4',
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
    marginTop: '6%',
    marginBottom: '7%',
    width: '100%',
    borderBottomColor: '#EFCBB4',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },

  upComingJourney: {
    marginTop: '9%',
    marginBottom: '6%',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: '5%',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#EFCBB4',
    width: '60%',
    marginLeft: '2%',
    justifyContent: 'center',
  },

  upComingJourneyText: {
    position: 'relative',
    top: 0,

    fontWeight: '500',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '2%',
    paddingBottom: '3%',
  },

  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowOpacity: 0.1,
    marginBottom: 550,
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
    // borderWidth: 2,
  },
  buttonBottomRowContainer: {
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
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'space-between',
    marginHorizontal: 15,
    width: 30,
    height: 30,
    marginHorizontal: 70,
    marginBottom: 5,
  },
  verticalBar: {
    height: 55,
    width: 2,
    backgroundColor: 'orange',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#EFCBB4',
    marginHorizontal: '3%',
    borderRadius: 10,
    padding: '1%',
    marginBottom: '6%',
  },
});

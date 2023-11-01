import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const formatDate = dateTimeString => {
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return new Date(dateTimeString).toLocaleDateString('en-US', options);
};
//for upcoming trainlist data to be shown as list start
const data = [
  {date: '01-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '02-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '03-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '04-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '05-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '06-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '07-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '08-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '09-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '10-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '11-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '12-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '13-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '29-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},
  {date: '02-10-23', trainNumber: '22181', trainName: 'Sampark kranti'},

  // Add more data as needed...
];

const renderItem = ({item}) => (
  <View style={styles.card}>
    <Text style={[styles.bottomText, {color: 'darkred'}]}>{item.date}</Text>
    <Text style={styles.bottomTrainNumberText}>{item.trainNumber}</Text>
    <Text style={[styles.bottomText, {color: '#167fb9'}]}>
      {item.trainName}
    </Text>
  </View>
);

//for upcoming trainlist data to be shown as list end

const TrainList = () => {
  const [activeFAButton, setActiveFAButton] = useState('');
  const [activeCoachButton, setActiveCoachButton] = useState('');
  const navigation = useNavigation();
  const [trainData, setTrainData] = useState();
  const trains = [
    {
      trainName: 'Janshatabdi',
      trainName: 'Janshatabdi',
      trainNumber: '12345',
      departureTime: '2023-10-20T08:00:00',
      departureLocation: {latitude: 12.9716, longitude: 77.5946},
      arrivalTime: '2023-10-20T14:00:00',
      arrivalLocation: {latitude: 13.0827, longitude: 80.2707},
      coachNumber: 'A1',
      attenderName: 'John gupta',
      attenderEmail: 'john.gupta@example.com',
    },
    // {
    //   trainName: 'garibrath',
    //   trainName: 'garibrath',
    //   trainNumber: '45678',
    //   departureTime: '2023-10-20T08:00:00',
    //   departureLocation: {latitude: 13.9716, longitude: 78.5946},
    //   arrivalTime: '2023-10-20T14:00:00',
    //   arrivalLocation: {latitude: 14.0827, longitude: 81.2707},
    //   coachNumber: 'A2',
    //   attenderName: 'dave cooper',
    //   attenderEmail: 'dave.cooper@example.com',
    // },
    // {
    //   trainName: 'shaktipunj',
    //   trainName: 'shaktipunj',
    //   trainNumber: '78945',
    //   departureTime: '2023-10-20T08:00:00',
    //   departureLocation: {latitude: 14.9716, longitude: 79.5946},
    //   arrivalTime: '2023-10-20T14:00:00',
    //   arrivalLocation: {latitude: 15.0827, longitude: 82.2707},
    //   coachNumber: 'A3',
    //   attenderName: 'Brad pitt',
    //   attenderEmail: 'brad.pitt@example.com',
    // },
  ];

  const handleFeedback = item => {
    // if (activeCoachButton) {
    console.log('Feedback pressed', item);
    navigation.navigate('Feedback', {
      trainName: item.trainName,
      trainNumber: item.trainNumber,
      coachNumber: item.coachNumber,
    });
    // }
    // else {
    //   Alert.alert('Select a coach first');
    // }
  };

  const markAttendance = () => {
    // if (activeCoachButton) {

    navigation.navigate('Attendance');
    console.log('Attendance pressed');

    // } else {
    //   Alert.alert('Select a coach first');
    // }
  };

  // const handleCoachPress = button => {
  //   setActiveCoachButton(button);
  // };

  const handleFAPress = button => {
    setActiveFAButton(button);
  };

  //*************RAILWAY API************** */
  const fetchTrain = async () => {
    const url = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3c1ab7d50amshde485bf4334ce79p11debajsn5a0be495413d',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      setTrainData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  //*********************************** */
  useEffect(() => {
    fetchTrain();
  }, []);

  console.log(trainData, '-----traindata');

  return (
    <View style={styles.mainContainer}>
      {/* ********Hello, Mr. userName */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello, Mr. Ram</Text>
      </View>
      {/* {trains.map((train, index) => ( */}
      {/* <View key={index}> */}
      <View>
        {/* ************************Date and Time************* */}
        <View>
          <Text style={styles.cardTextDate}>
            {/* {formatDate(train.departureTime)} */}
            Friday, 26/10/2023
          </Text>
        </View>
      </View>
      {/* ))} */}
      <View>
        <ScrollView>
          {trains.map((train, index) => (
            <View key={index}>
              <View style={styles.trainCard}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '6%',
                  }}>
                  <Text style={styles.cardTextHeaders}>
                    {train.trainNumber}
                  </Text>
                  <Text style={styles.cardTextHeaders}>{train.trainName}</Text>
                </View>
                <View style={styles.fromTo}>
                  <View>
                    <Text style={styles.fromToText}>
                      <Text style={{fontWeight: 'bold'}}>From</Text>
                    </Text>
                    <Text style={styles.fromToText}>Jabalpur</Text>
                    <Text style={styles.fromToText}>19:10 Hrs</Text>
                  </View>
                  <View>
                    <Text style={styles.fromToText}>
                      <Text style={{fontWeight: 'bold'}}>To</Text>
                    </Text>
                    <Text style={styles.fromToText}>Katni</Text>
                    <Text style={styles.fromToText}>22:10 Hrs</Text>
                  </View>
                </View>
              </View>

              {/* <View style={styles.allotedCoach}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  color: 'black',
                  // paddingHorizontal: 16,
                  fontSize: 20,
                }}>
                Alloted Coaches
              </Text>
            </View> */}
              <View style={styles.allotedCoach}>
                <View>
                  <Text style={styles.allotedCoachHeading}>
                    Alloted Coaches
                  </Text>
                </View>
                <View style={styles.verticalBar1}></View>
                <View>
                  <Text style={styles.allotedCoachName}>A1</Text>
                </View>
              </View>

              {/* ***************Coach buttons container start********************** *************************/}
              {/* <View style={styles.coachContainer}>
              <TouchableOpacity
                style={[
                  styles.coachButton,
                  activeCoachButton === 'B1' && styles.activeCoachButton,
                ]}
                onPress={() => handleCoachPress('B1')}>
                <Text style={styles.coachButtonText}>B1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.coachButton,
                  activeCoachButton === 'B2' && styles.activeCoachButton,
                ]}
                onPress={() => handleCoachPress('B2')}>
                <Text style={styles.coachButtonText}>B2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.coachButton,
                  activeCoachButton === 'B3' && styles.activeCoachButton,
                ]}
                onPress={() => handleCoachPress('B3')}>
                <Text style={styles.coachButtonText}>B3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.coachButton,
                  activeCoachButton === 'B4' && styles.activeCoachButton,
                ]}
                onPress={() => handleCoachPress('B4')}>
                <Text style={styles.coachButtonText}>B4</Text>
              </TouchableOpacity>
            </View> */}
              {/* ***************Coach buttons container start********************** *************************/}

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

              {/* <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>29-10-23</Text>
              <Text style={styles.bottomTrainNumberText}>22181</Text>
              <Text style={styles.bottomText}>Sampark kranti</Text>
            </View> */}

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
                data={data}
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
    backgroundColor: '#ff8d3c',
    borderRadius: 12,
  },

  allotedCoachHeading: {
    color: 'black',
    fontSize: 18,
    // textAlign: 'left',
    paddingHorizontal: '17%',
    // height: '100%',
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
    borderColor: '#ff8d3c',
    backgroundColor: '#fff',
    padding: '3%',
  },
  activeCoachButton: {
    backgroundColor: '#ff8d3c',
  },
  coachButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  // coach buttons style end*************************************************

  headerContainer: {
    height: '3%',
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
    shadowColor: '#ff8d3c',
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
    borderColor: '#ff8d3c',
    paddingVertical: '2%',
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
    // borderWidth: 1,

    marginTop: '6%',
    marginBottom: '7%',
    width: '100%',
    borderBottomColor: '#ff8d3c',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },

  upComingJourney: {
    // borderWidth: 1,
    // height: '6%',
    // backgroundColor: '#ff8d3c',
    marginTop: '9%',
    marginBottom: '6%',
    // marginHorizontal: '25%',
    // borderRadius: 10,

    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: '5%',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'red',
    width: '60%',
    marginLeft: '2%',
    justifyContent: 'center',
  },

  upComingJourneyText: {
    position: 'relative',
    top: 0,
    // justifyContent: 'center',
    // textAlign: 'center',
    // marginTop: '4%',
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
    // borderWidth: 2,
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
    backgroundColor: '#ff8d3c',
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
    borderColor: 'orange',
    marginHorizontal: '3%',
    borderRadius: 10,
    padding: '1%',
    marginBottom: '6%',
  },
});

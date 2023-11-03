import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

const Feedback = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const token = route.params.token;
  const trainData = route.params.trainData;
  const [isACRedActive, setIsACRedActive] = useState(false);
  const [isACBlueActive, setIsACBlueActive] = useState(false);
  const [isACYellowActive, setIsACYellowActive] = useState(false);

  const [isCleaningRedActive, setIsCleaningRedActive] = useState(false);
  const [isCleaningBlueActive, setIsCleaningBlueActive] = useState(false);
  const [isCleaningYellowActive, setIsCleaningYellowActive] = useState(false);

  const [isBlanketRedActive, setIsBlanketRedActive] = useState(false);
  const [isBlanketBlueActive, setIsBlanketBlueActive] = useState(false);
  const [isBlanketYellowActive, setIsBlanketYellowActive] = useState(false);

  const [isBehaviourRedActive, setIsBehaviourRedActive] = useState(false);
  const [isBehaviourBlueActive, setIsBehaviourBlueActive] = useState(false);
  const [isBehaviourYellowActive, setIsBehaviourYellowActive] = useState(false);

  const [acFieldValue, setAcFieldValue] = useState(0);
  const [cleaningFieldValue, setCleaningFieldValue] = useState(0);
  const [blanketFieldValue, setBlanketFieldValue] = useState(0);
  const [behaviourFieldValue, setBehaviourFieldValue] = useState(0);

  // **************************AC start***************************************

  const handleACRedPress = () => {
    setIsACRedActive(true);
    setIsACBlueActive(false);
    setIsACYellowActive(false);
    setAcFieldValue(1); // Set AC field heading value to 1
    console.log('AC Value:', 1);
  };
  const handleACBluePress = () => {
    setIsACRedActive(false);
    setIsACBlueActive(true);
    setIsACYellowActive(false);
    setAcFieldValue(2); // Set AC field heading value to 2
    console.log('AC Value:', 2);
  };
  const handleACYellowPress = () => {
    setIsACRedActive(false);
    setIsACBlueActive(false);
    setIsACYellowActive(true);
    setAcFieldValue(3); // Set AC field heading value to 3
    console.log('AC Value:', 3);
  };
  // **************************AC end***************************************
  //  ****************************Cleaning Start*******************************
  const handleCleaningRedPress = () => {
    setIsCleaningRedActive(true);
    setIsCleaningBlueActive(false);
    setIsCleaningYellowActive(false);
    setCleaningFieldValue(1); // Set CLEANING field heading value to 1
    console.log('Cleaning Value:', 1);
  };
  const handleCleaningBluePress = () => {
    setIsCleaningRedActive(false);
    setIsCleaningBlueActive(true);
    setIsCleaningYellowActive(false);
    setCleaningFieldValue(2); // Set CLEANING field heading value to 2
    console.log('Cleaning Value:', 2);
  };
  const handleCleaningYellowPress = () => {
    setIsCleaningRedActive(false);
    setIsCleaningBlueActive(false);
    setIsCleaningYellowActive(true);
    setCleaningFieldValue(3); // Set CLEANING field heading value to 3
    console.log('Cleaning Value:', 3);
  };
  // **************************************************
  const handleBlanketRedPress = () => {
    setIsBlanketRedActive(true);
    setIsBlanketBlueActive(false);
    setIsBlanketYellowActive(false);
    setBlanketFieldValue(1); // Set BLANKET field heading value to 1
    console.log('Blanket Value:', 1);
  };
  const handleBlanketBluePress = () => {
    setIsBlanketRedActive(false);
    setIsBlanketBlueActive(true);
    setIsBlanketYellowActive(false);
    setBlanketFieldValue(2); // Set BLANKET field heading value to 2
    console.log('Blanket Value:', 2);
  };
  const handleBlanketYellowPress = () => {
    setIsBlanketRedActive(false);
    setIsBlanketBlueActive(false);
    setIsBlanketYellowActive(true);
    setBlanketFieldValue(3); // Set BLANKET field heading value to 3
    console.log(' Blanket Value:', 3);
  };
  // *****************************************************************************
  const handleBehaviourRedPress = () => {
    setIsBehaviourRedActive(true);
    setIsBehaviourBlueActive(false);
    setIsBehaviourYellowActive(false);
    setBehaviourFieldValue(1); // Set BEHAVIOUR field heading value to 1
    console.log('Behaviour Value:', 1);
  };
  const handleBehaviourBluePress = () => {
    setIsBehaviourRedActive(false);
    setIsBehaviourBlueActive(true);
    setIsBehaviourYellowActive(false);
    setBehaviourFieldValue(2); // Set BEHAVIOUR field heading value to 2
    console.log('Behaviour Value:', 2);
  };
  const handleBehaviourYellowPress = () => {
    setIsBehaviourRedActive(false);
    setIsBehaviourBlueActive(false);
    setIsBehaviourYellowActive(true);
    setBehaviourFieldValue(3); // Set BEHAVIOUR field heading value to 3
    console.log('Behaviour Value:', 3);
  };
  // **********************************************************************
  const handleSubmit = () => {
    if (
      acFieldValue === 0 ||
      cleaningFieldValue === 0 ||
      blanketFieldValue === 0 ||
      behaviourFieldValue === 0
    ) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Display feedback in console
    console.log('AC Rating:', acFieldValue);
    console.log('Cleaning Rating:', cleaningFieldValue);
    console.log('Blanket Rating:', blanketFieldValue);
    console.log('Behaviour Rating:', behaviourFieldValue);

    // Show feedback submitted message
    Alert.alert('Feedback submitted successfully!');
  };
  console.log('TRAINDATA IN FEEDBACK---', trainData);
  const data = trainData[0];
  console.log(data.employeeId);

  useEffect(() => {}, []);

  //postFeedback API

  const PostFeedbackApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    myHeaders.append(
      'Cookie',
      'ci_session=faa818cb1e047f52249efe5702e18ed8bfa8d0f3',
    );

    myHeaders.append('Authorization', `Bearer ${token}`);

    var urlencoded = new URLSearchParams();
    urlencoded.append('dutyId', data.id);
    urlencoded.append('coach', data.coaches);
    urlencoded.append('pnr', '13333444');
    urlencoded.append('description', 'All Good');
    urlencoded.append('rating', '5');
    urlencoded.append('feedback[0]', 'Good');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch(
      'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
      requestOptions,
    );

    const res = await fetch(
      'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
      requestOptions,
    );

    const response = await res.json();

    if (response.status === true) {
      console.log(response.data.name);

      navigation.replace('TrainList', {
        name: response.data.name,
        token: response.token,
      });
    } else {
      Alert.alert(response.message);
    }

    //  .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  };

  //currentDate function

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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello, Mr. {name}</Text>
      </View>

      <View>
        <Text style={styles.cardTextDate}>{getFormattedCurrentDate()}</Text>
      </View>
      <View style={styles.trainCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
          }}>
          <Text style={styles.cardTextHeaders}>train_no</Text>
          <Text style={styles.cardTextHeaders}>train_name</Text>
        </View>
        <View style={styles.fromTo}>
          <View>
            <Text style={styles.fromToText}>
              <Text style={{fontWeight: 'bold'}}>From</Text>
            </Text>
            <Text style={styles.fromToText}>from_station</Text>
            <Text style={styles.fromToText}>start_time Hrs</Text>
          </View>
          <View>
            <Text style={styles.fromToText}>
              <Text style={{fontWeight: 'bold'}}>To</Text>
            </Text>
            <Text style={styles.fromToText}>to_station</Text>
            <Text style={styles.fromToText}>reach_time Hrs</Text>
          </View>
        </View>
      </View>

      {/* {trainData.map((train, index) => (
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
                <Text style={styles.fromToText}>{train.start_time} Hrs</Text>
              </View>
              <View>
                <Text style={styles.fromToText}>
                  <Text style={{fontWeight: 'bold'}}>To</Text>
                </Text>
                <Text style={styles.fromToText}>{train.to_station}</Text>
                <Text style={styles.fromToText}>{train.reach_time} Hrs</Text>
              </View>
            </View>
          </View>
        </View>
      ))} */}

      <View style={styles.coachNamePNRNo}>
        <View>
          <Text style={styles.coachNameText}>{data.coaches}</Text>
        </View>

        <View style={styles.verticalBar1}></View>

        <View>
          <TextInput
            style={styles.pnrNoText}
            placeholder="PNR No"
            placeholderTextColor="#808080"
            maxLength={10} // Set the maximum length to 10
          />
        </View>
      </View>

      {/* <View style={styles.ratingWithSubmitBox}>
          <View style={styles.ratingMainContainerheading}>
            <View>
              <Text style={styles.ratingHeadingColumn}>Particular</Text>
            </View>

            <View style={styles.particularFieldStarRatingColumnFirst}>
              <View
                style={{
                  borderLeftWidth: 2,
                  borderColor: 'orange',
                  marginLeft: 26,
                }}>
                <Text
                  style={{
                    marginVertical: 8,
                    marginLeft: 12,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  1
                </Text>
              </View>
              <Image
                source={require('../assets/images/red_star.png')}
                style={{width: 22, height: 22, marginVertical: 8}}
              />
            </View>
            <View style={styles.particularFieldStarRatingColumnFirst}>
              <Text
                style={{
                  marginLeft: 40,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginVertical: 8,
                }}>
                2
              </Text>
              <Image
                source={require('../assets/images/blue_star.png')}
                style={{width: 22, height: 22, marginVertical: 8}}
              />
            </View>
            <View style={styles.particularFieldStarRatingColumnFirst}>
              <Text
                style={{
                  marginLeft: 40,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginVertical: 8,
                }}>
                3
              </Text>
              <Image
                source={require('../assets/images/yellow_star.png')}
                style={{width: 22, height: 22, marginVertical: 8}}
              />
            </View>
          </View>

          <View
            style={{borderWidth: 1, borderColor: 'orange', marginTop: '9%'}}
          />

          <View style={styles.ratingMainContainerdata}>
            <View>
              <Text style={styles.ratingHeadingColumn}>AC</Text>
              <Text style={styles.ratingHeadingColumn}>CLEANING</Text>
              <Text style={styles.ratingHeadingColumn}>BLANKET</Text>
              <Text style={styles.ratingHeadingColumn}>BEHAVIOUR</Text>
            </View>

            <View style={styles.ratingVerticalBar}></View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <View style={styles.acFieldStarRatingColumnFirst}>
                  <TouchableOpacity onPress={handleACRedPress}>
                    <Image
                      source={
                        isACRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnSecond}>
                  <TouchableOpacity onPress={handleACBluePress}>
                    <Image
                      source={
                        isACBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleACBluePress}>
                    <Image
                      source={
                        isACBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnThird}>
                  <TouchableOpacity onPress={handleACYellowPress}>
                    <Image
                      source={
                        isACYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleACYellowPress}>
                    <Image
                      source={
                        isACYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleACYellowPress}>
                    <Image
                      source={
                        isACYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <View style={styles.acFieldStarRatingColumnFirst}>
                  <TouchableOpacity onPress={handleCleaningRedPress}>
                    <Image
                      source={
                        isCleaningRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnSecond}>
                  <TouchableOpacity onPress={handleCleaningBluePress}>
                    <Image
                      source={
                        isCleaningBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCleaningBluePress}>
                    <Image
                      source={
                        isCleaningBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnThird}>
                  <TouchableOpacity onPress={handleCleaningYellowPress}>
                    <Image
                      source={
                        isCleaningYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCleaningYellowPress}>
                    <Image
                      source={
                        isCleaningYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCleaningYellowPress}>
                    <Image
                      source={
                        isCleaningYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <View style={styles.acFieldStarRatingColumnFirst}>
                  <TouchableOpacity onPress={handleBlanketRedPress}>
                    <Image
                      source={
                        isBlanketRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnSecond}>
                  <TouchableOpacity onPress={handleBlanketBluePress}>
                    <Image
                      source={
                        isBlanketBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBlanketBluePress}>
                    <Image
                      source={
                        isBlanketBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnThird}>
                  <TouchableOpacity onPress={handleBlanketYellowPress}>
                    <Image
                      source={
                        isBlanketYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBlanketYellowPress}>
                    <Image
                      source={
                        isBlanketYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBlanketYellowPress}>
                    <Image
                      source={
                        isBlanketYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <View style={styles.acFieldStarRatingColumnFirst}>
                  <TouchableOpacity onPress={handleBehaviourRedPress}>
                    <Image
                      source={
                        isBehaviourRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnSecond}>
                  <TouchableOpacity onPress={handleBehaviourBluePress}>
                    <Image
                      source={
                        isBehaviourBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehaviourBluePress}>
                    <Image
                      source={
                        isBehaviourBlueActive
                          ? require('../assets/images/blue_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.acFieldStarRatingColumnThird}>
                  <TouchableOpacity onPress={handleBehaviourYellowPress}>
                    <Image
                      source={
                        isBehaviourYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehaviourYellowPress}>
                    <Image
                      source={
                        isBehaviourYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehaviourYellowPress}>
                    <Image
                      source={
                        isBehaviourYellowActive
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={{width: 22, height: 22, marginVertical: 8}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
            <Text style={styles.SubmitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View> */}

      {/* <View style={styles.buttonBottomRowContainer}>
        <TouchableOpacity
          style={styles.BottomRowbutton}
          onPress={() =>
            navigation.navigate('TrainList', {
              name: name,
              token: token,
            })
          }>
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
      </View> */}

      {/* ********************************buttonBottomRowContainer end ***************************** */}
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // position: 'relative',
    backgroundColor: 'red',
  },
  headerContainer: {
    height: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#167fb9',
  },
  cardTextDate: {
    elevation: 10,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    backgroundColor: '#F8F9F9',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  trainCard: {
    position: 'relative',
    top: '1%',
    resizeMode: 'contain',
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
  coachNamePNRNo: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginTop: '7%',
    // height: '10%',
    backgroundColor: '#EFCBB4',
    borderRadius: 12,
  },
  coachNameText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    // width: '100%',
    // height: 30,
    marginHorizontal: '10%',
  },
  pnrNoText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    paddingVertical: 4,
    paddingLeft: 20,
    // paddingRight: '35%',
    // width: '100%',
    // height: 30,
  },
  verticalBar1: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },
  ratingVerticalBar: {
    marginHorizontal: 5,
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },

  ratingMainContainerdata: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ratingWithSubmitBox: {
    // position: 'absolute',
    // top: 200,
  },
  // main container heading
  ratingMainContainerheading: {
    // marginTop: -20,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ratingHeadingColumn: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  acFieldStarRatingColumnFirst: {
    marginLeft: 18,
  },
  particularFieldStarRatingColumnFirst: {
    flexDirection: 'row',
  },
  acFieldStarRatingColumnSecond: {
    flexDirection: 'row',
    marginLeft: 35,
  },
  acFieldStarRatingColumnThird: {
    flexDirection: 'row',
    marginLeft: 35,
  },
  SubmitButton: {
    height: 48,
    borderWidth: 2,
    borderColor: '#ff8d3c',
    backgroundColor: '#ff8d3c',
    paddingTop: 6,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 120,
    marginTop: 10,
    // marginBottom: 100,
  },
  SubmitButtonText: {
    borderWidth: 2,

    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  buttonBottomRowContainer: {
    borderWidth: 2,
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
  BottomRowbutton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFCBB4',
    padding: 10,
    alignItems: 'center',
  },
});

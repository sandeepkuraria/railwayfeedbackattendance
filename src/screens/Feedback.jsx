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
  KeyboardAvoidingView,
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
  let trainDataFirstIndex = [];
  trainDataFirstIndex = trainData[0];

  console.log(
    'trainDataFirstIndex in feedback___________-------',
    trainDataFirstIndex,
  );
  //numeric value input in feedback start
  const [pnrNo, setPnrNo] = useState('');
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [coachButtons, setCoachButtons] = useState([]);
  const [description, setDescription] = useState('');
  const [mobile, setMobile] = useState('');

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

  useEffect(() => {
    if (data && data.coaches) {
      const coachNames = data.coaches.split(',');
      setCoachButtons(coachNames);
    }
  }, [data]);

  // const coachButtons = [
  //   'A1',
  //   'A2',
  //   'A3',
  //   'A4',
  //   'A5',
  //   'A1',
  //   'A2',
  //   'A3',
  //   'A4',
  //   'A5',
  // ];

  const handleCoachSelection = coach => {
    setSelectedCoach(coach);
  };

  const handlePnrInputChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');

    setPnrNo(numericInput);
  };
  const handleMobileInputChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');

    setMobile(numericInput);
  };

  //numeric value input in feedback end

  // **********************************************************************

  const handleSubmit = async () => {
    if (pnrNo.length !== 10) {
      Alert.alert('Please ensure PNR number is exactly 10 digits');
      return;
    }
    if (mobile.length !== 10) {
      Alert.alert('Please ensure Mobile number is exactly 10 digits');
      return;
    }

    if (
      acFieldValue === 0 ||
      cleaningFieldValue === 0 ||
      blanketFieldValue === 0 ||
      behaviourFieldValue === 0
    ) {
      Alert.alert('Please fill in all fields');
      return;
    }
    description === 0;
    console.log('PNR No:', pnrNo);
    console.log('AC Rating:', acFieldValue);
    console.log('Cleaning Rating:', cleaningFieldValue);
    console.log('Blanket Rating:', blanketFieldValue);
    console.log('Behaviour Rating:', behaviourFieldValue);
    console.log('description :', description);
    console.log('mobile :', mobile);

    try {
      await PostFeedbackApi(); // Call PostFeedbackApi function
      // Alert.alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      Alert.alert('Error submitting feedback');
    }
  };

  console.log('TRAINDATA IN FEEDBACK---', trainData[0]);
  const data = trainData[0];
  console.log('data in feedback', data.coaches, data.id);

  // useEffect(() => {}, []);

  //postFeedback API

  // const PostFeedbackApi = async () => {
  //   console.log('INSIDE api--', data.id, data.coaches);
  //   var myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  //   myHeaders.append(
  //     'Cookie',
  //     'ci_session=faa818cb1e047f52249efe5702e18ed8bfa8d0f3',
  //   );

  //   myHeaders.append('Authorization', `Bearer ${token}`);

  //   var urlencoded = new URLSearchParams();
  //   urlencoded.append('dutyId', data.id);
  //   urlencoded.append('coach', data.coaches);
  //   urlencoded.append('pnr', pnrNo);
  //   urlencoded.append('description', 'All Good');
  //   // urlencoded.append('rating', '5');
  //   urlencoded.append('feedback[AC]', acFieldValue);
  //   urlencoded.append('feedback[CLEANING]', cleaningFieldValue);
  //   urlencoded.append('feedback[BLANKET]', blanketFieldValue);
  //   urlencoded.append('feedback[BEHAVIOUR]', behaviourFieldValue);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: urlencoded,
  //     redirect: 'follow',
  //   };

  //   const res = await fetch(
  //     'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
  //     requestOptions,
  //   );

  //   const response = await res.json();

  //   if (response.status === true) {
  //     console.log(response.message);

  //     navigation.replace('TrainList', {
  //       name: response.data.name,
  //       token: response.token,
  //     });
  //   } else {
  //     Alert.alert(response.message);
  //     console.log(response);
  //   }

  //   //  .then(response => response.json())
  //   //   .then(result => console.log(result))
  //   //   .catch(error => console.log('error', error));
  // };

  //postFeedback API

  const PostFeedbackApi = async () => {
    console.log('INSIDE API FUNCTION');
    console.log(data.id);
    console.log(data.coaches);
    console.log(pnrNo);
    console.log(acFieldValue);
    console.log(cleaningFieldValue);
    var myHeaders = new Headers();

    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('dutyId', data.id);
    formdata.append('coach', data.coaches);
    formdata.append('pnr', pnrNo);
    formdata.append('description', 'All Good');
    formdata.append('feedback[AC]', 'Good');
    formdata.append('feedback[CLEANING]', 'bad');
    formdata.append('feedback[BLANKET]', 'average');
    formdata.append('feedback[BEHAVIOR]', 'poor');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const res = await fetch(
      'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
      requestOptions,
    );

    const response = await res.json();

    if (response.status === true) {
      Alert.alert(response.message);
      console.log(response);
      navigation.replace('TrainList', {
        name: name,
        token: token,
      });
    } else {
      Alert.alert(response.message);
      console.log(response);
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
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Hello, Mr. {name}</Text>
          </View>

          <View style={styles.cardTextDateHeading}>
            <Text style={styles.cardTextDate}>{getFormattedCurrentDate()}</Text>
          </View>

          {[trainDataFirstIndex].map((train, index) => (
            <View key={index}>
              {/* <View style={styles.trainCard}>
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
              </View> */}
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
                    {/* <Text style={styles.fromToText}>
                      <Text style={{fontWeight: 'bold'}}>From</Text>
                    </Text> */}
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
            </View>
          ))}

          <View style={styles.coachNamePNRNo}>
            <View>
              <Text style={styles.coachNameText}>{selectedCoach || 'A1'}</Text>
            </View>

            <View style={styles.verticalBar1}></View>

            <View>
              <TextInput
                style={styles.pnrNoText}
                placeholder="PNR No"
                placeholderTextColor="#808080"
                maxLength={10}
                keyboardType="numeric"
                value={pnrNo}
                onChangeText={handlePnrInputChange}
              />
            </View>
          </View>

          <View style={styles.coachButtonsContainer}>
            {/* <Text style={styles.label}>Select Coach:</Text> */}
            <View style={{}}>
              <View style={styles.scrollViewContainer}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={styles.scrollViewContent}
                  showsVerticalScrollIndicator={false}>
                  {coachButtons.map((coach, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.button,
                        selectedCoach === coach && styles.selectedButton,
                      ]}
                      onPress={() => handleCoachSelection(coach)}>
                      <Text style={styles.buttonText}>{coach}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.mobileNo}>
              <TextInput
                color="black"
                placeholder="Mobile No"
                placeholderTextColor="#808080"
                keyboardType="numeric"
                maxLength={10}
                style={styles.mobileNoText}
                onChangeText={handleMobileInputChange}
              />
            </View>
          </View>

          <View style={styles.ratingWithSubmitBox}>
            {/* *********Heading row start */}
            <View style={styles.ratingMainContainerheading}>
              <View>
                <Text style={styles.ratingHeadingColumn}>Particular</Text>
              </View>
              <View style={styles.ratingVerticalBarHeading}></View>

              <View style={styles.particularFieldStarRatingColumnFirst}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      paddingLeft: '2%',
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    1
                  </Text>
                </View>
                <View style={{marginVertical: '25%'}}>
                  <Image
                    source={require('../assets/images/red_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
              </View>
              <View style={styles.particularFieldStarRatingColumnFirst}>
                <Text
                  style={{
                    paddingLeft: '12%',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop: '2.5%',
                  }}>
                  2
                </Text>
                <View style={{marginVertical: '12%'}}>
                  <Image
                    source={require('../assets/images/blue_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
              </View>
              <View style={styles.particularFieldStarRatingColumnFirst}>
                <Text
                  style={{
                    paddingLeft: '12%',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop: '2.5%',
                  }}>
                  3
                </Text>
                <View style={{marginVertical: '12%'}}>
                  <Image
                    source={require('../assets/images/yellow_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
              </View>
            </View>
            {/* *********Heading row end */}
            {/* Horizontal orange line in ratings table start */}
            <View style={{borderWidth: 1, borderColor: 'orange'}} />
            {/* Horizontal orange line in ratings table end */}
            {/* Data table start */}
            <View style={styles.ratingMainContainerdata}>
              <View>
                <Text style={styles.ratingHeadingColumnData}>AC</Text>
                <Text style={styles.ratingHeadingColumnData}>CLEANING</Text>
                <Text style={styles.ratingHeadingColumnData}>BLANKET</Text>
                <Text style={styles.ratingHeadingColumnData}>BEHAVIOUR</Text>
              </View>

              <View style={styles.ratingVerticalBarData}></View>
              {/* Star rating box start */}
              <View
                style={{
                  flex: 1,
                  // borderWidth: 2,
                  alignItems: 'flex-start',
                }}>
                {/*first 5 star row for AC start  */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '4%',
                  }}>
                  <View style={styles.acFieldStarRatingColumnFirst}>
                    <TouchableOpacity onPress={handleACRedPress}>
                      <Image
                        source={
                          isACRedActive
                            ? require('../assets/images/red_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleACBluePress}>
                      <Image
                        source={
                          isACBlueActive
                            ? require('../assets/images/blue_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleACYellowPress}>
                      <Image
                        source={
                          isACYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleACYellowPress}>
                      <Image
                        source={
                          isACYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*first 5 star row for AC end  */}
                {/*second 5 star row for CLEANING start  */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '4%',
                  }}>
                  <View style={styles.acFieldStarRatingColumnFirst}>
                    <TouchableOpacity onPress={handleCleaningRedPress}>
                      <Image
                        source={
                          isCleaningRedActive
                            ? require('../assets/images/red_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCleaningBluePress}>
                      <Image
                        source={
                          isCleaningBlueActive
                            ? require('../assets/images/blue_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCleaningYellowPress}>
                      <Image
                        source={
                          isCleaningYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCleaningYellowPress}>
                      <Image
                        source={
                          isCleaningYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*second 5 star row for CLEANING end  */}
                {/*third 5 star row for BLANKET start  */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '4%',
                  }}>
                  <View style={styles.acFieldStarRatingColumnFirst}>
                    <TouchableOpacity onPress={handleBlanketRedPress}>
                      <Image
                        source={
                          isBlanketRedActive
                            ? require('../assets/images/red_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBlanketBluePress}>
                      <Image
                        source={
                          isBlanketBlueActive
                            ? require('../assets/images/blue_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBlanketYellowPress}>
                      <Image
                        source={
                          isBlanketYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBlanketYellowPress}>
                      <Image
                        source={
                          isBlanketYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*third 5 star row for BLANKET end  */}
                {/*fourth 5 star row for BEHAVIOUR start  */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '4%',
                  }}>
                  <View style={styles.acFieldStarRatingColumnFirst}>
                    <TouchableOpacity onPress={handleBehaviourRedPress}>
                      <Image
                        source={
                          isBehaviourRedActive
                            ? require('../assets/images/red_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBehaviourBluePress}>
                      <Image
                        source={
                          isBehaviourBlueActive
                            ? require('../assets/images/blue_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
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
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBehaviourYellowPress}>
                      <Image
                        source={
                          isBehaviourYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBehaviourYellowPress}>
                      <Image
                        source={
                          isBehaviourYellowActive
                            ? require('../assets/images/yellow_star.png')
                            : require('../assets/images/star.png')
                        }
                        style={{width: 22, height: 22}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*fourth 5 star row for BEHAVIOUR start  */}
              </View>
              {/* Star rating box end */}
            </View>
            {/* Data table end */}

            <View style={styles.card}>
              <TextInput
                multiline
                placeholder="Enter your description"
                placeholderTextColor={'black'}
                style={styles.input}
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </View>
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={handleSubmit}>
              <Text style={styles.SubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          {/* ********************************buttonBottomRowContainer end ***************************** */}
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={styles.buttonBottomRowContainer}>
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
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0,
    paddingTop: '1%',
    marginBottom: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#efcbb4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#167fb9',
  },
  trainCard: {
    flex: 2,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    borderBottomEndRadius: 70,
    borderBottomStartRadius: 70,
    backgroundColor: '#F8F9F9',
  },
  cardTextDateHeading: {
    flex: 1,
    marginBottom: '1%',
    elevation: 10,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    backgroundColor: '#F8F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
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
  coachNamePNRNo: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#EFCBB4',
    borderRadius: 12,
  },
  coachNameText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: '10%',
  },
  pnrNoText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    paddingVertical: 4,
    paddingLeft: 20,
  },
  mobileNoText: {
    color: 'black',
    fontSize: 18,
    // paddingLeft: 20,
  },
  verticalBar1: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },
  ratingVerticalBarHeading: {
    borderLeftWidth: 2,
    borderColor: 'orange',
    marginLeft: '11%',
  },
  ratingVerticalBarData: {
    borderLeftWidth: 2,
    borderColor: 'orange',
    marginLeft: '6%',
  },

  ratingMainContainerdata: {
    flexDirection: 'row',

    justifyContent: 'flex-start',
    marginHorizontal: '3%',
  },

  card: {
    flex: 0,
    backgroundColor: '#EFCBB4',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 16,
  },
  input: {
    color: 'black',
    flex: 0,
    height: 100,
    borderColor: 'orange',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  ratingWithSubmitBox: {
    marginTop: '8%',
    flex: 6,
  },
  ratingMainContainerheading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: '3%',
  },
  ratingHeadingColumn: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: '9%',
  },
  ratingHeadingColumnData: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    marginVertical: '9%',
  },
  acFieldStarRatingColumnFirst: {
    marginLeft: '8%',
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
    flex: 1,
    // borderWidth: 1,
    marginTop: '5%',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8d3c',
    marginHorizontal: '35%',
    borderRadius: 10,
    paddingVertical: '1%',
  },
  SubmitButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
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
    width: 30,
    height: 30,
  },
  verticalBar: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },
  BottomRowbutton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFCBB4',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coachButtonsContainer: {
    marginTop: '2%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mobileNo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    maxHeight: '85%',
  },
  // label: {
  //   fontSize: 16,
  //   marginBottom: 10,
  // },
  scrollViewContainer: {
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    maxHeight: '85%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#ff8d3c',
    // backgroundColor: '#EFCBB4',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

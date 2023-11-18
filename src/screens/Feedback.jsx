import React, {useState, useEffect, useContext} from 'react';
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
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
// import {Rating} from 'react-native-ratings';
// import LinearGradient from 'react-native-linear-gradient';
// import {RadioButton} from 'react-native-paper';
// import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
// import Icon from 'react-native-vector-icons/Octicons';
// import StarRating from 'react-native-star-rating';
// import Logout from '../components/Logout';
import BottomHomeListButton from '../components/BottomHomeListButton';
import Header from '../components/Header';
// import {RadioButton} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icon from 'react-native-vector-icons/Feather';
import {RadioButton} from 'react-native-paper';
import {TrainListContext} from '../context/TrainListContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/AuthContext';
import {FeedbackContext} from '../context/FeedbackContext';

const Feedback = ({route}) => {
  const {token, getToken, name, pic} = useContext(AuthContext);
  const {trainData, trainDataFirstIndex, upcomingDutiesApi} =
    useContext(TrainListContext);

  const {
    selectedCoach,
    pnrNo,
    description,
    linenServiceRating,
    mobile,
    bedrollProvided,
    linenItemsProvided,
    freshLinenItems,
    behaviors_of_attender,
    feelingSafe,
    coachB,
    PostFeedbackApi,
    setBehaviors_of_attender,
    setFeelingSafe,
    setFreshLinenItems,
    setLinenItemsProvided,
    setBedrollProvided,
    setMobile,
    setLinenServiceRating,
    setDescription,
    setPnrNo,
    setSelectedCoach,
    setCoachB,
    isLoading,
    setIsLoading,
  } = useContext(FeedbackContext);

  const navigation = useNavigation();
  const [coachButtons, setCoachButtons] = useState([]);
  console.log(selectedCoach !== '', 'sb', selectedCoach);
  // const [loading,setIsLoading] = useState([]);
  // const name = route.params.name;
  // const pic = route.params.pic;
  // const token = route.params.token;
  // const coachB = route.params.coachB;
  // const trainData = route.params.trainData;
  // let trainDataFirstIndex = [];
  // trainDataFirstIndex = trainData[0];

  // console.log(
  //   'trainDataFirstIndex in feedback___________-------',
  //   trainDataFirstIndex,
  // );

  //numeric value input in feedback start
  // const [pnrNo, setPnrNo] = useState('');
  // const [selectedCoach, setSelectedCoach] = useState(coachB);

  // const [description, setDescription] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [bedrollProvided, setBedrollProvided] = useState('');
  // const [linenItemsProvided, setLinenItemsProvided] = useState('');
  // const [freshLinenItems, setFreshLinenItems] = useState('');
  // const [feelingSafe, setFeelingSafe] = useState('');
  // const [behaviors_of_attender, setBehaviors_of_attender] = useState(0);
  // const [linenServiceRating, setLinenServiceRating] = useState(0);
  // const [attenderBehavior, setAttenderBehavior] = useState('yes');
  // const [ratingLinenService, setRatingLinenService] = useState('yes');

  const handleRadioButtonChange = (field, value) => {
    switch (field) {
      case 'bedrollProvided':
        setBedrollProvided(value);
        break;
      case 'linenItemsProvided':
        setLinenItemsProvided(value);
        break;
      case 'freshLinenItems':
        setFreshLinenItems(value);
        break;
      case 'feelingSafe':
        setFeelingSafe(value);
        break;
      case 'attenderBehavior':
        setAttenderBehavior(value);
        break;
      case 'ratingLinenService':
        setRatingLinenService(value);
        break;
      default:
        break;
    }
  };

  const [IsBehavioursYellow1Active, setIsBehavioursYellow1Active] =
    useState(false);
  const [IsBehavioursYellow2Active, setIsBehavioursYellow2Active] =
    useState(false);
  const [IsBehavioursYellow3Active, setIsBehavioursYellow3Active] =
    useState(false);
  const [IsBehavioursYellow4Active, setIsBehavioursYellow4Active] =
    useState(false);
  const [IsBehavioursYellow5Active, setIsBehavioursYellow5Active] =
    useState(false);

  const [IsLinenServiceYellow1Active, setLinenServiceYellow1Active] =
    useState(false);
  const [IsLinenServiceYellow2Active, setLinenServiceYellow2Active] =
    useState(false);
  const [IsLinenServiceYellow3Active, setLinenServiceYellow3Active] =
    useState(false);
  const [IsLinenServiceYellow4Active, setLinenServiceYellow4Active] =
    useState(false);
  const [IsLinenServiceYellow5Active, setLinenServiceYellow5Active] =
    useState(false);

  // const [isACRedActive, setIsACRedActive] = useState(false);
  // const [isACBlueActive, setIsACBlueActive] = useState(false);
  // const [isACYellowActive, setIsACYellowActive] = useState(false);

  // const [isCleaningRedActive, setIsCleaningRedActive] = useState(false);
  // const [isCleaningBlueActive, setIsCleaningBlueActive] = useState(false);
  // const [isCleaningYellowActive, setIsCleaningYellowActive] = useState(false);

  // const [isBlanketRedActive, setIsBlanketRedActive] = useState(false);
  // const [isBlanketBlueActive, setIsBlanketBlueActive] = useState(false);
  // const [isBlanketYellowActive, setIsBlanketYellowActive] = useState(false);

  // const [isBehaviourRedActive, setIsBehaviourRedActive] = useState(false);
  // const [isBehaviourBlueActive, setIsBehaviourBlueActive] = useState(false);
  // const [isBehaviourYellowActive, setIsBehaviourYellowActive] = useState(false);

  // const [acFieldValue, setAcFieldValue] = useState(0);
  // const [cleaningFieldValue, setCleaningFieldValue] = useState(0);
  // const [blanketFieldValue, setBlanketFieldValue] = useState(0);
  // const [behaviourFieldValue, setBehaviourFieldValue] = useState(0);

  const handleBehavioursYellowPress1 = () => {
    setIsBehavioursYellow5Active(false);
    setIsBehavioursYellow4Active(false);
    setIsBehavioursYellow3Active(false);
    setIsBehavioursYellow2Active(false);
    setIsBehavioursYellow1Active(true);
    setBehaviors_of_attender(1); // Set Behaviors_of_attender field heading value to 1
    console.log('Behaviors_of_attender Rating:', 1);
  };
  const handleBehavioursYellowPress2 = () => {
    setIsBehavioursYellow5Active(false);
    setIsBehavioursYellow4Active(false);
    setIsBehavioursYellow3Active(false);
    setIsBehavioursYellow2Active(true);
    setIsBehavioursYellow1Active(true);
    setBehaviors_of_attender(2); // Set Behaviors_of_attender field heading value to 1
    console.log('Behaviors_of_attender Rating:', 2);
  };
  const handleBehavioursYellowPress3 = () => {
    setIsBehavioursYellow5Active(false);
    setIsBehavioursYellow4Active(false);
    setIsBehavioursYellow3Active(true);
    setIsBehavioursYellow2Active(true);
    setIsBehavioursYellow1Active(true);
    setBehaviors_of_attender(3); // Set Behaviors_of_attender field heading value to 1
    console.log('Behaviors_of_attender Rating:', 3);
  };
  const handleBehavioursYellowPress4 = () => {
    setIsBehavioursYellow5Active(false);
    setIsBehavioursYellow4Active(true);
    setIsBehavioursYellow3Active(true);
    setIsBehavioursYellow2Active(true);
    setIsBehavioursYellow1Active(true);
    setBehaviors_of_attender(4); // Set Behaviors_of_attender field heading value to 1
    console.log('Behaviors_of_attender Rating:', 4);
  };
  const handleBehavioursYellowPress5 = () => {
    setIsBehavioursYellow5Active(true);
    setIsBehavioursYellow4Active(true);
    setIsBehavioursYellow3Active(true);
    setIsBehavioursYellow2Active(true);
    setIsBehavioursYellow1Active(true);
    setBehaviors_of_attender(5); // Set Behaviors_of_attender field heading value to 1
    console.log('Behaviors_of_attender Rating:', 5);
  };

  const handleLinenServiceRating1 = () => {
    setLinenServiceYellow5Active(false);
    setLinenServiceYellow4Active(false);
    setLinenServiceYellow3Active(false);
    setLinenServiceYellow2Active(false);
    setLinenServiceYellow1Active(true);
    setLinenServiceRating(1); // Set LinenServiceRating field heading value to 1
    console.log('LinenServiceRating Rating:', 1);
  };
  const handleLinenServiceRating2 = () => {
    setLinenServiceYellow5Active(false);
    setLinenServiceYellow4Active(false);
    setLinenServiceYellow3Active(false);
    setLinenServiceYellow2Active(true);
    setLinenServiceYellow1Active(true);
    setLinenServiceRating(2); // Set LinenServiceRating field heading value to 2
    console.log('LinenServiceRating Rating:', 2);
  };
  const handleLinenServiceRating3 = () => {
    setLinenServiceYellow5Active(false);
    setLinenServiceYellow4Active(false);
    setLinenServiceYellow3Active(true);
    setLinenServiceYellow2Active(true);
    setLinenServiceYellow1Active(true);
    setLinenServiceRating(3); // Set LinenServiceRating field heading value to 3
    console.log('LinenServiceRating Rating:', 3);
  };
  const handleLinenServiceRating4 = () => {
    setLinenServiceYellow5Active(false);
    setLinenServiceYellow4Active(true);
    setLinenServiceYellow3Active(true);
    setLinenServiceYellow2Active(true);
    setLinenServiceYellow1Active(true);
    setLinenServiceRating(4); // Set LinenServiceRating field heading value to 4
    console.log('LinenServiceRating Rating:', 4);
  };
  const handleLinenServiceRating5 = () => {
    setLinenServiceYellow5Active(true);
    setLinenServiceYellow4Active(true);
    setLinenServiceYellow3Active(true);
    setLinenServiceYellow2Active(true);
    setLinenServiceYellow1Active(true);
    setLinenServiceRating(5); // Set LinenServiceRating field heading value to 5
    console.log('LinenServiceRating Rating:', 5);
  };

  // **************************AC start***************************************
  // const handleACRedPress = () => {
  //   setIsACRedActive(true);
  //   setIsACBlueActive(false);
  //   setIsACYellowActive(false);
  //   setAcFieldValue(1); // Set AC field heading value to 1
  //   console.log('AC Value:', 1);
  // };
  // const handleACBluePress = () => {
  //   setIsACRedActive(false);
  //   setIsACBlueActive(true);
  //   setIsACYellowActive(false);
  //   setAcFieldValue(2); // Set AC field heading value to 2
  //   console.log('AC Value:', 2);
  // };
  // const handleACYellowPress = () => {
  //   setIsACRedActive(false);
  //   setIsACBlueActive(false);
  //   setIsACYellowActive(true);
  //   setAcFieldValue(3); // Set AC field heading value to 3
  //   console.log('AC Value:', 3);
  // };
  // **************************AC end***************************************
  //  ****************************Cleaning Start*******************************
  // const handleCleaningRedPress = () => {
  //   setIsCleaningRedActive(true);
  //   setIsCleaningBlueActive(false);
  //   setIsCleaningYellowActive(false);
  //   setCleaningFieldValue(1); // Set CLEANING field heading value to 1
  //   console.log('Cleaning Value:', 1);
  // };
  // const handleCleaningBluePress = () => {
  //   setIsCleaningRedActive(false);
  //   setIsCleaningBlueActive(true);
  //   setIsCleaningYellowActive(false);
  //   setCleaningFieldValue(2); // Set CLEANING field heading value to 2
  //   console.log('Cleaning Value:', 2);
  // };
  // const handleCleaningYellowPress = () => {
  //   setIsCleaningRedActive(false);
  //   setIsCleaningBlueActive(false);
  //   setIsCleaningYellowActive(true);
  //   setCleaningFieldValue(3); // Set CLEANING field heading value to 3
  //   console.log('Cleaning Value:', 3);
  // };
  // **************************************************
  // const handleBlanketRedPress = () => {
  //   setIsBlanketRedActive(true);
  //   setIsBlanketBlueActive(false);
  //   setIsBlanketYellowActive(false);
  //   setBlanketFieldValue(1); // Set BLANKET field heading value to 1
  //   console.log('Blanket Value:', 1);
  // };
  // const handleBlanketBluePress = () => {
  //   setIsBlanketRedActive(false);
  //   setIsBlanketBlueActive(true);
  //   setIsBlanketYellowActive(false);
  //   setBlanketFieldValue(2); // Set BLANKET field heading value to 2
  //   console.log('Blanket Value:', 2);
  // };
  // const handleBlanketYellowPress = () => {
  //   setIsBlanketRedActive(false);
  //   setIsBlanketBlueActive(false);
  //   setIsBlanketYellowActive(true);
  //   setBlanketFieldValue(3); // Set BLANKET field heading value to 3
  //   console.log(' Blanket Value:', 3);
  // };
  // *****************************************************************************
  // const handleBehaviourRedPress = () => {
  //   setIsBehaviourRedActive(true);
  //   setIsBehaviourBlueActive(false);
  //   setIsBehaviourYellowActive(false);
  //   setBehaviourFieldValue(1); // Set BEHAVIOUR field heading value to 1
  //   console.log('Behaviour Value:', 1);
  // };
  // const handleBehaviourBluePress = () => {
  //   setIsBehaviourRedActive(false);
  //   setIsBehaviourBlueActive(true);
  //   setIsBehaviourYellowActive(false);
  //   setBehaviourFieldValue(2); // Set BEHAVIOUR field heading value to 2
  //   console.log('Behaviour Value:', 2);
  // };
  // const handleBehaviourYellowPress = () => {
  //   setIsBehaviourRedActive(false);
  //   setIsBehaviourBlueActive(false);
  //   setIsBehaviourYellowActive(true);
  //   setBehaviourFieldValue(3); // Set BEHAVIOUR field heading value to 3
  //   console.log('Behaviour Value:', 3);
  // };

  useEffect(() => {
    if (data && data.coaches) {
      const coachNames = data.coaches.split(',');
      setCoachButtons(coachNames);
    }
    console.log(
      'data.coaches in feedback page **************************',
      data.coaches.split(','),
    );
  }, [data]);

  const handleCoachSelection = coach => {
    console.log('INSIDE HANDLE COACH SELECTION---', coach);
    setSelectedCoach(coach);
  };

  const handlePnrInputChange = input => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setPnrNo(numericInput);
  };

  const handleMobileInputChange = input => {
    const numericInput2 = input.replace(/[^0-9]/g, '');
    setMobile(numericInput2);
  };

  //numeric value input in feedback end

  // **********************************************************************

  console.log('COACHB----', coachB);
  const handleSubmit = async () => {
    setIsLoading(true);
    if (
      pnrNo.length !== 10 ||
      mobile.length !== 10 ||
      bedrollProvided === '' ||
      linenItemsProvided === '' ||
      freshLinenItems === '' ||
      feelingSafe === '' ||
      behaviors_of_attender === 0 ||
      linenServiceRating === 0 ||
      selectedCoach !== ''
      //  || rating === 0
    ) {
    } else {
    }
    if (pnrNo.length !== 10) {
      Alert.alert('Please ensure PNR number is exactly 10 digits');
      return;
    }
    if (mobile.length !== 10) {
      Alert.alert('Please ensure Mobile number is exactly 10 digits');
      return;
    }

    if (
      bedrollProvided === '' ||
      linenItemsProvided === '' ||
      freshLinenItems === '' ||
      feelingSafe === ''
    ) {
      Alert.alert('Please fill in all fields');
      return;
    }

    console.log('PNR No:', pnrNo);
    console.log('bedrollProvided :', bedrollProvided);
    console.log('linenItemsProvided :', linenItemsProvided);
    console.log('freshLinenItems :', freshLinenItems);
    console.log('feelingSafe :', feelingSafe);
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

  // console.log('TRAINDATA IN FEEDBACK---', trainData[0]);
  const data = trainData[0];
  // console.log('data in feedback', data.coaches, data.id);

  // const PostFeedbackApi = async () => {
  //   console.log('INSIDE PostFeedbackApi API FUNCTION');
  //   console.log(data.id);
  //   console.log(data.coaches);
  //   console.log(pnrNo);
  //   console.log(acFieldValue);
  //   console.log(cleaningFieldValue);
  //   console.log(selectedCoach);
  //   var myHeaders = new Headers();

  //   myHeaders.append('Authorization', `Bearer ${token}`);

  //   var formdata = new FormData();
  //   formdata.append('dutyId', data.id);
  //   formdata.append('coach', selectedCoach);
  //   formdata.append('pnr', pnrNo);
  //   formdata.append('mobile', mobile);
  //   formdata.append('description', description);
  //   formdata.append('feedback[AC]', acFieldValue);
  //   formdata.append('feedback[CLEANING]', cleaningFieldValue);
  //   formdata.append('feedback[BLANKET]', blanketFieldValue);
  //   formdata.append('feedback[BEHAVIOR]', behaviourFieldValue);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   const res = await fetch(
  //     'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
  //     requestOptions,
  //   );

  //   const response = await res.json();

  //   if (response.status === true) {
  //     Alert.alert(response.message);
  //     setIsLoading(false);

  //     console.log(response);
  //     navigation.replace('TrainList', {
  //       name: name,
  //       token: token,
  //       pic: pic,
  //     });
  //   } else {
  //     setIsLoading(false);

  //     Alert.alert(response.message);
  //     console.log(response);
  //   }

  //   //  .then(response => response.json())
  //   //   .then(result => console.log(result))
  //   //   .catch(error => console.log('error', error));
  // };

  const CustomRadioButton = ({label, value, onSelect, isChecked}) => (
    <TouchableOpacity onPress={() => onSelect(value)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          // borderWidth: 1,
        }}>
        <RadioButton.Android
          value={value}
          status={isChecked ? 'checked' : 'unchecked'}
          color="red"
          uncheckedColor="green"
          onPress={() => onSelect(value)}
        />
        <Text style={{fontSize: 8, color: 'black'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Header name={name} token={token} pic={pic} />

          <View style={styles.coachButtonsContainer}>
            <View style={styles.coachButtons}>
              {coachButtons.map((coach, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    (selectedCoach === coach ||
                      (index === 0 && !selectedCoach)) &&
                      styles.selectedButton, // Added condition for 0th index
                  ]}
                  onPress={() => handleCoachSelection(coach)}>
                  <Text style={styles.buttonText}>{coach}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.coachNamePNRNo}>
            <View>
              <Text style={styles.coachNameText1}>
                {(selectedCoach && selectedCoach) || coachButtons[0]}
              </Text>
            </View>

            <View style={styles.pnrNo}>
              <TextInput
                style={styles.pnrNoText}
                placeholder="PNR NO"
                placeholderTextColor="#808080"
                maxLength={10}
                keyboardType="numeric"
                value={pnrNo}
                onChangeText={handlePnrInputChange}
              />
            </View>
          </View>

          <View style={styles.mobileNoContainer}>
            <View style={styles.mobileIconView}>
              <Icon name="phone" size={24} color="black" />
            </View>

            <View style={styles.mobileNo}>
              <TextInput
                style={styles.mobileNoText}
                placeholder="XXXXXXXXXX"
                placeholderTextColor="#808080"
                maxLength={10}
                keyboardType="numeric"
                color="black"
                value={mobile}
                onChangeText={handleMobileInputChange}
              />
            </View>
          </View>

          <View style={styles.ratingWithSubmitBox}>
            {/* <View style={styles.table}>
              <View style={styles.headingRow}>
                <View style={styles.headingColumnParticular}>
                  <Text style={styles.headingText}>Particular</Text>
                </View>
                <View style={styles.headingColumn2}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    1
                  </Text>
                  <Image
                    source={require('../assets/images/red_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
                <View style={styles.headingColumn3}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    2
                  </Text>
                  <Image
                    source={require('../assets/images/blue_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
                <View style={styles.headingColumn4}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    3
                  </Text>
                  <Image
                    source={require('../assets/images/yellow_star.png')}
                    style={{width: 22, height: 22}}
                  />
                </View>
              </View>

              <View style={styles.acRow1}>
                <View style={styles.headingColumn1}>
                  <Text style={styles.headingTextdata}>AC</Text>
                </View>
                <View style={styles.acRow1cell1}>
                  <TouchableOpacity onPress={handleACRedPress}>
                    <Image
                      source={
                        isACRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.acRow1cell2}>
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
                <View style={styles.acRow1cell3}>
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

              <View style={styles.cleaningRow2}>
                <View style={styles.headingColumn1}>
                  <Text style={styles.headingTextdata}>CLEANING</Text>
                </View>
                <View style={styles.cleaningRow2cell1}>
                  <TouchableOpacity onPress={handleCleaningRedPress}>
                    <Image
                      source={
                        isCleaningRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.cleaningRow2cell2}>
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
                <View style={styles.cleaningRow2cell3}>
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

              <View style={styles.blanketRow3}>
                <View style={styles.headingColumn1}>
                  <Text style={styles.headingTextdata}>BLANKET</Text>
                </View>
                <View style={styles.blanketRow3Cell1}>
                  <TouchableOpacity onPress={handleBlanketRedPress}>
                    <Image
                      source={
                        isBlanketRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.blanketRow3Cell2}>
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
                <View style={styles.blanketRow3Cell3}>
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

              <View style={styles.behaviourRow4}>
                <View style={styles.headingColumn1}>
                  <Text style={styles.headingTextdata}>BEHAVIOUR</Text>
                </View>
                <View style={styles.headingRow4Cell1}>
                  <TouchableOpacity onPress={handleBehaviourRedPress}>
                    <Image
                      source={
                        isBehaviourRedActive
                          ? require('../assets/images/red_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.headingRow4Cell2}>
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
                <View style={styles.headingRow4Cell3}>
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
            </View> */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                borderWidth: 1,
                // marginHorizontal: 10,
                borderRadius: 6,
                borderColor: '#EFCBB4',
                marginBottom: '2%',
              }}>
              <View style={{}}>
                <Text style={styles.feedbackList}>
                  Bedroll Provided on Time
                </Text>
                <RadioButton.Group
                  onValueChange={value =>
                    handleRadioButtonChange('bedrollProvided', value)
                  }
                  value={bedrollProvided}>
                  <View style={styles.radioButtons}>
                    <CustomRadioButton
                      label="Yes"
                      value="yes"
                      onSelect={handleRadioButtonChange}
                      isChecked={bedrollProvided === 'yes'}
                    />
                    <View style={{}} />
                    <CustomRadioButton
                      label="No"
                      value="no"
                      labelStyle={{}}
                      onSelect={handleRadioButtonChange}
                      isChecked={bedrollProvided === 'no'}
                    />
                  </View>
                </RadioButton.Group>
                <Text style={styles.feedbackList}>
                  All Linen Items Provided in Bedroll
                </Text>
                <RadioButton.Group
                  onValueChange={value =>
                    handleRadioButtonChange('linenItemsProvided', value)
                  }
                  value={linenItemsProvided}>
                  <View style={styles.radioButtons}>
                    <CustomRadioButton
                      label="Yes"
                      value="yes"
                      onSelect={handleRadioButtonChange}
                      isChecked={linenItemsProvided === 'yes'}
                    />
                    <View style={{}} />
                    <CustomRadioButton
                      label="No"
                      value="no"
                      labelStyle={{}}
                      onSelect={handleRadioButtonChange}
                      isChecked={linenItemsProvided === 'no'}
                    />
                  </View>
                </RadioButton.Group>
                <Text style={styles.feedbackList}>
                  All Linen Items Provided Fresh/Un-Used
                </Text>
                <RadioButton.Group
                  onValueChange={value =>
                    handleRadioButtonChange('freshLinenItems', value)
                  }
                  value={freshLinenItems}>
                  <View style={styles.radioButtons}>
                    <CustomRadioButton
                      label="Yes"
                      value="yes"
                      onSelect={handleRadioButtonChange}
                      isChecked={freshLinenItems === 'yes'}
                    />
                    <View style={{}} />
                    <CustomRadioButton
                      label="No"
                      value="no"
                      labelStyle={{}}
                      onSelect={handleRadioButtonChange}
                      isChecked={freshLinenItems === 'no'}
                    />
                  </View>
                </RadioButton.Group>
                <Text style={styles.feedbackList}>
                  Are you feeling safe in your journey
                </Text>
                <RadioButton.Group
                  onValueChange={value =>
                    handleRadioButtonChange('feelingSafe', value)
                  }
                  value={feelingSafe}>
                  <View style={styles.radioButtons}>
                    <CustomRadioButton
                      label="Yes"
                      value="yes"
                      onSelect={handleRadioButtonChange}
                      isChecked={feelingSafe === 'yes'}
                    />
                    <View style={{}} />
                    <CustomRadioButton
                      label="No"
                      value="no"
                      labelStyle={{}}
                      onSelect={handleRadioButtonChange}
                      isChecked={feelingSafe === 'no'}
                    />
                  </View>
                </RadioButton.Group>
                <Text style={styles.feedbackList}>
                  Behaviours/Response of Attender
                </Text>
                <View style={styles.acRow1cell1}>
                  <TouchableOpacity onPress={handleBehavioursYellowPress1}>
                    <Image
                      source={
                        IsBehavioursYellow1Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehavioursYellowPress2}>
                    <Image
                      source={
                        IsBehavioursYellow2Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehavioursYellowPress3}>
                    <Image
                      source={
                        IsBehavioursYellow3Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehavioursYellowPress4}>
                    <Image
                      source={
                        IsBehavioursYellow4Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleBehavioursYellowPress5}>
                    <Image
                      source={
                        IsBehavioursYellow5Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.feedbackList}>
                  Your Rating for Linen Service
                </Text>
                <View style={styles.acRow1cell1}>
                  <TouchableOpacity onPress={handleLinenServiceRating1}>
                    <Image
                      source={
                        IsLinenServiceYellow1Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLinenServiceRating2}>
                    <Image
                      source={
                        IsLinenServiceYellow2Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLinenServiceRating3}>
                    <Image
                      source={
                        IsLinenServiceYellow3Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLinenServiceRating4}>
                    <Image
                      source={
                        IsLinenServiceYellow4Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLinenServiceRating5}>
                    <Image
                      source={
                        IsLinenServiceYellow5Active
                          ? require('../assets/images/yellow_star.png')
                          : require('../assets/images/star.png')
                      }
                      style={styles.redStarSize}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View>
                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('bedrollProvided', value)
                    }
                    value={bedrollProvided}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item
                        label="Yes"
                        value="yes"
                        color="red"
                        labelStyle={{fontSize: 10}}
                        uncheckedColor="green"
                        size={10}
                      />
                      <View style={{marginLeft: '-20%'}} />
                      <RadioButton.Item
                        label="No"
                        value="no"
                        color="blue"
                        labelStyle={{fontSize: 10}}
                        uncheckedColor="green"
                        size={10}
                      />
                    </View>
                  </RadioButton.Group>
                </View>

                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('linenItemsProvided', value)
                    }
                    value={linenItemsProvided}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item label="Yes" value="yes" color="red" />
                      <RadioButton.Item label="No" value="no" color="blue" />
                    </View>
                  </RadioButton.Group>
                </View>

                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('freshLinenItems', value)
                    }
                    value={freshLinenItems}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item label="Yes" value="yes" color="red" />
                      <RadioButton.Item label="No" value="no" color="blue" />
                    </View>
                  </RadioButton.Group>
                </View>

                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('attenderBehavior', value)
                    }
                    value={bedrollProvided}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item label="Yes" value="yes" color="red" />
                      <RadioButton.Item label="No" value="no" color="blue" />
                    </View>
                  </RadioButton.Group>
                </View>

                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('feelingSafe', value)
                    }
                    value={bedrollProvided}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item label="Yes" value="yes" color="red" />
                      <RadioButton.Item label="No" value="no" color="blue" />
                    </View>
                  </RadioButton.Group>
                </View>

                <View>
                  <RadioButton.Group
                    onValueChange={value =>
                      handleRadioButtonChange('ratingLinenService', value)
                    }
                    value={bedrollProvided}>
                    <View style={styles.radioButtons}>
                      <RadioButton.Item label="Yes" value="yes" color="red" />
                      <RadioButton.Item label="No" value="no" color="blue" />
                    </View>
                  </RadioButton.Group>
                </View>
              </View> */}
            </View>

            <View style={styles.card}>
              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholder="Enter your Feedback"
                placeholderTextColor={'black'}
                style={styles.input}
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.SubmitButton,
                isLoading && {backgroundColor: '#ccc'},
              ]}
              onPress={handleSubmit}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <Text style={styles.SubmitButtonText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* <Table /> */}
          {/* ********************************buttonBottomRowContainer end ***************************** */}
        </KeyboardAvoidingView>
      </ScrollView>

      <BottomHomeListButton name={name} token={token} pic={pic} />
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
  coachButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  coachNameText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: '9%',
  },
  coachNamePNRNo: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '26%',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coachNameText1: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: '15%',
    paddingVertical: '3%',
    backgroundColor: '#EFCBB4',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderRightWidth: 2,
    borderRightColor: 'orange',
  },
  pnrNo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#EFCBB4',
    paddingHorizontal: '15%',
    width: '100%',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  pnrNoText: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 4,
    marginHorizontal: '8%',
    width: '100%',
  },
  verticalBar1: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },

  mobileNoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '26%',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileIconView: {
    color: 'black',
    // fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: '15%',
    paddingVertical: '3.5%',
    backgroundColor: '#EFCBB4',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderRightWidth: 2,
    borderRightColor: 'orange',
  },
  mobileNo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#EFCBB4',
    paddingHorizontal: '6%',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: '3%',
  },
  mobileNoText: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 0,
    marginHorizontal: '8%',
  },

  card: {
    flex: 0,
    borderRadius: 6,
    shadowRadius: 2,
    margin: '0%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#EFCBB4',
    fontSize: 18,
    color: 'black',
    flex: 0,
    flexWrap: 'wrap',
    // marginBottom: '3%',
    borderRadius: 4,
  },

  ratingWithSubmitBox: {
    marginTop: '8%',
    flex: 6,
  },

  acRow: {
    borderTopWidth: 2,
    borderTopColor: '#EFCBB4',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cleaningRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginHorizontal: '3%',
  },
  blanketRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginHorizontal: '3%',
  },
  behaviourRow: {
    borderBottomWidth: 2,
    borderBottomColor: '#EFCBB4',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  SubmitButton: {
    flex: 1,
    marginTop: '1%',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8d3c',
    marginHorizontal: '32%',
    borderRadius: 10,
    paddingVertical: '2%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: '4.5%',
  },
  SubmitButtonText: {
    fontSize: 22,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ff8d3c',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  selectedButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ff8d3c',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  table: {
    borderWidth: 1,
    borderColor: '#EFCBB4',
    marginBottom: '1%',
    color: 'black',
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
  },
  headingRow: {
    flexDirection: 'row',
  },
  acRow1: {
    flexDirection: 'row',
  },
  cleaningRow2: {
    flexDirection: 'row',
  },
  blanketRow3: {
    flexDirection: 'row',
  },
  behaviourRow4: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
  },
  acRow1cell: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
  },
  acRow1cell1: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#EFCBB4',
  },
  acRow1cell2: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,

    borderColor: '#EFCBB4',
  },
  acRow1cell3: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,

    borderColor: '#EFCBB4',
  },

  cleaningRow2cell1: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  cleaningRow2cell2: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  cleaningRow2cell3: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  blanketRow3Cell1: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  blanketRow3Cell2: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  blanketRow3Cell3: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  headingRow4Cell1: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  headingRow4Cell2: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  headingRow4Cell3: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,

    borderColor: '#EFCBB4',
  },
  headingColumn1: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,

    borderColor: '#EFCBB4',
  },
  headingColumnParticular: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFCBB4',
  },
  headingColumn2: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  headingColumn3: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderLeftWidth: 1,
    borderColor: '#EFCBB4',
  },
  headingColumn4: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderLeftWidth: 1,
    borderColor: '#EFCBB4',
  },
  headingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  headingTextdata: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  redStarSize: {
    width: 22,
    height: 22,
  },
  feedbackList: {
    color: 'black',
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    // borderWidth: 1,

    width: '65%',
  },
});

import React, {useState} from 'react';
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

  return (
    <View style={styles.mainContainer}>
      {/* header view */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello, Mr. Ram</Text>
      </View>

      <View>
        {/* ************************Date and Time************* */}
        <View>
          <Text style={styles.cardTextDate}>
            {/* {formatDate(train.departureTime)} */}
            Friday, 26/10/2023
          </Text>
        </View>
      </View>

      <ScrollView>
        <View>
          <View
            style={[
              styles.trainCard,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '6%',
              },
            ]}>
            <Text style={styles.cardTextHeaders}>12121</Text>
            <Text style={styles.cardTextHeaders}>Mahakaushal</Text>
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
        </View>
        {/* ********************************coachNamePNRNo start ***************************** */}

        <View style={styles.coachNamePNRNo}>
          <View>
            <Text style={styles.coachNameText}>A1</Text>
          </View>
          <View style={styles.verticalBar1}></View>
          <View>
            <TextInput
              style={styles.pnrNoText}
              placeholder="PNR No"
              placeholderTextColor="black"
              maxLength={10} // Set the maximum length to 10
            />
          </View>
        </View>

        {/* ********************************coachNamePNRNo end ***************************** */}

        {/* start rating feedback start */}
        <View>
          {/* main heading ratingMainContainerheading start */}
          <View style={styles.ratingMainContainerheading}>
            <View>
              <Text style={styles.ratingHeadingColumn}>Particular</Text>
            </View>
            {/* 1 red_star */}
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
            {/* 2 blue_star */}
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
            {/* 3 yellow_star */}
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
          {/* main heading ratingMainContainerheading end */}
          {/* Horizontal orange bar */}
          <View style={{borderWidth: 1, borderColor: 'orange'}} />

          <View style={styles.ratingMainContainerdata}>
            {/* heading column start */}
            <View>
              <Text style={styles.ratingHeadingColumn}>AC</Text>
              <Text style={styles.ratingHeadingColumn}>CLEANING</Text>
              <Text style={styles.ratingHeadingColumn}>BLANKET</Text>
              <Text style={styles.ratingHeadingColumn}>BEHAVIOUR</Text>
            </View>
            {/* heading column end */}
            {/* vertical orange bar */}
            <View style={styles.ratingVerticalBar}></View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                {/* star rating data column and fields start */}

                {/* star rating acFieldStarRatingColumnFirst start */}
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
                {/* star rating acFieldStarRatingColumnFirst end */}
                {/* star rating acFieldStarRatingColumnSecond start */}
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
                {/* star rating acFieldStarRatingColumnSecond end */}
                {/* star rating acFieldStarRatingColumnThird start */}
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
                {/* star rating acFieldStarRatingColumnThird end */}
                {/* star rating data column and fields end */}
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                {/* star rating data column and fields start */}

                {/* star rating acFieldStarRatingColumnFirst start */}
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
                {/* star rating acFieldStarRatingColumnFirst end */}
                {/* star rating acFieldStarRatingColumnSecond start */}
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
                {/* star rating acFieldStarRatingColumnSecond end */}
                {/* star rating acFieldStarRatingColumnThird start */}
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
                {/* star rating acFieldStarRatingColumnThird end */}
                {/* star rating data column and fields end */}
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                {/* star rating data column and fields start */}

                {/* star rating acFieldStarRatingColumnFirst start */}
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
                {/* star rating acFieldStarRatingColumnFirst end */}
                {/* star rating acFieldStarRatingColumnSecond start */}
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
                {/* star rating acFieldStarRatingColumnSecond end */}
                {/* star rating acFieldStarRatingColumnThird start */}
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
                {/* star rating acFieldStarRatingColumnThird end */}
                {/* star rating data column and fields end */}
              </View>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                {/* star rating data column and fields start */}

                {/* star rating acFieldStarRatingColumnFirst start */}
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
                {/* star rating acFieldStarRatingColumnFirst end */}
                {/* star rating acFieldStarRatingColumnSecond start */}
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
                {/* star rating acFieldStarRatingColumnSecond end */}
                {/* star rating acFieldStarRatingColumnThird start */}
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
                {/* star rating acFieldStarRatingColumnThird end */}
                {/* star rating data column and fields end */}
              </View>
            </View>
          </View>
          {/* submit button */}
          <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
            <Text style={styles.SubmitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* ********************************buttonBottomRowContainer start ***************************** */}

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
      {/* ********************************buttonBottomRowContainer end ***************************** */}
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    position: 'relative',
    // backgroundColor: '#ff8d3c',
  },
  headerContainer: {
    height: 25,
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
    height: 25,
    marginBottom: 4,
    backgroundColor: '#F8F9F9',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
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
    // height: 170,
    // elevation: 20,
    // shadowColor: '#ff8d3c',
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // padding: 15,
    // borderBottomRadius: 10,
    // borderBottomEndRadius: 70,
    // borderBottomStartRadius: 70,
    // backgroundColor: '#F8F9F9',
  },
  cardTextHeaders: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'black',
    // fontSize: 20,
    // fontWeight: 'bold',
    // textAlign: 'center',
  },
  fromTo: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    // marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginHorizontal: -30,
  },
  fromToText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    // color: 'black',
    // fontSize: 20,
    // fontWeight: '400',
    // textAlign: 'center',
  },
  coachNamePNRNo: {
    flexDirection: 'row',
    marginTop: 38,
    height: 40,
    marginLeft: 30,
    marginBottom: 60,
  },

  coachNameText: {
    color: 'black',
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 9,
    fontSize: 20,
    // fontWeight: 'bold',
    backgroundColor: '#EFCBB4',
    textAlign: 'center',
    width: 50,
    height: 30,
  },
  pnrNoText: {
    // color: 'black',

    borderBottomRightRadius: 9,
    borderTopRightRadius: 9,
    fontSize: 20,
    // fontWeight: 'bold',
    backgroundColor: '#EFCBB4',
    textAlign: 'left',
    paddingVertical: 4,
    paddingLeft: 20,
    width: 250,
    height: 30,
  },
  verticalBar1: {
    height: 30,
    width: 2,
    backgroundColor: 'orange',
  },
  ratingVerticalBar: {
    marginHorizontal: 5,
    height: 180,
    width: 2,
    backgroundColor: 'orange',
  },

  ratingMainContainerdata: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ratingMainContainerheading: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ratingHeadingColumn: {
    fontSize: 20,
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
    marginTop: 20,
    marginBottom: 100,
  },
  SubmitButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
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
  BottomRowbutton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFCBB4',
    padding: 10,
    alignItems: 'center',
  },
});

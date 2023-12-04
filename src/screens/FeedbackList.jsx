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

const FeedbackList = ({route}) => {
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {feedbackList, setFeedbackList, isLoading, fetchFeedbackList} =
    useContext(FeedbackContext);

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
    fetchFeedbackList(dutyId);
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

  const FeedbackCard = ({item}) => (
    <View style={[styles.cardContainer]}>
      {/* <Text style={styles.cardText}>dutyId: {item.dutyId}</Text> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={styles.cardTextPNR}> {item.dutyId}</Text>
        <Text style={styles.cardTextPNR}> {item.pnr}</Text>
        <Text style={styles.cardTextCoach}> {item.coach}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={styles.cardTextMobile}>
          <View style={styles.mobileIconView}>
            <FontAwesomeIcon icon={faPhone} size={12} />
          </View>
          {'  '}
          {item.mobile}
        </Text>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>Bedroll Provided on Time</Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>
              {item.bedroll_provided_on_time}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>
            All linen items provided in bedroll:
          </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>
              {item.all_linen_items_provided_in_bedroll}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>
            All linen items provided fresh{' '}
          </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>
              {item.all_linen_items_provided_fresh}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>
            Are you feeling safe in journey{' '}
          </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>
              {item.are_you_feeling_safe_in_journey}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>Behaviors of attender </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>{item.behaviors_of_attender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainerDescription}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>Description </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNoDescription}>
            <Text style={styles.textBlack}>{item.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldTextContainer}>
          <Text style={styles.feedbackList}>Rating </Text>
        </View>
        <View style={styles.fieldInputContainer}>
          <View style={styles.radioYesNo}>
            <Text style={styles.textBlack}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View>
        <HeaderText />
      </View>

      {/* ************************Date and Time************* */}

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>
      {/* <Header /> */}
      {/* <Text style={{color: 'black'}}>FeedbackList</Text> */}

      <ScrollView style={{marginBottom: 40}}>
        <FlatList
          // horizontal
          data={feedbackList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={FeedbackCard}
        />
      </ScrollView>

      <BottomHomeListButton />
    </View>
  );
};

export default FeedbackList;

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

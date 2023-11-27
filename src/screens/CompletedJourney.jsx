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
import HeaderText from '../components/HeaderText';
import CurrentDate from '../components/CurrentDate';

const CompletedJourney = () => {
  const {token, getToken, name, pic} = useContext(AuthContext);

  const {trainData, trainDataFirstIndex, upcomingDutiesApi, coachB} =
    useContext(TrainListContext);

  const navigation = useNavigation();
  const [completedJourneys, setCompletedJourneys] = useState([]);

  useEffect(() => {
    // Fetch completed journey data from your API here

    const fetchCompletedJourneys = async () => {
      var myHeaders = new Headers();

      myHeaders.append('Authorization', `Bearer ${token}`); // Use the token from AuthContext

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      try {
        const res = await fetch(
          'https://railway.retinodes.com/api/v1/assignduty/completedduties',
          requestOptions,
        );

        const response = await res.json();

        if (res.ok) {
          setCompletedJourneys(response.data);
        } else {
          console.error(
            'Failed to fetch completed journeys:',
            response.message,
          );
        }
      } catch (error) {
        console.error('Error fetching completed journeys:', error);
      }
    };

    fetchCompletedJourneys();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.journeyItem}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
          }}>
          <Text style={styles.cardTextHeaders}>{item.train_no}</Text>
          <Text style={styles.cardTextHeaders}>{item.train_name}</Text>
        </View>

        <Text style={styles.cardTextDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <HeaderText />
      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>

      <ScrollView>
        <FlatList
          data={completedJourneys}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <BottomHomeListButton />
    </View>
  );
};

export default CompletedJourney;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  journeyItem: {
    // backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: '0.5%',
    // padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFCBB4',
    flex: 2,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#EFCBB4',
    shadowOffset: {width: 5, height: 100},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: '2%',
    backgroundColor: '#F8F9F9',
  },
  completedJourneysText: {
    color: 'black',
    fontSize: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#EFCBB4',
  },
  cardTextDate: {
    padding: 5,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTextHeaders: {
    padding: 5,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

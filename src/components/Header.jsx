import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import CurrentDate from './CurrentDate';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderText from './HeaderText';
import {AuthContext} from '../context/AuthContext';
import {TrainListContext} from '../context/TrainListContext';

const Header = () => {
  // const [trainDataFirstIndex, setTrainDataFirstIndex] = useState([]);

  const {token, name, pic} = useContext(AuthContext);
  const {trainData, trainDataFirstIndex} = useContext(TrainListContext);

  useEffect(() => {}, []);
  console.log(token, name, pic, trainData, trainDataFirstIndex);
  // ******************** upcoming duties API end *******************************

  console.log(trainData, '-_----traindata in Header Component');

  //   const storeData = async (key, value) => {
  //     try {
  //       await AsyncStorage.setItem(key, value);
  //       console.log(`Data stored with key ${key}`);
  //     } catch (e) {
  //       console.error(`Error storing data with key ${key}:`, e);
  //     }
  //   };

  // storeData('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...');

  return (
    <View>
      {/* name and logout button inside */}

      <View>
        <HeaderText name={name} pic={pic} />
      </View>

      {/* ************************Date and Time************* */}

      <View style={styles.cardTextDateHeading}>
        <CurrentDate />
      </View>

      <View>
        <ScrollView>
          {[trainDataFirstIndex].map((train, index) => (
            <View key={index}>
              {train && train.coaches ? (
                <View style={styles.trainCard}>
                  <View
                    style={{
                      // paddingTop: '1%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: '6%',
                    }}>
                    <Text style={styles.cardTextHeaders}>{train.train_no}</Text>
                    <Text style={styles.cardTextHeaders}>
                      {train.train_name}
                    </Text>
                  </View>
                  <View style={styles.fromTo}>
                    <View>
                      <Text style={styles.fromToText}>
                        {train.from_station}
                      </Text>
                      <Text style={styles.fromToText}>{train.start_time}</Text>
                    </View>
                    <Text
                      style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                      -
                    </Text>
                    <View>
                      <Text style={styles.fromToText}>{train.to_station}</Text>
                      <Text style={styles.fromToText}>{train.reach_time}</Text>
                    </View>
                    <Text
                      style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                      -
                    </Text>
                    <View>
                      <Text style={styles.fromToText}>
                        {train.return_station}
                      </Text>
                      <Text style={styles.fromToText}>{train.return_time}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: '50%',
                    padding: 10,
                  }}>
                  <Text style={{color: 'darkred', fontSize: 18}}>
                    No current journey!
                  </Text>
                </View>
              )}
              {/* <View style={styles.trainCard}>
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
                    <Text style={styles.fromToText}>{train.start_time}</Text>
                  </View>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                    -
                  </Text>
                  <View>
                    <Text style={styles.fromToText}>{train.to_station}</Text>
                    <Text style={styles.fromToText}>{train.reach_time}</Text>
                  </View>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                    -
                  </Text>
                  <View>
                    <Text style={styles.fromToText}>
                      {train.return_station}
                    </Text>
                    <Text style={styles.fromToText}>{train.return_time}</Text>
                  </View>
                </View>
              </View> */}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
  cardTextDate: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
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
});

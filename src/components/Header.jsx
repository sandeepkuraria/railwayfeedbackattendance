import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = route => {
  const [trainDataFirstIndex, setTrainDataFirstIndex] = useState([]);

  //   const storeData = async (key, value) => {
  //     try {
  //       await AsyncStorage.setItem(key, value);
  //       console.log(`Data stored with key ${key}`);
  //     } catch (e) {
  //       console.error(`Error storing data with key ${key}:`, e);
  //     }
  //   };

  storeData('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...');

  setTrainDataFirstIndex(response.data[0] || []);
  return (
    <View>
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
                <Text style={styles.fromToText}>{train.start_time} Hrs</Text>
              </View>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                -
              </Text>
              <View>
                <Text style={styles.fromToText}>{train.to_station}</Text>
                <Text style={styles.fromToText}>{train.reach_time} Hrs</Text>
              </View>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                -
              </Text>
              <View>
                <Text style={styles.fromToText}>{train.return_station}</Text>
                <Text style={styles.fromToText}>{train.return_time} Hrs</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

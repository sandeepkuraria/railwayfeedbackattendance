import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import {Alert} from 'react-native'; // Import the Alert component
import {RNCamera} from 'react-native-camera';

const Attendance = () => {
  const navigation = useNavigation();

  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [selfieSubmitted, setSelfieSubmitted] = useState(false); // Step 1: Add state for submission

  const handleTakeSelfie = () => {
    setPhotoCaptured(true);
  };

  const handleRetakeSelfie = () => {
    setPhotoCaptured(false);
    setSelfieSubmitted(false);
  };

  const handleSubmitSelfie = () => {
    if (photoCaptured) {
      setSelfieSubmitted(true);
      Alert.alert('Selfie submitted successfully!');
    } else {
      Alert.alert('Please take a selfie first.');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.attendanceHeader}>
          <View>
            <Text style={styles.attendanceHeader1}>Dear</Text>
          </View>
          <View>
            <Text style={styles.attendanceHeader2}>Attender</Text>
          </View>
        </View>

        <View style={styles.cameraCard}>
          {photoCaptured ? (
            <View>
              <Image
                source={require('../assets/images/camera.png')}
                style={styles.capturedPhoto}
              />
            </View>
          ) : (
            <View>
              <Image
                source={require('../assets/images/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
          )}
        </View>

        <View>
          {photoCaptured ? (
            <View>
              <TouchableOpacity
                style={styles.RetakeSelfieButton}
                onPress={handleRetakeSelfie}>
                <Text style={styles.RetakeSelfieText}>Retake Selfi</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.TakeSelfieButton}
                onPress={handleTakeSelfie}>
                <Text style={styles.TakeSelfieText}>Take Selfi</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <Image
            source={require('../assets/images/circle.png')}
            style={styles.circleAfterSelfi}
            resizeMode="contain"
          />
        </View>
        {/* <View>
          <TouchableOpacity style={styles.SubmitButton}>
            <Text style={styles.SubmitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View>
          {selfieSubmitted && (
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={handleSubmitSelfie}>
              <Text style={styles.SubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View> */}
        <View>
          <View>
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={handleSubmitSelfie}>
              <Text style={styles.SubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* Display alert if selfie is submitted */}
          <View>
            {selfieSubmitted && (
              <Text style={styles.submitMessage}>
                Selfie submitted successfully!
              </Text>
            )}
          </View>
        </View>
        <View style={{marginBottom: 100}}>
          <Image
            source={require('../assets/images/circle.png')}
            style={styles.circleAfterSubmit}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* ********************************buttonBottomRowContainer start ***************************** */}

      <View style={styles.buttonBottomRowContainer}>
        <View>
          <TouchableOpacity
            style={styles.BottomRowbutton}
            onPress={() => navigation.navigate('TrainList')}>
            <Image
              source={require('../assets/images/home.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalBar}></View>
        <View>
          <TouchableOpacity style={styles.BottomRowbutton}>
            <Image
              source={require('../assets/images/report.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ********************************buttonBottomRowContainer end ***************************** */}
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    position: 'relative',
  },
  attendanceHeader: {
    marginVertical: 20,
    marginHorizontal: 55,
  },

  attendanceHeader1: {
    fontWeight: '500',
    fontSize: 27,
    color: 'black',
  },
  attendanceHeader2: {
    fontWeight: '400',
    fontSize: 25,
    color: 'black',
  },
  cameraCard: {
    marginTop: 20,
    height: 250,
    width: 250,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.1,
    marginLeft: 55,
    shadowRadius: 8,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#ff8d3c',
    alignItems: 'center',
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
  cameraIcon: {
    width: 115,
    height: 115,
    marginTop: 60,
  },
  verticalBar: {
    height: 55,
    width: 2,
    backgroundColor: 'orange',
  },
  TakeSelfieText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  TakeSelfieButton: {
    height: 40,
    borderWidth: 2,
    borderColor: '#ff8d3c',
    backgroundColor: '#ff8d3c',
    paddingTop: 6,
    borderRadius: 12,
    marginHorizontal: 140,
    marginTop: 60,
  },
  circleAfterSelfi: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginTop: -30,
  },
  circleAfterSubmit: {
    width: 130,
    height: 130,
    marginLeft: 250,
    marginTop: -70,
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
  },
  SubmitButtonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  capturedPhoto: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },

  RetakeSelfieButton: {
    height: 40,
    borderWidth: 2,
    borderColor: '#ff8d3c',
    backgroundColor: '#ff8d3c',
    paddingTop: 5,
    borderRadius: 12,
    marginHorizontal: 130,
    marginTop: 60,
  },

  RetakeSelfieText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

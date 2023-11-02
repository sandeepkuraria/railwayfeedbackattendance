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
import * as ImagePicker from 'react-native-image-picker';

const Attendance = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const token = route.params.token;
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [selfieSubmitted, setSelfieSubmitted] = useState(false);
  const [selfieImage, setSelfieImage] = useState(); // Step 1: Add state for submission

  const handleTakeSelfie = () => {
    ImagePicker.launchCamera({mediaType: 'photo'}, response => {
      // console.log(response.assets[0].uri);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhotoCaptured(true);
        setSelfieImage(response.assets[0].uri);
      }
    });
  };
  const handleRetakeSelfie = () => {
    setPhotoCaptured(false);
    setSelfieSubmitted(false);
    setSelfieImage(null);
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
            <Text style={[styles.attendanceHeader2, {color: '#167fb9'}]}>
              {name}
            </Text>
          </View>
        </View>

        {/* <View style={styles.cameraCard}>
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
        </View> */}
        <View style={styles.cameraCard}>
          {photoCaptured ? (
            <View>
              <Image
                source={{uri: selfieImage}} // Use the captured image URI
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
            <View
              style={{
                position: 'relative',
                top: '130%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
                backgroundColor: '#EFCBB4',
                borderRadius: 10,
                marginHorizontal: '30%',
                marginTop: '15%',
              }}>
              <TouchableOpacity onPress={handleRetakeSelfie}>
                <Text style={styles.RetakeSelfieText}>Retake Selfie</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                position: 'relative',
                top: '130%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
                backgroundColor: '#EFCBB4',
                borderRadius: 10,
                marginHorizontal: '30%',
                marginTop: '15%',
              }}>
              <TouchableOpacity onPress={handleTakeSelfie}>
                <Text style={styles.TakeSelfieText}>Take Selfie</Text>
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
        {/* submit button */}
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
        {/* bottombubble right */}
        <View
          style={{
            marginBottom: '50%',
            // borderWidth: 2,
            position: 'relative',
            top: 10,
          }}>
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
        </View>
        <View style={styles.verticalBar}></View>
        <View>
          <TouchableOpacity style={[styles.BottomRowbutton, (height = 100)]}>
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
    marginVertical: '6%',
    marginHorizontal: '15%',
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

  buttonBottomRowContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
  },
  BottomRowbutton: {
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#EFCBB4',
    paddingHorizontal: '22%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 32,
    height: 32,
    marginBottom: 5,
  },
  cameraCard: {
    // marginBottom: '10%',
    height: '35%',
    width: '70%',
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 15},
    shadowOpacity: 0.8,
    marginHorizontal: '15%',
    shadowRadius: 8,
    borderRadius: 20,
    backgroundColor: '#EFCBB4',
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
    // borderWidth: 2,
  },
  cameraIcon: {
    position: 'relative',
    // top: '60%',
    marginVertical: '25%',
    // backgroundColor: 'red',
    width: 90,
    height: 90,
    // marginVertical: '14%',
  },
  capturedPhoto: {
    position: 'relative',
    width: 251,
    height: '100%',
    backgroundColor: '#EFCBB4',
    borderRadius: 12,
  },
  verticalBar: {
    height: '100%',
    width: 2,
    backgroundColor: 'orange',
  },

  TakeSelfieButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    backgroundColor: '#EFCBB4',
    borderRadius: 10,
    marginHorizontal: '30%',
    marginTop: '15%',
  },
  RetakeSelfieButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    backgroundColor: '#EFCBB4',
    borderRadius: 10,
    marginHorizontal: '30%',
    marginTop: '15%',
  },
  TakeSelfieText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: '10%',
  },
  RetakeSelfieText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: '10%',
  },
  circleAfterSelfi: {
    position: 'relative',
    top: 100,
    width: 100,
    height: 100,
    marginLeft: '3%',
    // alignItems: 'flex-start',
    // marginTop: -30,
  },
  circleAfterSubmit: {
    position: 'relative',
    top: 0,
    width: 130,
    height: 130,
    marginLeft: '68%',
  },
  SubmitButton: {
    position: 'relative',
    top: '200%',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 48,
    // borderWidth: 2,
    // borderColor: '#ff8d3c',
    backgroundColor: '#ff8d3c',
    // paddingTop: 6,
    // paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: '32%',
    marginTop: '1%',
    paddingVertical: '2%',
  },
  SubmitButtonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

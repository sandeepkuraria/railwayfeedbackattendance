import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import {Alert} from 'react-native'; // Import the Alert component
import * as ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import Geolocation from 'react-native-geolocation-service';

const Attendance = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const token = route.params.token;

  const trainData = route.params.trainData[0];

  let step = parseInt(trainData.step);
  step++;

  console.log(
    'This is step coming from upcoming duties(TrainList page) in attendance page :- ',
    step,
  );

  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [selfieSubmitted, setSelfieSubmitted] = useState(false);
  const [selfieImage, setSelfieImage] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [baseimg, setBaseImg] = useState();

  const getlocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  console.log(latitude);
  console.log(longitude);
  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      getlocation();
    }
  }

  useEffect(() => {
    requestPermissions();
  }, []);

  console.log(trainData.id);

  const saveAttendenceApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append(
      'Cookie',
      'ci_session=b3612beb7ae4c49d7e8341db34272b0730aba59e',
    );

    var formdata = new FormData();
    formdata.append('dutyId', trainData.id);
    formdata.append('lat', latitude);
    formdata.append('long', longitude);
    formdata.append('photo', baseimg);
    formdata.append('step', step);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const res = await fetch(
      'https://railway.retinodes.com/api/v1/assignduty/save_attendace',
      requestOptions,
    );
    const response = await res.json();
    console.log('response', response);
    if (response.status === true) {
      Alert.alert(response.message);

      navigation.replace('TrainList', {
        name: name,
        token: token,
      });
    } else {
      console.log(response.message);
      Alert.alert(response.message);
    }
  };

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
        const baseimg = ImgToBase64.getBase64String(
          response.assets[0].uri,
        ).then(async base64String => {
          await setBaseImg(base64String);
        });
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
      saveAttendenceApi();
      if (trainData.step === '1' || trainData.step === '2') {
      } else if (step === '3') {
        Alert.alert('Congrates! you have comleted your journey!');
      }
    } else {
      Alert.alert('Please take a selfie first.');
    }
  };

  console.log('in ATTENDENCE', trainData);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.attendanceHeader}>
          <View>
            <Text style={styles.attendanceHeader1}>Dear,</Text>
          </View>
          <View>
            <Text style={[styles.attendanceHeader2, {color: '#167fb9'}]}>
              {name}
            </Text>
            <Text style={{color: 'black'}}>
              {step === 1 && <Text>you are at {trainData.from_station}!</Text>}
              {step === 2 && (
                <Text>you are going to {trainData.to_station}!</Text>
              )}
              {step === 3 && (
                <Text>you have reached {trainData.return_station} Back!</Text>
              )}
              {step !== 1 && step !== 2 && step !== 3 && (
                <Text>Default message goes here.</Text>
              )}
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
            {selfieSubmitted && <Text style={styles.submitMessage}></Text>}
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
  },
  cameraIcon: {
    position: 'relative',
    marginVertical: '25%',
    width: 90,
    height: 90,
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
    backgroundColor: '#ff8d3c',
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
  selfieCard: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

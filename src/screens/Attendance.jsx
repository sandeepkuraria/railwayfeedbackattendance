import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import {Alert} from 'react-native'; // Import the Alert component
import * as ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import Geolocation from 'react-native-geolocation-service';
import HeaderText from '../components/HeaderText';
import BottomHomeListButton from '../components/BottomHomeListButton';

const Attendance = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const token = route.params.token;
  const pic = route.params.pic;
  const trainData = route.params.trainData[0];
  const [isLoading, setIsLoading] = useState(false);
  // const [showSubmitButton, setShowSubmitButton] = useState(true);

  let step = parseInt(trainData?.step);
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

  console.log(trainData?.id);

  const saveAttendenceApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append(
      'Cookie',
      'ci_session=b3612beb7ae4c49d7e8341db34272b0730aba59e',
    );

    var formdata = new FormData();
    formdata.append('dutyId', trainData?.id);
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
      setIsLoading(false);
      navigation.replace('TrainList', {
        name: name,
        token: token,
        pic: pic,
      });
    } else {
      setIsLoading(false);
      console.log(response.message);
      Alert.alert(response.message);
    }
  };

  const options = {
    title: 'Select a photo',
    takePhotoButtonTitle: 'Take a photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    base64: true,
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
  };

  const handleTakeSelfie = () => {
    ImagePicker.launchCamera(options, response => {
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
      setIsLoading(true);
      setSelfieSubmitted(true);
      saveAttendenceApi();
      if (trainData?.step === '1' || trainData?.step === '2') {
      } else if (step === '3') {
        Alert.alert('Congrates! you have comleted your journey!');
      }
    } else {
      Alert.alert('Please take a selfie first.');
    }
  };
  // const handleSubmitSelfie = () => {
  //   if (photoCaptured) {
  //     setIsLoading(true);
  //     setSelfieSubmitted(true);
  //     saveAttendenceApi();

  //     if (trainData?.step === '1' || trainData?.step === '2') {
  //       // Check if the current step is 3 after submission
  //       if (step === 3) {
  //         setShowSubmitButton(false); // Hide the submit button after the first cycle
  //         Alert.alert('Congrates! you have comleted your journey!');
  //       }
  //     }
  //   } else {
  //     Alert.alert('Please take a selfie first.');
  //   }
  // };
  console.log('in ATTENDENCE', trainData);

  return (
    <View style={styles.mainContainer}>
      <View style={{marginBottom: '10%'}}>
        <HeaderText name={name} pic={pic} />
      </View>

      <View style={styles.attendanceHeader}>
        <View>
          <Text style={{color: 'black', fontSize: 20}}>
            {step === 1 && (
              <Text>
                Please provide attendance for {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  {trainData?.from_station}
                </Text>
              </Text>
            )}
            {step === 2 && (
              <Text>
                Please provide attendance for {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  {trainData?.to_station}
                </Text>
              </Text>
            )}
            {step === 3 && (
              <Text>
                Please provide attendance for {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  {trainData?.return_station}
                </Text>
              </Text>
            )}
            {/* {step !== 1 && step !== 2 && step !== 3 && (
                <Text>Default message goes here.</Text>
              )} */}
          </Text>
        </View>
      </View>

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
              backgroundColor: '#EFCBB4',
              borderRadius: 10,
              marginHorizontal: '30%',
              padding: '3%',
            }}>
            <TouchableOpacity onPress={handleRetakeSelfie}>
              <Text style={styles.RetakeSelfieText}>Retake Selfie</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#EFCBB4',
              borderRadius: 10,
              marginHorizontal: '30%',
              padding: '3%',
            }}>
            <TouchableOpacity onPress={handleTakeSelfie}>
              <Text style={styles.TakeSelfieText}>Take Selfie</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* submit button */}
      <View>
        <View>
          {trainData?.step < 4 ? (
            <TouchableOpacity
              style={[
                styles.SubmitButton,
                isLoading && {backgroundColor: '#ccc'},
              ]} // Change button style when loading
              onPress={handleSubmitSelfie}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <Text style={styles.SubmitButtonText}>Submit</Text>
              )}
            </TouchableOpacity>
          ) : null}
          {/* {showSubmitButton && trainData?.step < 4 ? (
            <TouchableOpacity
              style={[
                styles.SubmitButton,
                isLoading && {backgroundColor: '#ccc'},
              ]}
              onPress={handleSubmitSelfie}
              disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <Text style={styles.SubmitButtonText}>Submit</Text>
              )}
            </TouchableOpacity>
          ) : null} */}
        </View>
      </View>

      {/* ********************************buttonBottomRowContainer start ***************************** */}

      <BottomHomeListButton name={name} token={token} pic={pic} />

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
    paddingLeft: '15%',
    marginBottom: '5%',
  },
  cameraCard: {
    height: '35%',
    width: '70%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff8d3c',
    marginHorizontal: '15%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  cameraIcon: {
    width: 90,
    height: 90,
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

  capturedPhoto: {
    width: 250,
    height: '100%',
    resizeMode: 'contain',
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
    marginHorizontal: '5%',
  },
  RetakeSelfieText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: '10%',
  },

  SubmitButton: {
    marginTop: '10%',

    backgroundColor: '#ff8d3c',
    borderRadius: 12,
    marginHorizontal: '30%',
    paddingVertical: '2%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  SubmitButtonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  circleAfterSelfi: {
    position: 'relative',
    top: 100,
    width: 100,
    height: 100,
    marginLeft: '3%',
    opacity: 0,
  },
  circleAfterSubmit: {
    position: 'relative',
    top: 0,
    width: 130,
    height: 130,
    marginLeft: '68%',
    opacity: 0,
  },

  selfieCard: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

import React, {createContext, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';
import {TrainListContext} from './TrainListContext';

const AttendanceContext = createContext();

const AttendanceContextProvider = ({children}) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [baseimg, setBaseImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {trainData} = useContext(TrainListContext);
  const {token, name, pic} = useContext(AuthContext);
  let step = parseInt(trainData[0]?.step);

  step++;
  // console.log(
  //   'This is step in attendanceContext :- ',
  //   step,
  //   'yoooooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
  // );
  //   let step = parseInt(trainData[0]?.step);
  //   step++;

  //   console.log(
  //     'trainData[0].step in Attendance Context *************__________',
  //     trainData[0]?.step,
  //   );

  const data = trainData[0];

  console.log('trainData[1] in AttendanceContext', trainData[1]);

  //   const saveAttendanceApi = async () => {
  //     try {
  //       const myHeaders = new Headers();
  //       myHeaders.append('Authorization', `Bearer ${token}`);
  //       myHeaders.append('Content-Type', 'multipart/form-data');

  //       const formdata = new FormData();
  //       formdata.append('dutyId', data?.id);
  //       formdata.append('lat', latitude);
  //       formdata.append('long', longitude);
  //       formdata.append('photo', baseimg);
  //       formdata.append('step', trainData[0]?.step); // Include the step value

  //       const requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: formdata,
  //         redirect: 'follow',
  //       };

  //       const response = await fetch(
  //         'https://railway.retinodes.com/api/v1/assignduty/save_attendance',
  //         requestOptions,
  //       );

  //       const responseData = await response.json();

  //       if (responseData.status === true) {
  //         Alert.alert(responseData.message);
  //         setIsLoading(false);
  //       } else {
  //         setIsLoading(false);
  //         console.log(responseData.message);
  //         Alert.alert(responseData.message);
  //       }
  //     } catch (error) {
  //       console.error('Error during saveAttendanceApi:', error);
  //       setIsLoading(false);
  //       Alert.alert('An error occurred while saving attendance.');
  //     }
  //   };

  const saveAttendanceApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append(
        'Cookie',
        'ci_session=b3612beb7ae4c49d7e8341db34272b0730aba59e',
      );

      var formdata = new FormData();
      formdata.append('dutyId', data?.id);
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

        // Navigate to the TrainList screen
        // navigation.replace('TrainList', {
        //   name: name,
        //   pic: pic,
        //   token: token,
        //   trainData: trainData,
        // });
      } else {
        console.log(response.message);
        Alert.alert(response.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error in saveAttendanceApi:', error);
      setIsLoading(false);
    }
  };

  //   const saveAttendanceApi = async () => {
  //     try {
  //       var myHeaders = new Headers();
  //       myHeaders.append('Authorization', `Bearer ${token}`);
  //       myHeaders.append(
  //         'Cookie',
  //         'ci_session=b3612beb7ae4c49d7e8341db34272b0730aba59e',
  //       );

  //       var formdata = new FormData();
  //       formdata.append('dutyId', data?.id);
  //       formdata.append('lat', latitude);
  //       formdata.append('long', longitude);
  //       formdata.append('photo', baseimg);
  //       formdata.append('step', step);
  //       console.log(
  //         'This is step in attendanceContext in saveAttendanceApi :- ',
  //         step,
  //         'yoooooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
  //       );
  //       var requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: formdata,
  //         redirect: 'follow',
  //       };

  //       const res = await fetch(
  //         'https://railway.retinodes.com/api/v1/assignduty/save_attendace',
  //         requestOptions,
  //       );

  //       const response = await res.json();

  //       console.log('response', response);
  //       if (response.status === true) {
  //         console.log('isLoading before set:', isLoading);
  //         Alert.alert(response.message);
  //         console.log(response.message);
  //         setIsLoading(false);
  //         navigation.replace('TrainList', {});
  //       } else {
  //         console.log('isLoading before set:', isLoading);
  //         console.log(response.message);
  //         Alert.alert(response.message);
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       console.error('Error in saveAttendanceApi:', error);
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <AttendanceContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        baseimg,
        setBaseImg,
        isLoading,
        setIsLoading,
        saveAttendanceApi,
        step,
        data,
      }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export {AttendanceContextProvider, AttendanceContext};

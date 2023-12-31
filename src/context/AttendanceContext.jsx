import React, {createContext, useState, useEffect, useContext} from 'react';
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
  const [attendanceList, setAttendanceList] = useState({});

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
  const source_pic = attendanceList.source_photo;
  const destination_pic = attendanceList.destination_photo;
  const return_pic = attendanceList.return_photo;
  // console.log('trainData[1] in AttendanceContext', trainData[1]);

  const saveAttendanceApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      // myHeaders.append(
      //   'Cookie',
      //   'ci_session=b3612beb7ae4c49d7e8341db34272b0730aba59e',
      // );

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

      // console.log('response', response);

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

  // const fetchAttendanceList = async dutyId => {
  //   try {
  //     setIsLoading(true);

  //     const myHeaders = new Headers();
  //     myHeaders.append('Authorization', `Bearer ${token}`);

  //     const requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow',
  //     };

  //     const response = await fetch(
  //       `https://railway.retinodes.com/api/v1/assignduty/getAttendance?dutyId=${dutyId}`,
  //       requestOptions,
  //     );

  //     // console.log('fetchAttendanceList API Response Status:', response.status); // Log response status
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch attendance data');
  //     }

  //     const result = await response.json();
  //     // console.log('Fetched attendance data:', result);

  //     setAttendanceList(result.data); // Assuming attendance data is inside the "data" property

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching attendance:', error);
  //     setIsLoading(false);
  //   }
  // };

  const fetchAttendanceList = async dutyId => {
    try {
      setIsLoading(true);

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(
        `https://railway.retinodes.com/api/v1/assignduty/getAttendance?dutyId=${dutyId}`,
        requestOptions,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch attendance data');
      }

      const result = await response.json();

      if (result.status) {
        setAttendanceList(result.data);
      }
      // else {
      //   setAttendanceList({}); // Set an empty array or handle the case accordingly
      // }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching attendance:', error);
      setIsLoading(false);
    }
  };

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
        attendanceList,
        setAttendanceList,
        fetchAttendanceList,
        source_pic,
        destination_pic,
        return_pic,
      }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export {AttendanceContextProvider, AttendanceContext};

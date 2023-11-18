import React, {createContext, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext'; // Import AuthContext to access the token
import {TrainListContext} from './TrainListContext'; // Import AuthContext to access the token

const AttendanceContext = createContext();

const AttendanceContextProvider = ({children}) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [baseimg, setBaseImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {trainData} = useContext(TrainListContext);
  const {token, name, pic} = useContext(AuthContext);

  const data = trainData[0];
  console.log('trainData', data);

  let step = parseInt(data?.step);
  step++;
  console.log(
    'This is step coming from upcoming duties(TrainList page) in attendanceContext :- ',
    step,
  );

  const saveAttendenceApi = async () => {
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
        saveAttendenceApi,
        step,
        data,
      }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export {AttendanceContextProvider, AttendanceContext};

import React, {createContext, useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';

const TrainListContext = createContext();

const TrainListContextProvider = ({children}) => {
  // const [stepCount, setStepCount] = useState(0);

  const [trainData, setTrainData] = useState([]);
  const [trainDataFirstIndex, setTrainDataFirstIndex] = useState([]);
  const navigation = useNavigation();
  const {token, name, pic} = useContext(AuthContext);
  const data = trainData[0];
  const coachB = trainData[0]?.coaches?.split(',')[0];

  // let step = parseInt(trainData[0]?.step);

  // step++;

  // let stepCount = 0;
  // stepCount++;
  // useEffect(() => {
  //   if (stepCount === 3) {
  //     stepCount = 0;
  //   }
  // }, []);

  // console.log('stepCount in TrainListContext', stepCount);

  // console.log(
  //   'step in TrainListContext 000000000******************______________******************',
  //   step,
  // );
  // console.log('coachB in TrainListContext***** ************', coachB);

  // Destructure the token from AuthContext

  console.log(
    'trainData in TrainlistContext_________________----------',
    trainData,
  );

  console.log('in TrainlistContext ******************', trainDataFirstIndex);

  const upcomingDutiesApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`); // Use the token from AuthContext

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    try {
      const res = await fetch(
        'https://railway.retinodes.com/api/v1/assignduty/upcomingduties',
        requestOptions,
      );
      console.log(
        'TrainListContext console data ********************************** : - ',
        trainData[0]?.date,
        trainData[0]?.train_no,
        trainData[0]?.train_name,
        trainData[0]?.step,
      );
      const response = await res.json();

      setTrainData(response.data || []);

      setTrainDataFirstIndex(response.data[0] || []);

      if (response.status === true) {
      } else {
        Alert.alert(response.message);
      }
    } catch (error) {
      console.error('Error fetching upcoming duties:', error);
    }
  };

  return (
    <TrainListContext.Provider
      value={{
        trainData,
        setTrainData,
        trainDataFirstIndex,
        setTrainDataFirstIndex,
        upcomingDutiesApi,
        coachB,
        // step,
        token,
        name,
        pic,
      }}>
      {children}
    </TrainListContext.Provider>
  );
};

export {TrainListContextProvider, TrainListContext};

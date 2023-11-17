import React, {createContext, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';

// Import AuthContext to access the token

const TrainListContext = createContext();

const TrainListContextProvider = ({children}) => {
  const [trainData, setTrainData] = useState([]);
  const [trainDataFirstIndex, setTrainDataFirstIndex] = useState([]);
  const navigation = useNavigation();
  const {token} = useContext(AuthContext);

  // Destructure the token from AuthContext

  console.log(
    'Token in TrainlistContext_________________----------',
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

      const response = await res.json();
      setTrainData(response.data || []);
      setTrainDataFirstIndex(response.data[0] || []);

      if (response.status === true) {
        console.log(
          'TrainListContext console data ********************************** : - ',
          trainData[0]?.date,
          trainData[0]?.train_no,
          trainData[0]?.train_name,
          trainData[0]?.step,
        );
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
      }}>
      {children}
    </TrainListContext.Provider>
  );
};
export {TrainListContextProvider, TrainListContext};

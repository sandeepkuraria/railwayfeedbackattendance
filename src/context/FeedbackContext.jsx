import React, {createContext, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthContext';
import {TrainListContext} from './TrainListContext';

const FeedbackContext = createContext();

// console.log('TRAINDATA IN FEEDBACKContext---', trainData[0]);

const FeedbackContextProvider = ({children}) => {
  const [selectedCoach, setSelectedCoach] = useState(coachB);
  const [pnrNo, setPnrNo] = useState('');
  const [description, setDescription] = useState('');
  const [mobile, setMobile] = useState('');
  const [bedrollProvided, setBedrollProvided] = useState('');
  const [linenItemsProvided, setLinenItemsProvided] = useState('');
  const [freshLinenItems, setFreshLinenItems] = useState('');
  const [feelingSafe, setFeelingSafe] = useState('');
  const [linenServiceRating, setLinenServiceRating] = useState(0);
  const [behaviors_of_attender, setBehaviors_of_attender] = useState(0);
  // const [coachB, setCoachB] = useState(0);
  const {trainData, coachB} = useContext(TrainListContext);
  console.log('trainData', trainData);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {token, name, pic} = useContext(AuthContext);

  const data = trainData[0];

  // setCoachB(trainData[0]?.coaches?.split(',')[0]);
  // console.log('coachB in FeedbackContext', coachB);
  //   console.log('data in feedback context', data.coaches, data.id);

  const PostFeedbackApi = async () => {
    console.log('INSIDE PostFeedbackApi API FUNCTION');
    console.log(data.id);
    console.log(data.coaches);
    console.log(bedrollProvided);
    console.log(linenItemsProvided);
    console.log(freshLinenItems);
    console.log(feelingSafe);
    console.log(behaviors_of_attender);
    var myHeaders = new Headers();

    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('dutyId', data.id);
    formdata.append('coach', selectedCoach);
    formdata.append('pnr', pnrNo);
    formdata.append('description', description);
    formdata.append('rating', linenServiceRating);
    formdata.append('mobile', mobile);
    formdata.append('bedroll_provided_on_time', bedrollProvided);
    formdata.append('all_linen_items_provided_in_bedroll', linenItemsProvided);
    formdata.append('all_linen_items_provided_fresh', freshLinenItems);
    formdata.append('behaviors_of_attender', behaviors_of_attender);
    formdata.append('are_you_feeling_safe_in_journey', feelingSafe);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    const res = await fetch(
      'https://railway.retinodes.com/api/v1/assignduty/save_feedback',
      requestOptions,
    );

    const response = await res.json();

    if (response.status === true) {
      Alert.alert(response.message);
      setIsLoading(false);

      console.log(response);
      navigation.navigate('TrainList', {
        name: name,
        token: token,
        pic: pic,
      });
    } else {
      setIsLoading(false);

      Alert.alert(response.message);
      console.log(response);
    }

    //  .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  };

  return (
    <FeedbackContext.Provider
      value={{
        selectedCoach,
        pnrNo,
        description,
        linenServiceRating,
        mobile,
        bedrollProvided,
        linenItemsProvided,
        freshLinenItems,
        behaviors_of_attender,
        feelingSafe,

        PostFeedbackApi,
        setBehaviors_of_attender,
        setFeelingSafe,
        setFreshLinenItems,
        setLinenItemsProvided,
        setBedrollProvided,
        setMobile,
        setLinenServiceRating,
        setDescription,
        setPnrNo,
        setSelectedCoach,

        isLoading,
        setIsLoading,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export {FeedbackContextProvider, FeedbackContext};

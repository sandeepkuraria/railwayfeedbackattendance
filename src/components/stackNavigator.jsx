import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Login from '../screens/Login';
import TrainList from '../screens/TrainList';
import Feedback from '../screens/Feedback';
import Attendance from '../screens/Attendance';
import CompletedJourney from '../screens/CompletedJourney';
import FeedbackList from '../screens/FeedbackList';
import {AuthContextProvider} from '../context/AuthContext';
import {TrainListContextProvider} from '../context/TrainListContext';
import {FeedbackContextProvider} from '../context/FeedbackContext';
import {AttendanceContextProvider} from '../context/AttendanceContext';
import ReportList from '../screens/ReportList';
import AttendanceList from '../screens/AttendanceList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  // const [initialRoute, setInitialRoute] = useState('Login');

  // const getToken = async () => {
  //   const storedToken = await AsyncStorage.getItem('token');
  //   console.log('TOKEN------', storedToken);
  //   if (storedToken !== null) {
  //     setToken(storedToken);
  //   }
  // };

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <TrainListContextProvider>
          <FeedbackContextProvider>
            <AttendanceContextProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerShown: false, gestureEnabled: false}}
                />

                <Stack.Screen
                  name="TrainList"
                  component={TrainList}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="Feedback"
                  component={Feedback}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="Attendance"
                  component={Attendance}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="CompletedJourney"
                  component={CompletedJourney}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="ReportList"
                  component={ReportList}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="AttendanceList"
                  component={AttendanceList}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="FeedbackList"
                  component={FeedbackList}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </AttendanceContextProvider>
          </FeedbackContextProvider>
        </TrainListContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default StackNavigator;

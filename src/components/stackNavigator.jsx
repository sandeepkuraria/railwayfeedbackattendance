import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Login from '../screens/Login';
import TrainList from '../screens/TrainList';
import Feedback from '../screens/Feedback';
import Attendance from '../screens/Attendance';
import CompletedJourney from '../screens/CompletedJourney';
import FeedbackList from '../screens/FeedbackList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
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
          name="FeedbackList"
          component={FeedbackList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

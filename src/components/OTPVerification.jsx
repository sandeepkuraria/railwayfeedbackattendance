import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';

const OTPVerification = ({emp_id, mobile, navigation}) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'ci_session=e2dd6dd7ec0b6ac1ff3c57f01fb27e7495b05e82',
    );
    // var raw = JSON.stringify({emp_id, otp});

    var formdata = new FormData();
    formdata.append('emp_id', emp_id);
    formdata.append('password', password);
    formdata.append('mobile', mobile);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    try {
      const res = await fetch(
        'https://railway.retinodes.com/api/v1/authentication/verifyOTP',
        requestOptions,
      );
      const response = await res.json();

      if (response.status === true) {
        // OTP is correct, navigate to the next screen
        navigation.replace('TrainList', {
          name: response.data.name,
          pic: response.data.profile_pic,
          token: response.token,
        });
        navigation.replace('Header', {
          name: response.data.name,
          pic: pic,
          token: response.token,
        });
      } else {
        Alert.alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('An error occurred while verifying OTP');
    }
  };

  return (
    <View>
      <TextInput
        style={{paddingVertical: '1%', color: 'black'}}
        value={otp}
        placeholder="Enter OTP"
        placeholderTextColor="black"
        keyboardType="numeric"
        maxLength={6} // Add this line to limit input to 6 characters
        onChangeText={text => setOtp(text)}
      />

      <TouchableOpacity onPress={handleVerifyOTP}>
        <Text>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;

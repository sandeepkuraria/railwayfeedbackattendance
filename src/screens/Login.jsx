import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const {
    setemp_id,
    setpassword,
    emp_id,
    password,
    loginresponse,
    loginApi,
    isLoading,
    setIsLoading,
  } = useContext(AuthContext);
  console.log(emp_id, 'AUTH IN LOGIN');

  const navigation = useNavigation();
  console.log('isloading in Login ++++++++++++++++++++++++++++', isLoading);
  const handleLogin = async () => {
    console.log('emp_id : ', emp_id);
    console.log('Password : ', password);
    if (emp_id === '' && password === '') {
      Alert.alert('Please enter employee id/password');
    } else {
      setIsLoading(true);
      loginApi();
    }
  };

  // ******************************* LoginAPI start ************************
  // const loginApi = async () => {
  //   var myHeaders = new Headers();

  //   myHeaders.append(
  //     'Cookie',
  //     'ci_session=e2dd6dd7ec0b6ac1ff3c57f01fb27e7495b05e82',
  //   );

  //   var formdata = new FormData();
  //   formdata.append('emp_id', emp_id);
  //   formdata.append('password', password);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   const res = await fetch(
  //     'https://railway.retinodes.com/api/v1/authentication/login',
  //     requestOptions,
  //   );
  //   const response = await res.json();
  //   console.log('RESPONSE IN LOGIN----', response.data.profile_pic);
  //   const pic = response.data.profile_pic;
  //   if (response.status === true) {
  //     console.log(response.data.name);
  //     setIsLoading(false);

  //     navigation.replace('TrainList', {
  //       name: response.data.name,
  //       pic: pic,
  //       token: response.token,
  //     });
  //     navigation.replace('Header', {
  //       name: response.data.name,
  //       pic: pic,
  //       token: response.token,
  //     });
  //   } else {
  //     setIsLoading(false);

  //     Alert.alert(response.message);
  //   }
  // };
  // **************************** Login API end ****************************

  console.log('LOGIN RESPONSE---', loginresponse);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView style={{flex: 2}}>
        <View
          style={{
            // alignItems: 'center',
            marginTop: '25%',
            height: '30%',
            width: '70%',
            marginHorizontal: '15%',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
            }}>
            <Image
              source={require('../assets/images/train_mono.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            RAIL<Text style={{fontWeight: 'bold'}}>SAARTHI</Text>
          </Text>
        </View>

        <View style={styles.container}>
          <View>
            <View style={styles.input}>
              <TextInput
                style={{paddingVertical: '1%', color: 'black'}}
                value={emp_id}
                placeholder="Employee id"
                placeholderTextColor="black"
                onChangeText={text => setemp_id(text)}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={{paddingVertical: '1%', color: 'black'}}
                value={password}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry
                onChangeText={text => setpassword(text)}
              />
            </View>

            <View style={styles.loginButton}>
              <TouchableOpacity
                style={[isLoading && {backgroundColor: '#ccc'}]}
                onPress={handleLogin}
                disabled={isLoading}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      paddingLeft: '25%',
                      paddingVertical: '2%',
                    }}>
                    LOGIN
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    borderWidth: 2,
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {
    width: '100%',
    height: '10%',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ff8d3c',
    width: '100%',
    height: '100%',
  },
  input: {
    borderRadius: 25,
    marginBottom: '3%',
    marginHorizontal: '14%',
    paddingLeft: '5%',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ff8d3c',
  },
  loginButton: {
    marginVertical: '3%',
    elevation: 10,
    backgroundColor: '#ff8d3c',
    paddingVertical: '1%',
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: '35%',
  },
});

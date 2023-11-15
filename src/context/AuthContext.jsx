import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emp_id, setemp_id] = useState('');
  const [password, setpassword] = useState('');
  const [loginresponse, setLoginResponse] = useState();

  const [token, setToken] = useState(null);
  console.log(token, 'sandeep');
  const getToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      console.log('TOKEN------', storedToken);
      setToken(storedToken);
      console.log('tooooo', token);
    } catch (error) {
      // setToken(null);
      console.log('errrrr', error);
    }
  };

  // Function to get the token from local storage
  const navigation = useNavigation();

  useEffect(() => {
    getToken();
  }, []); // Run this effect whenever the token changes

  useEffect(() => {
    // Call getToken when the component mounts
    // console.log(token,'[[[[[]]]]]]')
  }, []);
  // Function to sign up and store token in local storage

  //******************************************Login Screen************************************* */
  const loginApi = async () => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append('emp_id', emp_id);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const res = await fetch(
      'https://railway.retinodes.com/api/v1/authentication/login',
      requestOptions,
    );
    const response = await res.json();
    await AsyncStorage.setItem('token', response?.token);
    // console.log('RESPONSE IN LOGIN----', response.data.profile_pic);
    const pic = response.data.profile_pic;
    setLoginResponse(response);
    if (response.status === true) {
      console.log(response.data.name);
      setIsLoading(false);

      navigation.navigate('TrainList', {
        name: response.data.name,
        pic: pic,
        token: response.token,
      });
      navigation.navigate('Header', {
        name: response.data.name,
        pic: pic,
        token: response.token,
      });
    } else {
      setIsLoading(false);

      Alert.alert(response.message);
    }
  };
  //******************************************Login Screen************************************* */
  //****************************Edit User Profile Api*************************************/

  return (
    <AuthContext.Provider
      value={{
        setemp_id,
        setpassword,
        emp_id,
        password,
        loginApi,
        loginresponse,
        isLoading,
        setIsLoading,
        getToken,
        token,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContextProvider, AuthContext};

// // AuthContext.js
// import {createContext, useContext, useState} from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [user, setUser] = useState('hello');

//   const login = userData => {
//     // Perform login logic
//     setUser(userData);
//   };

//   const logout = () => {
//     // Perform logout logic
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{user, login, logout}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

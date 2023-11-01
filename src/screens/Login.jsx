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
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const Login = () => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('UserName : ', userName);
    console.log('Password : ', password);
    if (userName === '' && password === '') {
      Alert.alert('Please enter username/password');
    } else {
      navigation.navigate('TrainList');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView>
        <View style={styles.circle_top_container}>
          <Image
            source={require('../assets/images/circlefinal.png')}
            style={styles.circle_top}
            // resizeMode="contain"
          />
        </View>

        <View
          style={{
            // borderWidth: 2,
            width: '90%',
            height: '35%',
            marginLeft: '5%',
            // marginRight: '10%',
          }}>
          <Image
            source={require('../assets/images/train_mono.png')}
            style={styles.logo}
            resizeMode="cover"
          />
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
                value={userName}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={text => setuserName(text)}
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
              <TouchableOpacity onPress={handleLogin}>
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
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomBubbles}>
          <View>
            <Image
              source={require('../assets/images/circle.png')}
              style={styles.bottomBubblesLeft}
              resizeMode="contain"
            />
          </View>

          <View>
            <Image
              source={require('../assets/images/circle.png')}
              style={styles.bottomBubblesRight}
              resizeMode="contain"
            />
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
  },
  circle_top_container: {
    width: '20%',
    height: '10%',
    marginTop: '15%',
    zIndex: 10,
    marginLeft: '10%',
  },
  circle_top: {
    width: '8%',
    height: '8%',
    padding: '30%',
    resizeMode: 'cover',
    overflow: 'visible',
  },
  logo: {
    // aspectRatio: 4 / 3,
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
    // backgroundColor: '#ff8d3c',
    borderWidth: 1,
    borderColor: '#ff8d3c',
  },
  loginButton: {
    marginVertical: '3%',
    elevation: 10,
    backgroundColor: '#ff8d3c',
    paddingVertical: '1%',
    // borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: '35%',
  },

  bottomBubbles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '-20%', // Adjusted for responsiveness
    marginTop: '3%', // Adjusted for responsiveness
  },
  bottomBubblesLeft: {
    position: 'absolute',
    top: -240,
    width: 400,
    height: 400,
    // marginTop: -310,
    marginLeft: '50%',
    zIndex: -999,
  },
  bottomBubblesRight: {
    width: 100,
    height: 100,
    top: -80,
    marginRight: '3%',
  },
});

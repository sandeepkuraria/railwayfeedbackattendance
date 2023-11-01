import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  Button,
  Checkbox,
  Icon,
  Item,
  Label,
  Input,
  ListItem,
  Body,
} from 'native-base';

const Login2 = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../assets/images/trainbg.png')}
        style={{height: Dimensions.get('window').height / 2.5}}>
        <View style={styles.brandView}>
          <Icon
            name="location-sharp"
            style={{color: '#ffffff', fontSize: 100}}
          />{' '}
          <Text style={styles.brandViewText}>Indian Railway</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color: '#4632A1', fontSize: 34}}>
            Welcome to the Railway Project
          </Text>

          <View style={{marginTop: 50}}>
            <Item floatingLabel style={{borderColor: '#4632A1'}}>
              <Label>Email</Label>
              <Input value="abc@gmail.com" keyboardType="email-address" />
              <Icon name="checkmark" style={{color: '#4632A1'}} />
            </Item>
            <Item floatingLabel style={{borderColor: '#4632A1', marginTop: 20}}>
              <Label>Password</Label>
              <Input value="********" />
              <Icon name="eye" style={{color: '#4632A1'}} />
            </Item>
          </View>

          <View style={styles.forgotPassView}>
            <View style={{flex: 1, marginLeft: -20}}>
              <ListItem noBorder>
                <Checkbox selected={true} color="#4632A1" />
                <Body>
                  <Text style={{color: '#8f9195', alignSelf: 'flex-start'}}>
                    Remember Me
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View style={{flex: 1, marginRight: -20}}>
              <ListItem noBorder>
                <Body>
                  <Text style={{color: '#8f9195', alignSelf: 'flex-start'}}>
                    Forgot Password
                  </Text>
                </Body>
              </ListItem>
            </View>
          </View>

          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              rounded
              style={[
                styles.loginBtn,
                styles.shadowBtn,
                {shadowColor: '#00acee'},
              ]}>
              <Text style={{color: '#ffffff'}}>Login</Text>
            </Button>
          </View>

          <View style={{flex: 1}}>
            <Text style={{textAlign: 'center'}}> or Login With</Text>
            <View style={styles.socialLoginView}>
              <Button
                icon
                style={[styles.shadowBtn, {backgroundColor: '#4267b2'}]}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="facebook"
                  style={{color: '#ffffff'}}
                />
              </Button>
              <Button
                icon
                style={[styles.shadowBtn, {backgroundColor: '#00acee'}]}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="thread"
                  style={{color: '#ffffff'}}
                />
              </Button>
              <Button
                icon
                style={[styles.shadowBtn, {backgroundColor: '#4267b2'}]}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="google-plus"
                  style={{color: '#ffffff'}}
                />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login2;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  socialLoginView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  shadowBtn: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
});

// import {
//   Dimensions,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import {
//   Button,
//   Checkbox,
//   Icon,
//   Item,
//   Label,
//   Input,
//   ListItem,
//   Body,
// } from 'native-base';

// const Login2 = () => {
//   return (
//     // Start
//     <ScrollView
//       style={{flex: 1, backgroundColor: '#fffff'}}
//       showsVerticalScrollIndicator={false}>
//       {/* Top View */}
//       <ImageBackground
//         source={require('../assets/images/trainbg.png')}
//         style={{
//           height: Dimensions.get('window').height / 2.5,
//         }}>
//         <View style={styles.brandView}>
//           <Icon
//             name="location-sharp"
//             style={{color: '#fffff', fontSize: 100}}
//           />
//           <Text style={styles.brandViewText}>Indian Railway</Text>
//         </View>
//       </ImageBackground>
//       {/* Bottom View */}
//       <View style={styles.bottomView}>
//         {/* Welcome View */}
//         <View style={{padding: 40}}>
//           <Text style={{color: '#4632A1', fontSize: 34}}>
//             Welcome to the Railway Project
//           </Text>
//           {/* Form Input */}
//           <View style={{marginTop: 50}}>
//             <Item floatingLabel style={{borderColor: '#4632A1'}}>
//               <Label>Email</Label>
//               <Input value="abc@gmail.com" keyboardType="email-address" />
//               <Icon name="checkmark" style={{color: '#4632A1'}} />
//             </Item>
//             <Item floatingLabel style={{borderColor: '#4632A1', marginTop: 20}}>
//               <Label>Passsword</Label>
//               <Input value="********" />
//               <Icon name="eye" style={{color: '#4632A1'}} />
//             </Item>
//           </View>
//           {/* Forgot password and remember me View */}
//           <View style={styles.forgotPassView}>
//             <View style={{flex: 1, marginLeft: -20}}>
//               <ListItem noBorder>
//                 <Checkbox selected={true} color="#4632A1" />

//                 <Body>
//                   <Text style={{color: '#8f9195', alignSelf: 'flex-start'}}>
//                     Remember Me
//                   </Text>
//                 </Body>
//               </ListItem>
//             </View>
//             <View style={{flex: 1, marginRight: -20}}>
//               <ListItem noBorder>
//                 <Body>
//                   <Text style={{color: '#8f9195', alignSelf: 'flex-start'}}>
//                     Forgot Password
//                   </Text>
//                 </Body>
//               </ListItem>
//             </View>
//           </View>
//           {/* Login Button and Social Login Button View */}
//           <View
//             style={{
//               height: 100,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Button
//               rounded
//               style={
//                 (styles.loginBtn, styles.shadowBtn, {shadowColor: '#00acee'})
//               }>
//               <Text style={{color: '#fffff'}}>Login</Text>
//             </Button>
//           </View>
//           <View style={{flex: 1}}>
//             <Text style={{textAlign: 'center'}}> or Login With</Text>
//             {/* Social Button Views */}
//             <View style={styles.socialLoginView}>
//               <Button
//                 icon
//                 style={[styles.shadowBtn, {backgroundColor: '#4267b2'}]}>
//                 <Icon
//                   type="MaterialCommunityIcons"
//                   name="facebook"
//                   style={{color: '#fffff'}}
//                 />
//               </Button>
//               <Button
//                 icon
//                 style={[styles.shadowBtn, {backgroundColor: '#00acee'}]}>
//                 <Icon
//                   type="MaterialCommunityIcons"
//                   name="thread"
//                   style={{color: '#fffff'}}
//                 />
//               </Button>
//               <Button
//                 icon
//                 style={[styles.shadowBtn, {backgroundColor: '#4267b2'}]}>
//                 <Icon
//                   type="MaterialCommunityIcons"
//                   name="google-plus"
//                   style={{color: '#fffff'}}
//                 />
//               </Button>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//     // End
//   );
// };

// export default Login2;

// const styles = StyleSheet.create({
//   brandView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   brandViewText: {
//     color: '#fffff',
//     fontSize: 40,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//   },
//   bottomView: {
//     flex: 1,
//     backgroundColor: '#fffff',
//     bottom: 50,
//     borderTopStartRadius: 60,
//     borderTopEndRadius: 60,
//   },
//   forgotPassView: {
//     height: 50,
//     marginTop: 20,
//     flexDirection: 'row',
//   },
//   loginBtn: {
//     alignSelf: 'center',
//     backgroundColor: '#4632A1',
//     width: Dimensions.get('window').width / 2,
//     justifyContent: 'center',
//   },
//   socialLoginView: {
//     flexDirection: 'row',
//     flex: 1,
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   shadowBtn: {
//     shadowOffset: {width: 1, height: 10},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 15,
//   },
// });

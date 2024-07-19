/* eslint-disable react-native/no-inline-styles */
// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const Setting = ({route, navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SettingsStack', {screen: 'Profile'})
          }>
          <Image
            source={require('../Images/Profile.png')}
            style={{height: 150, width: 150}}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>PROFILE</Text>
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('ThirdPage')}>
          <Image
            source={require('../Images/Password.png')}
            style={{height: 150, width: 150}}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>Password</Text>
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('FourthPage')}>
          <Image
            source={require('../Images/Logout.png')}
            style={{height: 150, width: 150}}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>LOGOUT</Text>
      </View>
    </View>
  );
};
export default Setting;

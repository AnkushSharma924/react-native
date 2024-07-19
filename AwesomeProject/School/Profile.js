// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>First Name</Text>
          <TextInput
            placeholder="Enter First Name"
            style={styles.textinputview}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>Last Name</Text>
          <TextInput
            placeholder="Enter Last Name"
            style={styles.textinputview}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>Gender</Text>
          <TextInput placeholder="Enter Gender" style={styles.textinputview} />
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>Address</Text>
          <TextInput
            placeholder="Enter your Address"
            style={styles.textinputview}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.textinputview}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.textview}>PhoneNo</Text>
          <TextInput
            placeholder="Enter PhoneNo"
            style={styles.textinputview}
          />
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={styles.buttonstyle}>
            <Text
              style={styles.buttontext}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  textview: {fontSize: 20, margin: 10},
  textinputview: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
  },
  buttonstyle:{
    margin: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#42f44b',
    justifyContent: 'center',
  },
  buttontext:{
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
});

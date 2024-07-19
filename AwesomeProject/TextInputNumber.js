//Check Value is a Number using isNaN() in React Native
//https://aboutreact.com/react-native-isnan-to-check-value-is-a-number-or-not/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Button, TextInput} from 'react-native';

const TextInputNumber = () => {
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumberOrNot = () => {
    //Handler called on button click
    if (isNaN(inputValue)) {
      //if input is not a number then here
      alert('It is not a Number');
    } else {
      //if input is number then here
      alert('It is a Number');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter text"
         onChangeText={(inputValue) => setInputValue(inputValue)}
          style={styles.textInputStyle}
        />
        <Button
          title=" Check Value Is Number Or Not "
          onPress={checkValueIsNumberOrNot}
          color="#606070"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
  },
});

export default TextInputNumber;
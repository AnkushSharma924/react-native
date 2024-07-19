/* eslint-disable react-native/no-inline-styles */
import  React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RadioButton = () => {
  const [selected, setselected] = useState('');

  const radioButtonsData = [
    {
      id: 1,
      title: 'Male',
    },
    {
      id: 2,
      title: 'Female',
    },
    {
      id: 3,
      title: 'Others',
    },
  ];

  return (
    <View>
      <Text>Map function</Text>
      {radioButtonsData.map((item, index) => {
        return (
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableOpacity
              onPress={() => setselected(index)}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                marginRight: 10,
              }}>
              {selected === index ? (
                <View
                  style={{
                    backgroundColor: 'black',
                    height: 20,
                    borderRadius: 30,
                    width: 20,
                  }}
                />
              ) : null}
            </TouchableOpacity>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;

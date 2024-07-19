// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createNativeStackNavigator();

function NavExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavExample;
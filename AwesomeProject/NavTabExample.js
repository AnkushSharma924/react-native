// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FirstPages from './Pagess/FirstPages';
import SecondPages from './Pagess/SecondPages';
import ThirdPages from './Pagess/ThirdPages';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarStyle: {
          backgroundColor: 'seagreen',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 12
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="FirstPages"
        component={FirstPages}
        options={{
          tabBarLabel: 'Chats',
        }}  />
      <Tab.Screen
        name="SecondPages"
        component={SecondPages}
        options={{
          tabBarLabel: 'Status',
        }} />
        <Tab.Screen
        name="ThirdPages"
        component={ThirdPages}
        options={{
          tabBarLabel: 'Calls',
        }} />
    </Tab.Navigator>
  );
}

function NavTabExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'seagreen' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: 'Whats App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavTabExample;
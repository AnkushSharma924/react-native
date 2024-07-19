// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';

import
MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './School/Home';
import Detail from './School/Detail';
import Setting from './School/Setting';
import Profile from './School/Profile';
import Dashboard from './School/Dashboard';
import Homework from './School/Homework';
import Attendance from './School/Attendance';
import Examination from './School/Examination';
import Results from './School/Results';
import TimeTable from './School/TimeTable';
import Fees from './School/Fees';
import Gallery from './School/Gallery';
import SchoolNews from './School/SchoolNews';
import ShowEvent from './School/ShowEvent';
import Events from './School/Events';
import EditEvent from './School/EditEvent';
import AnnualFunction from './School/AnnualFunction';
import SportsDay from './School/SportsDay';
import ShowHomeWork from './School/ShowHomework';
import HomeWork1 from './School/HomeWork1';
import HomeWork2 from './School/HomeWork2';
import HomeWork3 from './School/HomeWork3';
import ShowAttendance from './School/ShowAttendance';
import Attendance1 from './School/Attendance1';
import Attendance2 from './School/Attendance2';
import Attendance3 from './School/Attendance3';
import ShowExamination from './School/ShowExamination';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Setting"
        component={Setting} />
      <Stack.Screen
        name="Profile"
        component={Profile} />
    </Stack.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Homework" component={Homework} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Examination" component={Examination} />
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Fees" component={Fees} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="SchoolNews" component={SchoolNews} />
      <Stack.Screen name="ShowEvent" component={ShowEvent} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="EditEvent" component={EditEvent} />
      <Stack.Screen name="AnnualFunction" component={AnnualFunction} />
      <Stack.Screen name="SportsDay" component={SportsDay} />
      <Stack.Screen name="ShowHomeWork" component={ShowHomeWork} />
      <Stack.Screen name="HomeWork1" component={HomeWork1} />
      <Stack.Screen name="HomeWork2" component={HomeWork2} />
      <Stack.Screen name="HomeWork3" component={HomeWork3} />
      <Stack.Screen name="ShowAttendance" component={ShowAttendance} />
      <Stack.Screen name="Attendance1" component={Attendance1} />
      <Stack.Screen name="Attendance2" component={Attendance2} />
      <Stack.Screen name="Attendance3" component={Attendance3} />
      <Stack.Screen name="ShowExamination" component={ShowExamination} />
      <Stack.Screen
        name="Profile"
        component={Profile} />
    </Stack.Navigator>
  );
}

function NavBottom() {
  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            else if (route.name === 'DashboardStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
          <Tab.Screen
          name="DashboardStack"
          component={DashboardStack}
          options={{
            tabBarLabel: 'Dashboard',
            title: 'Dashboard'
          }} />
          <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
          }} />
      </Tab.Navigator>
   
  );
}
export default NavBottom;
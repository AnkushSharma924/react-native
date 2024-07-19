import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Page1 from './Navigation/Page1';
import Page2 from './Navigation/Page2';
import Page3 from './Navigation/Page3';
const Stack = createNativeStackNavigator();

function NavigationExample(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Page1">
                <Stack.Screen
                name="Page1"
                component={Page1}
                options={{
                    title: 'Page1', 
                    headerStyle: {
                      backgroundColor: '#f4511e', 
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                
                <Stack.Screen
                name="Page2"
                component={Page2}
                options={{
                    title: 'Page2', 
                    headerStyle: {
                      backgroundColor: '#f4511e', 
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
               
                <Stack.Screen
                name="Page3"
                component={Page3}
                options={{
                    title: 'Page3', 
                    headerStyle: {
                      backgroundColor: '#f4511e', 
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationExample;
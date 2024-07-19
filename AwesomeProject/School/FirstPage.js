// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { useState,createRef } from 'react';
import { Button, View, Text, SafeAreaView,TextInput,Image, TouchableOpacity } from 'react-native';

const FirstPage = ({ navigation }) => {
        const [userEmail,setuserEmail] =useState('');
        const [userPassword,setuserPassword] =useState('');

        const handleSubmitPress =() =>{
            if(!userEmail) {
                alert('Please fill Email');
                return;
            }
            else if(!userPassword) {
                alert('Please Fill Password');
                return;
            }
            else{
                navigation.navigate('NavBottom');
            }
        }
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{alignItems:'center',justifyContent:'center',margin:20}}>
            <Image source={require('../Images/Schoollogo.png')}
            style={{height:200,width:200}}/>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>User Name </Text>
            <TextInput 
            onChangeText={(userEmail) => 
            setuserEmail(userEmail)}
            placeholder='User Name' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>

        <View>
            <Text style={{fontSize:20,color:'black',margin:10}}>Password </Text>
        
            <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',justifyContent:'center',alignItems:'center',margin:10}}>
            <TextInput 
            onChangeText={(userPassword) => 
                setuserPassword(userPassword)}
            secureTextEntry placeholder='Password'style={{margin:10,textAlign:'center',width:'80%'}}></TextInput>
            <TouchableOpacity>
                <Image source={require('../Images/icons8-invisible-24.png')} style={{height:30,width:30,borderWidth:1}}/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={handleSubmitPress}
            //onPress={() =>navigation.navigate('NavBottom')} 
            style={{height:50,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:10,margin:10,marginTop:20,backgroundColor:'#192A56'}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:15}}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')} >
                <Text style={{color:'blue'}}>Have New Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ThirdPage')} >
                <Text style={{color:'blue'}}>Forgot Password</Text>
            </TouchableOpacity>
            </View>
            </View>
    </SafeAreaView>
  );
}

export default FirstPage;
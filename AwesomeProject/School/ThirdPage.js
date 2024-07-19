// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { useState,createRef } from 'react';
import { Button, View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  const[userEmail,setuserEmail] = useState('')

  const handleSubmitPress = () =>{
    if(!userEmail){
      alert('Please Fill Email');
      return
    }
    else{
      navigation.navigate('FirstPage')
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
         <View style={{alignItems:'center',justifyContent:'center',margin:20}}>
            <Image source={require('../Images/Schoollogo.png')}
            style={{height:200,width:200}}/>
        </View>
     <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>User Name or Email </Text>
            <TextInput onChangeText={(userEmail) => setuserEmail(userEmail)} placeholder='User Name or Email' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        
            <TouchableOpacity onPress={handleSubmitPress} style={{justifyContent:'center',alignItems:'center', height:50,borderWidth:1,borderRadius:10,backgroundColor:'#192A56',margin:10}}>
                <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>OK</Text>
            </TouchableOpacity>
    
    </SafeAreaView>
  );
}

export default ThirdPage;
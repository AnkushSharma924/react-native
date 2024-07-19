// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { useState,createRef } from 'react';
import { Button, View, Text, SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native';


const SecondPage = ({ navigation }) => {
    const[userFirstName,setuserFirstName]= useState('');
    const[userLastName,setuserLastName]= useState('');
    const[userAddress,setuserAddress]= useState('')
    const[userPhoneNo,setuserPhoneNo]= useState('')
    const[userEmail,setuserEmail]= useState('')
    const[userPassword,setuserPassword]= useState('')
    const handleSubmitPress = () =>{
        if(!userFirstName){
                alert('Please Fill First Name');
                return;
        }
        else if(!userLastName){
            alert('Please Fill Last Name');
            return;
    }
   else if(!userAddress){
        alert('Please Fill Address');
        return;
}
else if(!userPhoneNo){
    alert('Please Fill PhoneNo');
    return;
}
else if(!userEmail){
    alert('Please Fill Email');
    return;
}
else if(!userPassword){
    alert('Please Fill Password');
    return;
}
else {
    navigation.navigate('FirstPage')
}
    }
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
     <View style={{alignItems:'center',justifyContent:'center',margin:20}}>
            <Image source={require('../Images/Schoollogo.png')}
            style={{height:200,width:200}}/>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>First Name </Text>
            <TextInput onChangeText={(userFirstName) => 
            setuserFirstName(userFirstName)
            } placeholder='First Name' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>Last Name </Text>
            <TextInput onChangeText={(userLastName) => 
            setuserLastName(userLastName)
            } placeholder='Last Name' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>Address </Text>
            <TextInput onChangeText={(userAddress) => 
            setuserAddress(userAddress)
            } placeholder='Address' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}>PhoneNo. </Text>
            <TextInput onChangeText={(userPhoneNo) => 
            setuserPhoneNo(userPhoneNo)
            } placeholder='PhoneNo.' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}> Email </Text>
            <TextInput onChangeText={(userEmail) => 
            setuserEmail(userEmail)
            } placeholder='Email' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
        <View style={{margin:10}}>
            <Text style={{fontSize:20,color:'black'}}> Password </Text>
            <TextInput onChangeText={(userPassword) => 
            setuserPassword(userPassword)
            } placeholder='Password' style={{height:50,borderWidth:1,borderRadius:10,marginTop:20,textAlign:'center'}}></TextInput>
        </View>
            <TouchableOpacity onPress={handleSubmitPress} style={{height:50,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:10,margin:10,backgroundColor:'#192A56'}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Login</Text>
            </TouchableOpacity>
            </ScrollView>
    </SafeAreaView>
  );
}

export default SecondPage;
import React, { useState } from "react";
import {Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';

function HomeWork1({navigation}){
    const[userHomeId,setuserHomeId]=useState('');
    const[userHomeName,setuserHomeName]=useState('');
    const[userDiscription,setuserDiscription]=useState('');
    const handleSubmitPress = () =>{
        if(!userHomeId){
            alert('Please Fill HomeWork Id');
            return;
        }
        else if(!userHomeName){
            alert('Please Fill HomeWork Name');
            return;
        }
        else if(!userDiscription){
            alert('Please Fill Discription');
            return;
        }
        else{
            navigation.navigate('Homework');
        }
    }
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:17,margin:10}}>HomeWork Id</Text>
            <TextInput onChangeText={(userHomeId) => setuserHomeId(userHomeId)} placeholder="Enter Id" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>HomeWork Name</Text>
            <TextInput onChangeText={(userHomeName) => setuserHomeName(userHomeName)} placeholder="Enter Name" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>Description</Text>
            <TextInput onChangeText={(userDiscription) => setuserDiscription(userDiscription)} style={{borderWidth:1,margin:10,height:270,borderRadius:10,textAlign:'center' }}></TextInput>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress={handleSubmitPress} style={{backgroundColor:'#42f44b',height:60,width:100,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmitPress} style={{backgroundColor:'#42f44b',height:60,width:100,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Delete</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Homework')} style={{backgroundColor:'#42f44b',height:60,width:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
export default HomeWork1;
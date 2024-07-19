import React, { useState } from "react";
import {Text,View,TextInput,TouchableOpacity,ScrollView} from 'react-native';

function Events({navigation}){
    const[userEventId,setuserEventId] = useState('');
    const[userEventName,setuserEventName] = useState('');
    const[userDiscription,setuserDiscription] = useState('');

    const handleSubmitPress =() =>{
        if(!userEventId){
            alert('Please fill Event Id');
            return;
        }
        else if(!userEventName){
            alert('Please Fill Event Name');
            return;
        }
        else if(!userDiscription){
            alert('Please fill Event Discription');
                return;
        }
        else{
            navigation.navigate('ShowEvent');
        }
    }
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:17,margin:10}}>Event Id</Text>
            <TextInput onChangeText={(userEventId) => setuserEventId(userEventId)} placeholder="Enter Id" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>Event Name</Text>
            <TextInput onChangeText={(userEventName) => setuserEventName(userEventName)} placeholder="Enter Event Name" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>Event Description</Text>
            <TextInput onChangeText={(userDiscription) => setuserDiscription(userDiscription)} style={{borderWidth:1,margin:10,height:270,borderRadius:10,textAlign:'center' }}></TextInput>
            <TouchableOpacity onPress={handleSubmitPress} style={{backgroundColor:'#42f44b',height:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ShowEvent')} style={{backgroundColor:'#42f44b',height:60,width:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
export default Events;
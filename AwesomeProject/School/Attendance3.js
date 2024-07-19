import React, { useState } from "react";
import {View,TextInput,TouchableOpacity,Text} from 'react-native';

function Attendance3({navigation}) {
    const[userRollNo,setuserRollNo] = useState('');
    const[userDate,setuserData] = useState('');
    const handleSubmitPress = () =>{
        if(!userRollNo){
            alert('Please Enter RollNo');
            return;
        }
       else if(!userDate){
            alert('Please Enter Date');
            return;
        }
        else{
            navigation.navigate('Attendance');
        }
    }
    return(
        <View>
            <Text style={{fontSize:15,margin:10}}>Roll No.</Text>
            <TextInput onChangeText={(userRollNo) => setuserRollNo(userRollNo)} placeholder="Enter Roll No" style={{margin:10,height:50,borderRadius:10,borderWidth:1,textAlign:'center'}}></TextInput>
            <Text style={{fontSize:15,margin:10}}>Date</Text>
            <TextInput onChangeText={(userDate) => setuserData(userDate)} placeholder="Enter Roll No" style={{margin:10,height:50,borderRadius:10,borderWidth:1,textAlign:'center'}}></TextInput>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
                <TouchableOpacity onPress={handleSubmitPress} style={{height:60,width:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                    <Text style={{color:'white'}}>Present</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmitPress} style={{height:60,width:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                    <Text style={{color:'white'}}>Leave</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmitPress} style={{height:60,width:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                    <Text style={{color:'white'}}>Absent</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmitPress} style={{height:60,borderRadius:15,backgroundColor:'#42f44b',justifyContent:'center',alignItems:'center',margin:10}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Save</Text>
            </TouchableOpacity>
        </View>
    )
};
export default Attendance3;
import React, { useState } from "react";
import {Text, View,TextInput, TouchableOpacity,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function ShowExamination({navigation}){
    const [choosenlabel,setchoosenlabel] =useState(' ');
    const [choosenIndex,setchoosenIndex] =useState('0');
    const [userRollNo,setuserRollNo] = useState('');
    const [userDate,setuserDate] = useState('');
    const [userMarks,setuserMarks] = useState('');
    const [userTotal,setuserTotal] = useState('');
    const [userGrade,setuserGrade] = useState('');
    const handleSubmitPress =() =>{
        if(!userRollNo){
            alert('Please fill RollNo');
            return;
        }
       else if(!userDate){
            alert('Please fill Date');
            return;
        }
       else if(choosenIndex ==='0'){
            alert('Please select Semester');
            return;
        }
        else if(!userMarks){
            alert('Please fill Marks');
            return;
        }
        else if(!userTotal){
            alert('Please fill Total');
            return;
        }
        else if(!userGrade){
            alert('Please fill Grade');
            return;
        }
        else{
            navigation.navigate('Examination');
        }
    }
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:15,margin:10}}>Roll No.</Text>
            <TextInput onChangeText={(userRollNo) => setuserRollNo(userRollNo)} placeholder="Enter Roll No" style={{height:60,borderWidth:1,borderRadius:10,margin:10,textAlign:'center'}}></TextInput>
            <Text style={{fontSize:15,margin:10}}>Date</Text>
            <TextInput onChangeText={(userDate) => setuserDate(userDate)} placeholder="Enter Date" style={{height:60,borderWidth:1,borderRadius:10,margin:10,textAlign:'center'}}></TextInput>
            <Text style={{fontSize:15,margin:10}}>Semester</Text>
            <View style={{height:60,borderWidth:1,borderRadius:10,margin:10}}>
            <Picker 
            selectedValue={choosenlabel}
            onValueChange={(itemValue,itemIndex) => {
                setchoosenlabel(itemValue)
                setchoosenIndex(itemIndex)
            }}
            >
                <Picker.Item label=" " value=" "/>
            <Picker.Item label="Semester1" value="Semester1" />
          <Picker.Item label="Semester2" value="Semester2" />
          <Picker.Item label="Semester3" value="Semester3" />
          <Picker.Item label="Semester4" value="Semester4" />
          <Picker.Item label="Semester5" value="Semester5" />
          <Picker.Item label="Semester6" value="Semester6" />
            </Picker>
            </View>
            <Text style={{fontSize:15,margin:10}}>Marks Obtained</Text>
            <TextInput onChangeText={(userMarks) => setuserMarks(userMarks)} placeholder=" Enter Marks Obtained" style={{height:60,borderWidth:1,borderRadius:10,margin:10,textAlign:'center'}}></TextInput>
            <Text style={{fontSize:15,margin:10}}>Total</Text>
            <TextInput onChangeText={(userTotal) => setuserTotal(userTotal)} placeholder="Enter Total" style={{height:60,borderWidth:1,borderRadius:10,margin:10,textAlign:'center'}}></TextInput>
            <Text style={{fontSize:15,margin:10}}>Grade</Text>
            <TextInput onChangeText={(userGrade) => setuserGrade(userGrade)} placeholder="Enter Grade" style={{height:60,borderWidth:1,borderRadius:10,margin:10,textAlign:'center'}}></TextInput>
            <View style={{margin:10}}>
                <TouchableOpacity onPress={handleSubmitPress} style={{height:60,borderRadius:10,backgroundColor:'#42f44b',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:17,color:'white'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
};
export default ShowExamination;
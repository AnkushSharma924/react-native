import React from "react";
import {Text,View,TextInput,TouchableOpacity,ScrollView} from 'react-native';

function ShowHomeWork({navigation}){
    return(
        <ScrollView>
        <View>
            <Text style={{fontSize:17,margin:10}}>HomeWork Id</Text>
            <TextInput placeholder="Enter Id" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>HomeWork Name</Text>
            <TextInput placeholder="Enter HomeWork Name" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>Description</Text>
            <TextInput style={{borderWidth:1,margin:10,height:270,borderRadius:10,textAlign:'center' }}></TextInput>
            <TouchableOpacity style={{backgroundColor:'#42f44b',height:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Homework')} style={{backgroundColor:'#42f44b',height:60,width:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
export default ShowHomeWork;
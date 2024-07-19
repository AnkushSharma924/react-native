import React from "react";
import {Text,View,TextInput,TouchableOpacity} from 'react-native';

function SchoolNews(){
    return(
        <View>
            <Text style={{fontSize:17,margin:10}}>News Id</Text>
            <TextInput placeholder="Enter Id" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>News Title</Text>
            <TextInput placeholder="Enter Title" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>News Description</Text>
            <TextInput style={{borderWidth:1,margin:10,height:270,borderRadius:10,textAlign:'center' }}></TextInput>
            <TouchableOpacity style={{backgroundColor:'#42f44b',height:60,borderRadius:10,alignItems:'center',justifyContent:'center',margin:10}}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
};
export default SchoolNews;
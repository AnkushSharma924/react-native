import React from "react";
import {Text,View,TextInput,TouchableOpacity} from 'react-native';

function Gallery(){
    return(
        <View>
            <Text style={{fontSize:17,margin:10}}>Gallery Id</Text>
            <TextInput placeholder="Enter Id" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
            <Text style={{fontSize:17,margin:10}}>Gallery Name</Text>
            <TextInput placeholder="Enter Event Name" style={{borderWidth:1,margin:10,height:60,borderRadius:10,textAlign:'center' }}></TextInput>
        </View>
    )
};
export default Gallery;
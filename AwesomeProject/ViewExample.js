import React from "react";
import{View,Text,TextInput,Button} from "react-native";

function ViewExample()
{
    return(
        <View style={{flex:1,flexDirection:"column"}}>
            <View style={{backgroundColor:'red',flex:1}}></View>
            <View style={{backgroundColor:'green',flex:1}}></View>
            <View style={{backgroundColor:'blue',flex:1}}></View>
        </View>
    );
}
export default ViewExample;
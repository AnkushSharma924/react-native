import React from "react";
import{View,Text,StyleSheet,Button,TextInput} from "react-native";

function calculator(){
    return(
        <>
        <View style={{backgroundColor:'grey'}}>
        <View style={{backgroundColor:'grey'}}>
       <TextInput style={{borderWidth:2,height:70,width:370,margin:20,borderColor:'balck',backgroundColor:'white',paddingHorizontal:50}}></TextInput>
        </View>
        <View style={{margin:10,flexDirection:'row',borderWidth:2,justifyContent:'space-between'}}>
            <Button title="1"></Button>
            <Button title="2"></Button>
            <Button title="3"></Button>
            <Button title="+"></Button>
        </View>
        <View style={{margin:10,flexDirection:'row',borderWidth:2,justifyContent:'space-between'}}>
            <Button title="4"></Button>
            <Button title="5"></Button>
            <Button title="6"></Button>
            <Button title="-"></Button>
        </View>
        <View style={{margin:10,flexDirection:'row',borderWidth:2,justifyContent:'space-between'}}>
            <Button title="7"></Button>
            <Button title="8"></Button>
            <Button title="9"></Button>
            <Button title="*"></Button>
        </View>
        <View style={{margin:10,flexDirection:'row',borderWidth:2,justifyContent:'space-between'}}>
            <Button title="="></Button>
            <Button title="0"></Button>
            <Button title="C"></Button>
            <Button title="/"></Button>
        </View>
        </View>
        </>


    );
};
export default calculator;
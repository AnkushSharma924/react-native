import React from "react";
import{View,Text,TextInput,Button} from "react-native";

function StyleSheet1(){
    return(
        <>
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flexDirection:'row',flex:1,}}>
                <View style={{flex:1,backgroundColor:'blue'}}></View>
                <View style={{flex:1,backgroundColor:'red'}}></View>
            </View>
            <View style={{flexDirection:'row',flex:1,}}>
                <View style={{flex:1,backgroundColor:'red'}}></View>
                <View style={{flex:1,backgroundColor:'blue'}}></View>
            </View>
            <View style={{flexDirection:'row',flex:1,}}>
                <View style={{flex:1,backgroundColor:'blue'}}></View>
                <View style={{flex:1,backgroundColor:'red'}}></View>
            </View>
        </View>
        </>
    );
};
export default StyleSheet1;
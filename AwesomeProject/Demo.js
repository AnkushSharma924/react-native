import React from "react";
import{View,Text,StyleSheet} from "react-native";

function Demo(){
    return(
        <View style={anku.box}>
         <View style={anku.red}>Name</View>
         <View style={anku.blue}>Class</View> 
         <View style={anku.green}>Adress</View>
         <View style = {{padding:5}}>
            <button title="OK"></button>
         </View>
        </View>
    );
};
export default Demo;


const anku = StyleSheet.create(
    {
        box:{flex:1},
    red:{backgroundColor:'red',flex:1},
    blue:{backgroundColor:'blue',flex:1},
    green:{backgroundColor:'green',flex:1},
    }
);
import React from "react";
import{View,Text,TextInput,StyleSheet} from "react-native";

function StyleSheet2(){
    return(
        <>
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flexDirection:'row',flex:1,}}>
                <View style={styles.red}></View>
                <View style={styles.blue}></View>
            </View>
            <View style={{flexDirection:'row',flex:1,}}>
            <View style={styles.blue}></View>
            <View style={styles.red}></View>
            </View>
            <View style={{flexDirection:'row',flex:1,}}>
            <View style={styles.red}></View>
            <View style={styles.blue}></View>
            </View>
        </View>
        </>
    );
};
export default StyleSheet2;

const styles = StyleSheet.create({
    blue:{
        backgroundColor:'blue',
        borderWidth:4,
        borderColor:'white',
        flex:1,
    },
    red:{
        backgroundColor:'red',
        borderWidth:4,
        borderColor:'yellow',
        flex:1,
    },
});
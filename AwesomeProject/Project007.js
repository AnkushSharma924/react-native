import React from "react";
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image } from 'react-native';

function App(){
    return(
        <>
        <View style={{flex:.5,margin:5,borderWidth:1,alignItems:'center'}}>
            <View style={{height:100,width:100,borderWidth:2}}></View>
        </View>
        <View style={{flex:2,margin:5,borderWidth:1,flexDirection:'row',alignItems:'center'}}>
        <View style={{height:100,width:100,borderWidth:2}}></View>
        <View style={{height:100,width:100,borderWidth:2,marginLeft:200}}></View>
        </View>
        <View style={{flex:.5,margin:5,borderWidth:1,alignItems:'center'}}>
        <View style={{height:100,width:100,borderWidth:2,marginTop:'auto'}}></View>
        </View>
        </>
    );
};
export default App;


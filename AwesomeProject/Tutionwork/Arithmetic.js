import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

function Arithmetic(){
    const[Number1,setNumber1]=useState(0);
    const[Number2,setNumber2]=useState(0);
    const[Result,setResult]=useState(0);

    function Sum(){
        const newResult =Number1+Number2;
        setResult(newResult);
    }
    function Sub(){
        const newResult =Number1-Number2;
        setResult(newResult);
        //Alert.alert('ALert', 'Sub is :' + newResult);
    }
    function Mul(){
        const newResult =Number1*Number2;
        setResult(newResult);
    }
    function Div(){
        const newResult =Number1/Number2;
        setResult(newResult);
    }
    return(
            <View>
                <View>
                <Text style={styles.headingtext}>Number 1</Text>
                <TextInput 
                type='number' 
                placeholder="0" 
                value={Number1} 
                onChangeText={
                 Number1=>{setNumber1(Number.parseInt(Number1));}}
                style={styles.inputNumber}/>  
                </View>
                <View style={{marginTop:20}}>
                <Text style={styles.headingtext}>Number 2</Text>
                <TextInput 
                type='number' 
                placeholder="0" 
                value={Number2} 
                onChangeText={
                 Number2=>{setNumber2(Number.parseInt(Number2));}} style={styles.inputNumber}/> 
                </View>
                <View style={styles.buttonprops}>
                    <TouchableOpacity onPress={Sum} style={styles.touchablestyle}>
                        <Text style ={styles.imagestyle}> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Sub} style={styles.touchablestyle}>
                        <Text style ={styles.imagestyle}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Mul}style={styles.touchablestyle}>
                        <Text style ={styles.imagestyle}> * </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Div} style={styles.touchablestyle}>
                        <Text style ={styles.imagestyle}> / </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headingtext}>Result</Text>
                   
                </View>
                <Text style={{borderBottomWidth:1,textAlign:'center', marginVertical:20}}>{Result}</Text>
            </View>
    );
};
export default Arithmetic;

const styles=StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'600',
        color:'black',
        paddingHorizontal:10
    },
    inputNumber:{
        borderColor:'black',
        borderBottomWidth:1,
        margin:5,
        textAlign:'center'
    },
    buttonprops:{
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between',
        alignItems:'center', 
    },
    touchablestyle:{
        borderRadius:60,
        width:60,
        height:60,
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    },
    imagestyle:{
        fontSize:25
    }
})

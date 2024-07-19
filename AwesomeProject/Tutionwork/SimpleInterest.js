import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

function SimpleInterest(){
    const[P,setPrinciple]=useState(0);
    const[R,setRate]=useState(0);
    const[T,setTime]=useState(0);
    const[SI,setSI]=useState(0);
    const[Total,setTotal]=useState(0);
    function simple(){
        const SI =(P*R*T)/100;
        const Total=SI+P;
        setSI(SI);
        setTotal(Total);
       // Alert.alert('Alert', 'Total is:' );
    }
    return(
        <View style={styles.maincontainer}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> P </Text>
                </View>
                <View>
                <TextInput 
                type='number'
                placeholder="0"
                value={P}
                onChangeText={P =>{
                    setPrinciple(Number.parseInt(P));
                }}
                style={styles.inputtext}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> R </Text>
                </View>
                <View>
                <TextInput 
                type='number'
                placeholder="0"
                value={R}
                onChangeText={R =>{
                    setRate(Number.parseInt(R));
                }}
                style={styles.inputtext}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> T </Text>
                </View>
                <View>
                <TextInput 
                type='number'
                placeholder="0"
                value={T}
                onChangeText={T =>{
                    setTime(Number.parseInt(T));
                }}
                style={styles.inputtext}/>
            </View>
            </View>
            <View style={styles.buttonprops}>
                <TouchableOpacity onPress={simple} style={styles.touchablestyle}>
                    <Text style={{fontSize:15}}> Calculator </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{marginBottom:5,flex:0.5}}>
                <Text style={styles.headingtext}> SI </Text>
            </View>
            <View style={{alignSelf:'center',flex:0.2}}>
            <Text style={{borderBottomWidth:2,width:200,textAlign:'center',alignSelf:'center'}}>{SI}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{marginBottom:5,flex:0.5}}>
                <Text style={styles.headingtext}> Total </Text>
            </View>
            <View style={{alignSelf:'center',flex:0.2}}>
            <Text style={{borderBottomWidth:2,width:200,textAlign:'center',alignSelf:'center'}}>{Total}</Text>
            </View>
            </View>
            
        </View>
    );
};
export default SimpleInterest;

const styles=StyleSheet.create({
    maincontainer:{
        backgroundColor:'coral',
        height:500,
        width:360,
        marginVertical:16,
        marginHorizontal:20,
        borderRadius:20,
        elevation:3,
        shadowOffset:{
            width:3,
            height:3
        },
        paddingBottom:20
    },
    container:{
        flex:0.5,
        flexDirection:'row',
        marginLeft:8
    },
    headingtext:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        paddingVertical:20
    },
    inputtext:{
        borderColor:'black',
        borderBottomWidth:2,
        width:200,
        marginLeft:30,
        marginBottom:20,
        textAlign:'center'
    },
    buttonprops:{
        padding:20,
        justifyContent:'space-between',
        alignItems:'center', 
    },
    touchablestyle:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        padding:15
    }
})
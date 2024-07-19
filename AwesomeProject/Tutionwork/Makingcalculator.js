import React from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

function Makingcalculator(){
    return(
        <View>
            <View style={styles.container}>
                <View>
                <TextInput style={styles.inputtext}></TextInput>
                </View>
                <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>()</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>/</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>*</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:50,fontWeight:'bold',color:'green'}}>-</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>0</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>( )</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>/</Text>
                </TouchableOpacity>
            </View>
            <View style= {styles.maincontainer}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',}}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
};
export default Makingcalculator;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:390,
        height:750,
        marginVertical:16,
        marginHorizontal:10,
        borderRadius:10,
        elevation:3,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowColor:'#0A79DF'
    },
    maincontainer:{
        padding:5,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    headingtext:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'black'
    },
    inputtext:{
        height:200,
        textAlign:'right',
        fontSize:50,
        backgroundColor:'white',
        borderBottomWidth:1

    },
    touchablestyle:{
        borderRadius:80,
        width:80,
        height:80,
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
    }
})
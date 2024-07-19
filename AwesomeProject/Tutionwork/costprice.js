import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput, ScrollView} from 'react-native';

function costprice(){
    
    return(
        <ScrollView>
        <View style={styles.maincontainer}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> ITEM </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> Rate </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={styles.buttonprops}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:15}}> Calculator </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> Total </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> Discount </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={styles.buttonprops}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:15}}> Calculator </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> NetTotal </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> GST </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> Discount </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={styles.buttonprops}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:15}}> Calculator </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> GSTValue </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Text style={styles.headingtext}> Grand </Text>
                </View>
                <View style={{flex:0.8}}>
                <TextInput style={styles.inputtext}></TextInput>
            </View>
            </View>
            <View style={styles.buttonprops}>
                <TouchableOpacity style={styles.touchablestyle}>
                    <Text style={{fontSize:15}}> Calculator </Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
    );
};
export default costprice;

const styles=StyleSheet.create({
    maincontainer:{
        backgroundColor:'#53E0BC',
        height:950,
        width:400,
        marginVertical:8,
        marginHorizontal:5,
        borderRadius:20,
        elevation:3,
        shadowOffset:{
            width:3,
            height:3
        }
    },
    container:{
        flex:0.2,
        flexDirection:'row',
        marginLeft:8,
        marginVertical:10
    },
    headingtext:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        paddingVertical:10
    },
    inputtext:{
        flex:0.7,
        borderColor:'black',
        borderBottomWidth:2,
        width:200,
        marginLeft:30,
        marginBottom:20
    },
    buttonprops:{
        padding:20,
        justifyContent:'space-between',
        alignItems:'center', 
    },
    touchablestyle:{
        backgroundColor:'#758AA2',
        alignItems:'center',
        justifyContent:'center',
        padding:15
    }
})
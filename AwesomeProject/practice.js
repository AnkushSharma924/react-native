import React from "react";
import{View,Text,TextInput,StyleSheet, ScrollView} from "react-native";

function practice(){
        return(
            <ScrollView>
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={styles.yellow}>
                    <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25}}>Name</Text>
                    <TextInput placeholder={"Enter Your FullName"} style={{borderWidth:2,borderRadius:50,borderColor:'black',height:50,margin:5,paddingHorizontal:50,backgroundColor:'white'}}></TextInput>
                </View>
                <View style={styles.orange}>
                    <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25}}>Class</Text>
                    <TextInput style={{borderWidth:2,borderRadius:50,borderColor:'black',height:50,margin:5,paddingHorizontal:50,backgroundColor:'white'}}></TextInput>
                </View>
                <View style={styles.red}>
                    <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25}}>RollNo</Text>
                    <TextInput style={{borderWidth:2,borderRadius:50,borderColor:'black',height:50,margin:5,paddingHorizontal:50,backgroundColor:'white'}}></TextInput>
                </View>
                <View style={styles.violet}>
                    <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25}}>Section</Text>
                    <TextInput style={{borderWidth:2,borderRadius:50,borderColor:'black',height:50,margin:5,paddingHorizontal:50,backgroundColor:'white'}}></TextInput>
                </View>
                <View style={styles.coral}>
                    <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25}}>Address</Text>
                    <TextInput multiline style={{borderWidth:2,borderRadius:25,borderColor:'black',height:150,margin:10,paddingHorizontal:50,backgroundColor:'white'}}></TextInput>
                </View>
            </View>
            </ScrollView>
        );
};
export default practice;

const styles = StyleSheet.create({
    yellow:{
        backgroundColor:'yellow',
        borderWidth:4,
       // borderColor:'white',
        flex:1,
        
    },
    orange:{
        backgroundColor:'orange',
        borderWidth:4,
       // borderColor:'yellow',
        flex:1,
    
    },
    red:{
        backgroundColor:'red',
        borderWidth:4,
       // borderColor:'black',
        flex:1,
    
    },
    violet:{
        backgroundColor:'violet',
        borderWidth:4,
       // borderColor:'black',
        flex:1,
    
    },
    coral:{
        backgroundColor:'coral',
        borderWidth:4,
       // borderColor:'black',
        flex:1,
    },
});
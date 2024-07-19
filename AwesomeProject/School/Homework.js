import React from "react";
import{View,Text,TextInput,TouchableOpacity} from 'react-native';


const HomeWork = ({navigation}) =>{
    return(
        <>
        <View style={{alignItems:'flex-end',margin:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowHomeWork')} style={{height:60,width:60,borderRadius:60,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeWork1')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>HomeWork1</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeWork2')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>HomeWork2</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeWork3')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>HomeWork3</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};
export default HomeWork;
import React from "react";
import{View,Text,TextInput,TouchableOpacity} from 'react-native';

const ShowEvent = ({navigation}) =>{
    return(
        <>
        <View style={{alignItems:'flex-end',margin:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Events')} style={{height:60,width:60,borderRadius:60,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('EditEvent')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>BirthDay</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('AnnualFunction')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Annual Function</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('SportsDay')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Sports Day</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};
export default ShowEvent;
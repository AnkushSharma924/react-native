import React from "react";
import{View,Text,TextInput,TouchableOpacity} from 'react-native';


const Examination = ({navigation}) =>{
    return(
        <>
        <View style={{alignItems:'flex-end',margin:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowExamination')} style={{height:60,width:60,borderRadius:60,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowExamination')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Examination1</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowExamination')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Examination2</Text>
            </TouchableOpacity>
        </View>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowExamination')} style={{height:60,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#42f44b',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Examination3</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};
export default Examination;
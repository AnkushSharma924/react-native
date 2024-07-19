import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

function Page2({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'black',textAlign:'center'}}>This is the Second Page of the app</Text>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'blue'}}>Go back</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.replace('Page3',{
                    someParam:'Param',
                })}>
                    <Text style={{color:'blue'}}>Replace this Screen with the Third Page </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.reset({
                    index:0,
                    routes:[
                        {
                            name:'Page3',
                            params : { someParam: 'reset' },
                        },
                    ],
                })}>
                    <Text style={{color:'blue'}}>Reset navigator state to Third Page</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
                    <Text style={{color:'blue'}}>Go to First Page</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.navigate(
                    'Page3', {someParam: 'Ankush',Company:'www.google.com'}
                )}>
                    <Text style={{color:'blue'}}>Go to Third Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Page2;
import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

function Page3({route,navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'black',textAlign:'center'}}>This is the Third Page of the App {'\n'}
            {route.params.someParam}
            {'\n'}
            {route.params.Company}
             </Text>
            <View style={{marginTop:12}}>
            { route.params.someParam != 'reset' ?(
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'blue'}}>Go back</Text>
                </TouchableOpacity>
              )  :null}
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
                    <Text style={{color:'blue'}}>Go to Second Page </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.reset({
                    index:0,
                    routes:[
                        {
                            name:'Page1',
                            params:{someParam:'reset'},
                        },
                    ],
                })}>
                    <Text style={{color:'blue'}}>Reset navigator to First Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Page3;
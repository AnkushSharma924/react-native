import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

function Page1({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'black',textAlign:'center'}}>This is the First Page of the app</Text>
            <View style={{marginTop:12}}>
                <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
                    <Text style={{color:'blue'}}>Go to the Second Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Page1;
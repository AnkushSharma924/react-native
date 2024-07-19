import React from "react";
import{View,Text,TextInput,Button} from "react-native";

function ViewExample1()
{
    return(
        <> 
         <View style={{flexDirection:"row",margin:5}}>      
            <Text style={{flex:.5}}>First Name</Text>
            <TextInput style={{flex:1,borderWidth:1}}></TextInput>
        </View>
        <View style={{flexDirection:"row",margin:5}}>      
            <Text style={{flex:.5}}>Last Name</Text>
            <TextInput style={{flex:1,borderWidth:1}}></TextInput>
      </View>
      </>
    );
}
export default ViewExample1;
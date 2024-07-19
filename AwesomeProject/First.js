import React from "react";
import{View,Text,TextInput,Button} from "react-native";

function First()
{
    return(
        <>
        <View>
            <Text>RollNo</Text>
            <TextInput style={{borderWidth:2,margin:5,borderRadius:50,borderColor:"red"}}></TextInput>
        </View>
        <View>
            <Text>Name</Text>
            <TextInput style={{borderWidth:2,margin:5,borderRadius:50,borderColor:"violet"}}></TextInput>
        </View>
        <View>
            <Text>Class</Text>
            <TextInput style={{borderWidth:2,margin:5,borderRadius:50,borderColor:"orange"}}></TextInput>
        </View>
        <View>
            <Text>Address</Text>
            <TextInput style={{borderWidth:2,margin:5,borderRadius:50,borderColor:"pink"}}></TextInput>
        </View>
        <View style={{padding:5}}>
            <Button title="Save"></Button>
        </View>
        </>
    );
}
export default First;
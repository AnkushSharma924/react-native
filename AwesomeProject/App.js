import React from "react";
import{View,Text,TextInput,Button} from "react-native";

function App()
{
  return(
    <>
    <View>
      <Text>RollNo</Text>
      <TextInput style={{borderColor:"red",borderRadius:50,borderWidth:2,margin:5}}></TextInput>
    </View>
    <View>
      <Text>Name</Text>
      <TextInput style={{borderColor:"orange",borderRadius:50,borderWidth:2,margin:5}}></TextInput>
    </View>
    <View>
      <Text>Class</Text>
      <TextInput style={{borderColor:"pink",borderRadius:50,borderWidth:2,margin:5}}></TextInput>
    </View>
    <View style={{padding:5}}>
      <Button title="Save"></Button>
    </View>
  </>
  );
}

export default App;
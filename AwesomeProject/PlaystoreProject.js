import React from "react";
import {View, Text, TextInput, ScrollView, SafeAreaView} from 'react-native';

function App(){
    return(
        <SafeAreaView>
            <ScrollView>
                
                    <View style={{margin:5,flexDirection:'row'}}>
                        <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'pink',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>Facebook</Text>
                        </View>
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Facebook</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Social.Networking</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'green',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>JioMart</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>JioMart</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Shopping.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'orange',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>Byjus</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Byjus</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Edutech.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'blue',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>CultFit</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>CultFit</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Sports & Fitness.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'red',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>Zomato</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Zomato</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Food delivery.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'coral',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>PUBG</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>PUBG</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Gaming.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'violet',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>HotStar</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>HotStar</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Entertainment.App</Text>
                        </View>
                    </View>
                    <View style={{margin:5,flexDirection:'row'}}>
                    <View style={{margin:5, height:100, width:100, borderWidth:2,backgroundColor:'indigo',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>What's App</Text>
                        </View> 
                        <View style={{margin:10, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>What's App</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Texting.App</Text>
                        </View>
                    </View>
                
            </ScrollView>
        </SafeAreaView>
    );
};;
export default App;
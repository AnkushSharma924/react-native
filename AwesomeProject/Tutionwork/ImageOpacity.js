import React from "react";
import {View,Text,SafeAreaView,StyleSheet,Image} from 'react-native';

const App = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Original</Text>
                <Image source={{
                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                }}
                style={{
                    width:200,
                    height:200,
                    resizeMode:'center',
                }}
                />
                <Text>With Alpha Opacity</Text>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                }}
                style={{
                    width:200,
                    height:200,
                    resizeMode:'center',
                    opacity:0.2,
                }}
                />
            </View>
        </SafeAreaView>
    );
};
export default App;

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        marginTop:30,
        padding:30,
        alignItems:'center',
    },
});
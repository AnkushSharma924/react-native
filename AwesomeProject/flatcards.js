import React from 'react';
import { StyleSheet,View,Text, ScrollView, Image } from 'react-native';

function Flatcards(){
    return(
        <View>
            <Text style={styles.headingtext}>Flat Cards</Text>
            <ScrollView horizontal={true}>
            <View style={styles.container}>
                <View style={styles.card}>
                   <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
                <View style={styles.card}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                   }}
                   style={{ width:100,height:100,borderRadius:5,}}
                   />
                </View>
            </View>
            </ScrollView>
        </View>
    );
};
export default Flatcards;

const styles = StyleSheet.create({
    headingtext: {
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'black'
    },
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:8
    },
    card:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:8
    }  
})
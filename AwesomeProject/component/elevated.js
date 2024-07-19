import React from "react";
import { ScrollView,StyleSheet,View,Text } from "react-native";


function elevated(){
    return(
        <View>
            <Text style={styles.headingtext}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>Explore</Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>and more..</Text>
                </View>
                
            </ScrollView>
        </View>
    );
};
export default elevated;

const styles = StyleSheet.create({
    headingtext: {
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'black'
    },
    container: {
        padding:8
    },
    card:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:8
    },
    cardelevated:{
        backgroundColor:'grey'
    }
})
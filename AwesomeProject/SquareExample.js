import React from "react";
import {View,Text,StyleSheet, Image, ScrollView, TextInput} from 'react-native';

function SquareExample(){
    return(
        <>
        <ScrollView>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/1.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Robert downey Jr.</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>Yesterday</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/2.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Chris Evans</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>9:33am</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/3.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Chris Hemsworth</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>10:45pm</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/4.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Mark Ruffalo</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>3:16am</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/5.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Benedict Cumberbatch</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>2:45pm</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/1.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Robert downey Jr.</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>Yesterday</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/2.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Chris Evans</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>9:33am</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/3.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Chris Hemsworth</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>10:45pm</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/4.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Mark Ruffalo</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>3:16am</Text>
            </View>
        </View>
        <View style={styles.Maincontainer}>
            <View style={styles.container}>
                <Image source={
                    require('./Images/5.jpg')
                } style={{height:100,width:100,borderRadius:360}}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={{fontSize:20,color:'blue'}}>Benedict Cumberbatch</Text>
            </View>
            <View style={styles.innercontainer2}>
                <Text style={{fontSize:15,color:'black'}}>2:45pm</Text>
            </View>
        </View>
        </ScrollView>
        </>
    )
}
export default SquareExample;

const styles=StyleSheet.create({
    Maincontainer:{
        flexDirection:'row',
        height:100,
        justifyContent:'space-between',
        marginVertical:10
    },
    container:{
        flex:0.5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
       
    },
    innercontainer:{
        flex:1,
       
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    innercontainer2:{
        flex:0.5,
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center'
    }
})
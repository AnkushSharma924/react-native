import React from "react";
import {View,Text,SafeAreaView,Image,Linking,StyleSheet,TouchableOpacity} from 'react-native'


function Actioncard(){
    function openWebsite(websitelink){
        Linking.openURL(websitelink)
    }
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.headingtext}>Blog Cards</Text>
                <View style={[styles.card,styles.elevatedcard]}>
                    <View style={styles.headingcontainer}>
                    <Text style={styles.headertext}>
                    What's new in Javascript 21 - ES12
                    </Text>
                    </View>
                    <Image source={{
                    uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
                style={styles.cardImage}/>
                <View style={styles.bodycontainer}>
                <Text numberOfLines={4}>
                Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
                </Text>
                </View>
                <View style={styles.footerconatiner}>
                    <TouchableOpacity 
                    onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                        <Text style={styles.sociallinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=> openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
                        <Text style={styles.sociallinks}>
                            Follow me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
};
export default Actioncard;

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'black',
        marginLeft:100
    },
    card:{
        height:375,
        width:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedcard:{
        backgroundColor:'coral',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'balck',
        shadowOpacity:0.4
        
    },
    headingcontainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        fontSize:15,
        fontWeight:'600',
        color:'black'
    },
    cardImage:{
        height:190
    },
    bodycontainer:{
        padding:10
    },
    footerconatiner:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    sociallinks:{
        fontSize:16,
        paddingHorizontal:20,
        paddingVertical:6,
       marginBottom:'auto',
        borderRadius:6,
        color: '#000000',
        backgroundColor: '#FFF',
    }


})
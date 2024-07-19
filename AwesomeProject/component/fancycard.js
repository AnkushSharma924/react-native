import React from "react";
import { Image,StyleSheet,View,Text } from "react-native";

function Fancycard(){
        return(
            <View>
                <Text style={styles.headingtext}>Trending Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{
                        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                    }} style={styles.cardImage}
                    />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City,Jaipur</Text>
                    <Text style={styles.cardDiscription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
                </View>
            </View>
        );
};
export default Fancycard;

const styles=StyleSheet.create({
    headingtext:{
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'black'
    },
    card:{

        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: 'blue',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
       flexGrow:1,
        paddingHorizontal:10
    },
    cardTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6
    },
    cardDiscription:{
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: 'black',
        marginLeft:200
    }

})

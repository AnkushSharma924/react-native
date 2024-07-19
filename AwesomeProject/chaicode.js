import React from "react";
import {View,Text,StyleSheet,SafeAreaView,ScrollView,useColorScheme} from 'react-native';

function App(){
        const isdarkmode = useColorScheme() === 'dark'
            return(
                <View style={styles.container}>
                    <Text style={isdarkmode ? styles.darkText : styles.darkText}>
                        Hello World!
                    </Text>
                </View>
            );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})
export default App;
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerMain}>
          <Text> Main Content Here</Text>
          <View style={styles.bottomView}>
            <Text style={styles.textStyle}>Bottom View</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: 'coral',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
    textStyle: {
      color: 'white',
      fontSize: 18,
    },
  });
  export default App;
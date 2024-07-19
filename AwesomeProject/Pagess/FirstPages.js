
import * as React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';

const Contacts =[
  {
    uid: 1,
    name: 'Robert Downey Jr.',
    status: 'Yesterday',
    imageUrl: 'https://en.wikipedia.org/wiki/Robert_Downey_Jr.#/media/File:Robert_Downey_Jr_2014_Comic_Con_(cropped).jpg',
  },
  {
    uid: 2,
    name: 'Chris Evans',
    status: '9:13 AM',
    imageUrl: 'https://en.wikipedia.org/wiki/Chris_Evans_(actor)#/media/File:ChrisEvans2023.jpg',
  },
  {
    uid: 3,
    name: 'Chris Hemsworth',
    status: '10:15 PM',
    imageUrl: 'https://en.wikipedia.org/wiki/Chris_Hemsworth#/media/File:Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpg',
  },
  {
    uid: 4,
    name: 'Mark Ruffalo',
    status: '11:20 AM',
    imageUrl: 'https://en.wikipedia.org/wiki/Mark_Ruffalo#/media/File:Mark_Ruffalo_(36201774756)_(cropped).jpg',
  },
  {
    uid: 5,
    name: 'Benedict Cumberbatch',
    status: '12:30 AM',
    imageUrl: 'https://en.wikipedia.org/wiki/Benedict_Cumberbatch#/media/File:BCumberbatch_Comic-Con_2019.jpg',
  },
  {
    uid: 6,
    name: 'Robert Downey Jr.',
    status: '1:30 PM',
    imageUrl: 'https://en.wikipedia.org/wiki/Robert_Downey_Jr.#/media/File:Robert_Downey_Jr_2014_Comic_Con_(cropped).jpg',
  }
]

const FirstPages = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView scrollEnabled={true}>
        <View style={styles.container}>
        {Contacts.map(({uid,name,status,imageUrl}) => (
          <View key={uid} style={styles.usercard}>
            <Image source={{
              uri: imageUrl
            }} style={styles.imagecard}
            />
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <View style={{flex:0.5}}>
              <Text style={styles.username}>{name}</Text>
              </View>
              <View style={{flex:0.5}}>
              <Text style={styles.userstatus}>{status}</Text>
              </View>
            </View>
            </View>
        )
        )}
      {/* <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}> */}
          {/* <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Home{'\n'}(You are on FirstPage)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('SecondPages')
            }>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity> */}
        {/* </View> */}
        {/* <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Tab Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text> */}
      {/* </View> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container:{
    paddingHorizontal:15,
    marginBottom:10
  },
  usercard:{
    flex:1,
    flexDirection:'row',
    //justifyContent:'space-between',
    alignItems:'center',
    
  },
  imagecard:{
    height:60,
    width:60,
    borderRadius:60
  }
});
export default FirstPages;
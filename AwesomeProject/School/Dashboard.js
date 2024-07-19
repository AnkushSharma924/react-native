// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { View, Text, SafeAreaView,Image,TouchableOpacity } from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#EAF0F1',justifyContent:'space-evenly'}}>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:20}}>
      <View>
        <TouchableOpacity onPress={() => 
        navigation.navigate('DashboardStack',{
          screen:'Homework',
        })}>
      <Image source={require('../Images/Homework.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text>HOME WORK</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => 
        navigation.navigate('Attendance')}>
      <Image source={require('../Images/Tick.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text>ATTENDANCE</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Examination')}>
      <Image source={require('../Images/Examination.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text>EXAMINATION</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:20}}>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}>
      <Image source={require('../Images/Result.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>RESULTS</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
      <Image source={require('../Images/TimeTable.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>TIME-TABLE</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Fees')}>
      <Image source={require('../Images/Fees.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>Fees</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:20}}>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
      <Image source={require('../Images/Gallery.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>GALLERY</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SchoolNews')}>
      <Image source={require('../Images/News.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>SCHOOL NEWS</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ShowEvent')}>
      <Image source={require('../Images/Events.png')}
      style={{height:100,width:100}}/>
      </TouchableOpacity>
      <Text  style={{textAlign:'center'}}>ShowEvent</Text>
      </View>
    </View>
    </View>
  );
}
export default Dashboard;
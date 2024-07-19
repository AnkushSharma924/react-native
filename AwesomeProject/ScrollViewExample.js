import React from "react";
import{SafeAreaView,ScrollView, View,Text} from "react-native";

const ScrollViewExample = () => {
    return(
        <SafeAreaView>
            {/* <ScrollView>
                <Text style={{fontSize:30,textDecorationLine:"line-through"}}>
                In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
                </Text>
                <Text style={{fontSize:30,textDecorationLine:"underline"}}>
                In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
                </Text>
                <Text style={{fontSize:30}}>
                In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
                </Text>
                <Text style={{fontSize:30}}>
                In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
                </Text>
                <Text style={{fontSize:30}}>
                In publishing and graphic design, lorem ipsum is
          a placeholder text commonly used to demonstrate the
          visual... please add more content..
                </Text>
            </ScrollView> */}
            <View>
                <Text>Amit</Text>
                <Text style={{fontSize:20,lineHeight:30}}>Time is 10</Text>
                <Text style={{fontSize:15,lineHeight:18}}>am</Text>
            </View>
        </SafeAreaView>
    );
};export default ScrollViewExample;
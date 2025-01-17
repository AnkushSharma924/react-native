import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

  const App = () => {
    const [showSquare, setShowSquare] = useState(false);
    const [showCircle, setShowCircle] = useState(false);
    const [showTriangle, setShowTriangle] = useState(false);
    const [showRectangle, setShowRectangle] = useState(false);
    const [showOval, setShowOval] = useState(false);

    const changeShape = (shape) => {
        setShowSquare(shape == 'Square');
        setShowCircle(shape == 'Circle');
        setShowTriangle(shape == 'Triangle');
        setShowRectangle(shape == 'Rectangle');
        setShowOval(shape == 'Oval');
      };

      return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View
              style={
                showSquare
                  ? styles.SquareShapeView
                  : showCircle
                  ? styles.CircleShapeView
                  : showRectangle
                  ? styles.RectangleShapeView
                  : showTriangle
                  ? styles.TriangleShapeView
                  : showOval
                  ? styles.OvalShapeView
                  : ''
              }
            />
            <TouchableOpacity
          onPress={() => changeShape('Square')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Square
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Circle')} 
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Circle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Triangle')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Triangle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Rectangle')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Rectangle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Oval')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Oval
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
  },
  OvalShapeView: {
    //To make Oval Shape
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
  SquareShapeView: {
    //To make Square Shape
    width: 100,
    height: 100,
    backgroundColor: '#14ff5f',
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#14ff5f',
  },
  TriangleShapeView: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#606070',
  },
});
export default App;

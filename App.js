// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CanvasScreen from './src/screens/Canvas';
// import Sketch from './src/screens/Sketch';
// import {DragTextEditor} from 'react-native-drag-text-editor';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to miniPaint</Text>
      <Button
        title="Open Canvas"
        onPress={() => navigation.navigate('Canvas')}
      />
      {/* <Button
        title="Open Sketchpad"
        onPress={() => navigation.navigate('Sketch')}
      /> */}
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Canvas" component={CanvasScreen} />
        {/* <Stack.Screen name="Sketch" component={Sketch} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
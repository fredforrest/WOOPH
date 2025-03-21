import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

const scrOptions = {
  headerstyle: {backgroundColor: '#6200ee'},
  headerTitleStyle: {color: 'white'},
  headerBackTitleVisible: false,
  headerTintColor: 'white'
}

return (
  console.log("hello world")
)

}

export default App;
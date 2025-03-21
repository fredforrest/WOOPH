import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

const scrOptions = {
  headerstyle: {backgroundColor: '#6200ee'},
  headerTitleStyle: {color: 'white'},
  headerBackTitleVisible: false,
  headerTintColor: 'white'
  
}


return (

<NavigationContainer>
    <Stack.Navigator screenOptions={scrOptions}>
      <Stack.Screen name="SplashScreen" options={{ headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Register Screen" component={RegisterScreen} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Chat Room" component={ChatScreen} />
<NavigationContainer>

)

}

export default App;
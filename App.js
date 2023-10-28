import * as React from "react"
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import { NavigationContainer } from '@react-navigation/native';

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}



const Stack = createStackNavigator();

const StackNav = () => {
  return(
    <Stack.Navigator 
      initialRouteName="Login"  
      screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

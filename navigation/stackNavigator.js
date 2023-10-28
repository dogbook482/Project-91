import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import IncidentScreen from "../screens/incidentScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <StackNavigator
            intialRouteName="Login"
            screenOption={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
        </StackNavigator>
    )
}

export default StackNavigator;
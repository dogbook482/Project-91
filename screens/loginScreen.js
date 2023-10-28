import * as React from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import RegisterScreen from "./registerScreen";

//import firebase from "firebase";

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }

    loginButtonFunction=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{this.props.navigation.navigate("----")})
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                  placeholder={"Email"} 
                  onChangeText={this.state.email} 
                  placeholderTextColor={"#fffff2"} 
                  style={styles.usernameInputStyle}
                />
                <TextInput 
                    placeholder={"Password"} 
                    onChangeText={this.state.password} 
                    style={styles.passwordInputStyle} 
                    placeholderTextColor={"#fffff2"}
                />
                <TouchableOpacity style={styles.loginButton} onPress={()=>{this.loginButtonFunction(
                    this.state.email,
                    this.state.password
                    )}}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("RegisterScreen")}} style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>New User</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0e0e40",
        alignItems:"center",
        justifyContent:"center",
    },
    usernameInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
        
    },
    passwordInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
    },
    loginButton:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        justifyContent: "space-evenly",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"#fffff2",
    },
    loginButtonText:{
        fontFamily:"ComicSansMS",
        color:"#0e0e40",
        fontSize:24,
    },
    registerButton:{
        fontFamily:"ComicSansMS",
        width: 100,
        height: 25,
        justifyContent: "space-evenly",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"#0e0e40",
        marginTop:15
    },
    registerButtonText:{
        fontFamily:"ComicSansMS",
        color:"#fffff2",
        fontSize:15,
    },
})
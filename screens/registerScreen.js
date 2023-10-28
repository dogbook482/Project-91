import * as React from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";

import firebase from "firebase";
import { firebaseConfig } from "../config";

export default class RegisterScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            name:"",
            zipcode:"",
            passwordReEntry:"",

        }
    }
    
    componentDidMount(){
        
    }
    signUpButton(email, password, name, zipcode, passwordReEntry){
        if (password===passwordReEntry){
            firebase.auth().createUserWithEmailAndPassword(email,password).then((userInfo)=>{
                alert("User has been registered")
                this.props.navigation.navigate("Login")
                firebase.database().ref("users/"+userInfo.user.uid).set({
                    name:name,
                    zipcode:zipcode,
                    email:email
                }).catch((error)=>{alert(error.message)})
            })
        }else{
            alert("Password Doesn't Match")
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder={"Email"} 
                    onChangeText={(input)=>{
                        this.setState({
                            email:input
                        })
                    }} 
                    placeholderTextColor={"#fffff2"} 
                    style={styles.usernameInputStyle}
                />
                <TextInput 
                    placeholder={"Password"} 
                    onChangeText={(input)=>{
                        this.setState({
                            password:input
                        })
                    }} 
                    style={styles.passwordInputStyle} 
                    placeholderTextColor={"#fffff2"}
                    secureTextEntry
                />
                <TextInput 
                    placeholder={"Password Re-Entry"} 
                    onChangeText={(input)=>{
                        this.setState({
                            passwordReEntry:input
                        })
                    }} 
                    style={styles.passwordInputStyle} 
                    placeholderTextColor={"#fffff2"}
                    secureTextEntry
                />
                <TextInput 
                    placeholder={"Name"} 
                    onChangeText={(input)=>{
                        this.setState({
                            name:input
                        })
                    }} 
                    placeholderTextColor={"#fffff2"} 
                    style={styles.nameInputStyle}
                />
                <TextInput 
                    placeholder={"Zipcode"} 
                    onChangeText={(input)=>{
                        this.setState({
                            zipcode:input
                        })
                    }} 
                    style={styles.zipcodeInputStyle} 
                    placeholderTextColor={"#fffff2"}
                />
                <TouchableOpacity style={styles.registerButton} onPress={()=>{this.signUpButton(
                    this.state.email,
                    this.state.password,
                    this.state.name,
                    this.state.zipcode,
                    this.state.passwordReEntry
                )}}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text style={styles.registerButtonText}>Login Now</Text>
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
    nameInputStyle:{
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
    zipcodeInputStyle:{
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
    registerButton:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        justifyContent: "space-evenly",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"#fffff2",
    },
    registerButtonText:{
        fontFamily:"ComicSansMS",
        color:"#0e0e40",
        fontSize:24,
    },
    loginButton:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        justifyContent: "space-evenly",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"#fffff2",  
        marginTop:15     
    }
})
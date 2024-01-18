import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase";




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    
    const handleForgotPassword = () => {
      //code here someone
    };
    const handleCreateAccount = () => {
      navigation.navigate('SignUp');
    };
    const handleSubmit = () => {
      
      signInWithEmailAndPassword(authentication,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.uid);
        navigation.navigate('Homepage');
        Alert.alert('Connected successfully', 'Welcome to the home page');
    })
    .catch(error => Alert.alert("Connection failed", "Please check your email and password"))
    };

    return (
        <View style={styles.container}>
        <View style={styles.inputBorder}>
          
          <Image style={styles.image} source={require("../assets/logo.png")} />
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#D3B419" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#D3B419" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View >
          <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={handleForgotPassword }>Forgot Password</Text> 
      </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity>
        <Text style={styles.create_button} onPress={handleCreateAccount }>Create an account</Text> 
      </TouchableOpacity>
          </View>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#212832',
    },
    inputBorder:{
      borderRadius: 25,
      backgroundColor: 'transparent',
      
      padding: 20,
    },
    
    image: {
      marginTop: -50,
      marginBottom: 0,
      
      width: 280,
      height: 280,
      alignSelf: 'center',
      
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: 5,
      
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#D3B419',
      marginBottom: 10,
    },
    inputIcon: {
      marginRight: 10,
    },
   
    input: {
      backgroundColor: 'transparent',
      color: '#fff',
      padding: 8,
      fontSize: 15,
      fontWeight: '400',
      borderRadius: 5,
  
     
    },
    button: {
      backgroundColor: '#b19715',
      fontWeight: 'bold',
      padding: 15,
      marginTop: 20,
      borderRadius: 11,
      marginLeft: '10%',
      width: '80%',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    forgot_button: {
      height: 30,
      marginTop: 10,
      marginBottom: 10,
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
    },
    create_button: {
      height: 30,
      marginBottom: 30,
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
    },
  });
export default Login;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,SafeAreaView ,Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { authentication, db } from "../firebase";
import { createUserWithEmailAndPassword , getAuth} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 






const SignUp = () => {
  
  //const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  
 const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
 };

 const navigation = useNavigation();

 const handleAccount = () => {
 
};

 
const handleSubmit = async (email, password, ConfirmPassword) => {
  // console log the parameters :
  if (password == ConfirmPassword) {
    await createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        setDoc(
          doc(db, 'users',getAuth().currentUser.uid),
          {
            password,
            email,
            
          }
        )
        navigation.navigate('Login');
      }).catch((err) => {
        console.error(err);
      }); 

  }
  else{
    alert('password not match')
  }
}

  return (

      <View style={styles.container}>
      <View style={styles.inputBorder}>
        
        <Image style={styles.image} source={require("../assets/logo2.png")} />
        
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
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.button}  onPress={()=>handleSubmit(email,password,ConfirmPassword)}>
          <Text style={styles.buttonText} >Sign Up</Text>
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
    width: 170, // Adjust the width as needed
        height: 80, // Adjust the height as needed
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        borderRadius: 30
    
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
    borderRadius: 5,
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
});

export default SignUp;
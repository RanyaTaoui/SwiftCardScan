import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,SafeAreaView ,Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import {firebase} from '../Config'






const SignUp = () => {
  const [username, setUsername] = useState('');
  //const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const changeSelectedDate = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setDate(currentDate);
  setShow(false);
 };
 const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
 };
 const displayDatepicker = () => {
    showMode('date');
 };
 const navigation = useNavigation();

 
  const handleSubmit = async(email,password,ConfirmPassword,username,phone,location,date)=>{
   // console log the parameters :
    if(password == ConfirmPassword){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{

      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
      .set({
        username,
        password,
        email,
        phone,
        location,
        date,
      })
    })  .catch((err) => {
          console.error(err); 
      });
        

    

  }
  else{
    alert('password not match')
  }
}

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.inputBorder}>
        
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="#fff"
            value={username}
            onChangeText={setUsername}
          />
        </View>
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
          <Ionicons name="call-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#fff"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#fff"
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <View >
        <SafeAreaView >
      <View>
         
      <TouchableOpacity style={styles.inputContainer} onPress={displayDatepicker}>
        <Ionicons name="calendar-outline" size={24} color="#D3B419" style={styles.icon} />
        <Text id='DateId' style={styles.input}>Select Date of Birth</Text>
     </TouchableOpacity>
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
      </SafeAreaView>
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
        
        <TouchableOpacity style={styles.button}  onPress={()=>handleSubmit(email,password,ConfirmPassword,username,phone,location,date)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
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
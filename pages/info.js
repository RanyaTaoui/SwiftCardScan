import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Colors } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

const Info = () => {
<<<<<<< HEAD
  const [nom, setNom] = useState('NAHIL');
  const [prenom, setPrenom] = useState('HIND');
  const [dateNaissance, setDateNaissance] = useState('31/08/2001');
  const [adresse, setAdresse] = useState('BNI OUKIL FQUIH BEN SALAH');
  const [numerocarte, setNCarte] = useState('ID113644');
=======
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numerocarte, setNCarte] = useState('');
>>>>>>> 259fa1d4fc0867a661e38d3da00dad570b2a59e8

  return (
    <GestureHandlerRootView style={styles.container}>
    <ScrollView style={styles.container}>
        <View style={styles.header}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        
        <TextInput
          label="Nom"
          value={nom}
          onChangeText={(text) => setNom(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Prénom"
          value={prenom}
          onChangeText={(text) => setPrenom(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Date de Naissance"
          value={dateNaissance}
          placeholder="YYYY-MM-DD"
          onChangeText={(text) => setDateNaissance(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Adresse"
          value={adresse}
          onChangeText={(text) => setAdresse(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label="Numero de Carte"
          value={numerocarte}
          onChangeText={(text) => setNCarte(text)}
          style={styles.input}
        />
      </View>

      {/* Add your image component if needed */}
      {/* <Image source={...} style={styles.image} /> */}

      {/* Add your Button component and handle submit function if needed */}
    </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
    logo: {
      width: 170, // Adjust the width as needed
      height: 80, // Adjust the height as needed
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 50,
      borderRadius: 30
      },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    width: '100%', // Take up the full width
    height: '100%', 
  },
  inputContainer: {
    borderRadius: 25,
    backgroundColor: 'transparent',
    padding: 5,
    marginBottom: 10,
    width: '100%', // Take up the full width
    
  },
  image: {
    marginTop: -50,
    marginBottom: 0,
    width: 280,
    height: 280,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    color: 'white', // Set the text color to white
    padding: 8,
    fontSize: 15,
    fontWeight: '400',
    borderRadius: 5,
    marginLeft: 70,
    marginLeft: 0,
  },
  button: {
    backgroundColor: '#b19715',
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 11,
    marginLeft: '10%',
    marginTop: 20,
    width: '80%',
  },
});

export default Info;

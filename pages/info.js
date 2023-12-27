import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Colors } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';

const Info = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numerocarte, setNCarte] = useState('');

  return (
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
      {/* <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    logo: {
        width: 170, // Adjust the width as needed
        height: 80, // Adjust the height as needed
        marginLeft: 'auto',
        marginRight: 'auto',
      },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black', // Set the background color to black
  },
  inputContainer: {
    borderRadius: 25,
    backgroundColor: 'transparent',
    padding: 5,
    marginBottom: 10,
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
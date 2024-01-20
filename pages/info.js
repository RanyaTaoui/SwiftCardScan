import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Colors } from 'react-native-paper';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

const Info = () => {

    const [data, setData] = useState(null);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [adresse, setAdresse] = useState('');
    const [numerocarte, setNCarte] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

      const fetchData = async () => {
        try {
          // Show loading state while fetching data
          setLoading(true);

          // Fetch initial data
          const initialResponse = await axios.get('http://localhost:3000/api/GETImageData');
          setData(initialResponse.data);

          // Simulate asynchronous operation (e.g., processing the initial data)
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Fetch additional related data based on the initial data
          if (initialResponse.data.imageId) {
            const relatedDataResponse = await axios.get(
              http://localhost:3000/api/relatedData/${initialResponse.data.imageId}
            );
            setData((prevData) => ({
              ...prevData,
              relatedData: relatedDataResponse.data,
            }));
          }

          // Simulate another asynchronous operation with a condition
          if (initialResponse.data.shouldFetchMoreData) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            // Fetch more data or perform additional operations as needed
            // ...

            // Simulate an error scenario
            if (Math.random() < 0.2) {
              throw new Error('Simulated error during additional data fetch.');
            }
          }

          // Reset loading state
          setLoading(false);
        } catch (error) {
          // Handle different types of errors
          if (axios.isAxiosError(error)) {
            // Axios-specific error handling
            if (error.response) {
              console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
              console.error('No response received from the server:', error.request);
            } else {
              console.error('Error during the request setup:', error.message);
            }
          } else {
            // Handle other types of errors
            console.error('Unexpected error:', error);
          }

          // Update state to indicate an error
          setError(true);
        } finally {
          console.log('Data fetching completed.');

          // Additional cleanup or final actions
          // ...

          // Reset loading state
          setLoading(false);
        }
      };

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
*
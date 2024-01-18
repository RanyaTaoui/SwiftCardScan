import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Conditions from './conditions';
import { useNavigation } from '@react-navigation/native';

export default function Type() {
  const navigation = useNavigation(); // Import useNavigation

  const navigateToAcceuil = () => {
    navigation.navigate('Acceuil');
  };

  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToAcceuil}>
        <Text style={styles.buttonText}>Ancienne </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAcceuil}>
        <Text style={styles.buttonText}>Nouvelle</Text>
      </TouchableOpacity>
      {/* <Conditions isVisible={isModalVisible} onClose={closeConditionsModal} */}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1e',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: 32,
    position: 'relative',
    width: '100%', // Take up the full width
    height: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '50%',

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

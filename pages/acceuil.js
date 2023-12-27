import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Acceuil = () => {
  return (
    <View style={styles.container}>
        
      <View style={styles.header}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.gendersContainer}>
        <TouchableOpacity style={styles.maleContainer}>
          <Image
            style={styles.maleImage}
            source={require('../assets/camera.png')}
          />
          <Text style={styles.maleText}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.femaleContainer}>
          <Image
            style={styles.femaleImage}
            source={require('../assets/galerie.png')}
          />
          <Text style={styles.femaleText}>Galarie</Text>
        </TouchableOpacity>
      </View>

      
    </View>
   
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
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: 32,
    position: 'relative',
    width: 300
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 68,
    marginRight: 15,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Integral CF, Source Sans Pro',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 1.5,
    marginBottom: 12,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'Integral CF, Source Sans Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.6,
    maxWidth: 166,
    textAlign: 'center',
  },
  gendersContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 132,
    width: '87.35%',
  },
  maleContainer: {
    alignItems: 'center',
    backgroundColor: '#d0fd3e',
    borderRadius: 70,
    flexDirection: 'column',
    marginBottom: 44,
    padding: 36,
    width: '100%',
  },
  maleImage: {
    height: 48,
    marginBottom: 19,
    objectFit: 'contain',
    width: 48,
  },
  maleText: {
    color: '#000000',
    fontFamily: 'Open Sans, Source Sans Pro',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 1.4,
    marginRight: 5,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  femaleContainer: {
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 70,
    flexDirection: 'column',
    padding: 37,
    width: '100%',
  },
  femaleImage: {
    height: 48,
    margin: 0,
    marginBottom: 19,
    objectFit: 'contain',
    width: 31.9,
  },
  femaleText: {
    color: '#ffffff',
    fontFamily: 'Open Sans, Source Sans Pro',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 1.4,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  nextButton: {
    borderRadius: 48,
    height: 50,
    marginLeft: 136.5,
    width: 120,
  },
  nextButtonText: {
    color: '#ffffff',
    fontFamily: 'Open Sans, Source Sans Pro',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 1.3625,
    marginRight: 17,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
});

export default Acceuil;
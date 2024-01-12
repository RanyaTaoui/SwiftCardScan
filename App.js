import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './pages/info'; // Adjust the path based on your project structure
import Acceuil from './pages/acceuil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conditions from './pages/conditions';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="Acceuil" component={Acceuil} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
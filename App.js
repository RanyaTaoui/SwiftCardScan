import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './pages/info'; // Adjust the path based on your project structure
import Acceuil from './pages/acceuil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conditions from './pages/conditions';
import Type from './pages/Type';
import brb from './pages/brb';
import Login from './pages/login';
import SignUp from './pages/signUp';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Acceuil" component={Acceuil} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Type" component={Type} />
        <Stack.Screen name="Conditions" component={brb} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
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
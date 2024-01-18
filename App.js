import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './pages/info'; // Adjust the path based on your project structure
import Acceuil from './pages/acceuil';
import Login from './pages/login'
import SignUp from './pages/signUp';


const App = () => {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Welcome to My React Native App</Text> */}
    //   <Info /> 
    // </View>
     <NavigationContainer style={{ backgroundColor: '#212832'}}>
        <Stack.Navigator initialRouteName="Login">
       
            <Stack.Screen name="Login"
                            component={Login}
                            options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
              <Stack.Screen name="SignUp"
                            component={SignUp}
                            options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
              <Stack.Screen name="Profil"
                            component={Acceuil}
                            options={{headerStyle: {backgroundColor: '#212832',},headerTintColor: '#fff', }}/>
              <Stack.Screen name="Homepage"
                            component={Info}
                            options={{ headerStyle: { backgroundColor: '#212832' }, headerTintColor: '#fff' }}
                            >      
              </Stack.Screen>
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
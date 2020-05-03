//import statements
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import Map from './screens/Map';

// import Map from './Map';

// intializting routing stack
const Stack = createStackNavigator();

// how our app routes
function App() 
{
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


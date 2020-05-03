// import statements

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// import Map from './Map';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF7F50',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Login() {

    const Navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Pollen 2</Text>

      {/* ToDo     :::::        */}

      {/* <Register></Register> */}
      {/* <Map></Map>  */}
      {/* <Buzz></Buzz> */}
      {/* <CompanyProfile></CompanyProfile> */}

      <Button
        title="MAP BUTTON"
        onPress={() => Navigator.navigate('Map')}
      />



    </View>
  );
}

  // Routing -> we create different stacks, and these stacks represent routing flow
//     const AuthStack = createStackNavigator(
//     {
//       Login: //login screen
//       Register: //register screen
//       //change password 
//       // route to buzz
//     })

//     export default createAppContainer(
//       createStackNavigator(
//         {
//           Auth: AuthStack
//         },
//         {
//           initialRouteName: 'Auth'
//         }
//       )
//     )

// }





import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from "react-native";
import Cal from './Cal';
import Slot from './Slot';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Cal} />
        <Stack.Screen name='Slot' component={Slot} />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
 
export default App;
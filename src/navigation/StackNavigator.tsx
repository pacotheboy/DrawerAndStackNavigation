import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { About } from '../screens/About';

const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default StackNavigator;
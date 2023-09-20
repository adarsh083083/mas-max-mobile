import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants/routes';
import {Login} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default AuthNavigation;

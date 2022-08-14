import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  SignUp,
  Dashboard,
  VehicleDetails,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

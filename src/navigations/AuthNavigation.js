import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import {
  ChooseAccount,
  ForgotPassword,
  Home,
  Login,
  Register,
  SetPassword,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.SET_PASSWORD} component={SetPassword} />
      <Stack.Screen name={ROUTES.CHOOSE_ACCOUNT} component={ChooseAccount} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

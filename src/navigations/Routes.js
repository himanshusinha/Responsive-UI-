import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
const Routes = () => {
  const [login, seLogin] = useState(false);

  return (
    <NavigationContainer independent={true}>
      {login ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default Routes;

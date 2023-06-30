import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRouting from './routing/drawer';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <DrawerRouting />
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNav} from './Components/Drawer';

export default App = () => {
  const [FirstTime, setFirstTime] = React.useState(true);
  return (
    <NavigationContainer>
      <DrawerNav setFirstTime={setFirstTime} FirstTime={FirstTime} />
    </NavigationContainer>
  );
};
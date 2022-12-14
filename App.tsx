import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigation} from './src/navigation';
import {Provider} from './src/context/context';

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const Navigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtonStack from './tab/ButtomStack';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './types';

const Main = createStackNavigator<MainStackParamList>();

export default function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Main.Navigator headerMode="none">
        <Main.Screen name="Main" component={ButtonStack} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

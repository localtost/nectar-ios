import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CartStackParamList} from '../types';
import CartScreen from '../../screens/home/CartScreen';

const Main = createStackNavigator<CartStackParamList>();

export default function CartStack(): JSX.Element {
  return (
      <Main.Navigator>
        <Main.Screen name="Cart" component={CartScreen} />
      </Main.Navigator>
  );
}

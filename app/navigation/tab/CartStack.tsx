import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CartStackParamList} from '../types';
import CartScreen from '../../screens/CartScreen';

const Main = createStackNavigator<CartStackParamList>();

export default function CartStack(): JSX.Element {
  return (
    <Main.Navigator>
      <Main.Screen name="Cart" component={CartScreen} />
    </Main.Navigator>
  );
}

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ShopStackParamList} from '../types';
import ShopScreen from '../../screens/ShopScreen';

const Main = createStackNavigator<ShopStackParamList>();

export default function ShopStack(): JSX.Element {
  return (
    <Main.Navigator>
      <Main.Screen name="Shop" component={ShopScreen} />
    </Main.Navigator>
  );
}

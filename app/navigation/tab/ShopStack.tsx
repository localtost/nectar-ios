import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ShopStackParamList} from '../types';
import ShopScreen from '../../screens/ShopScreen';
import {Theme} from '../../Theme';

const Main = createStackNavigator<ShopStackParamList>();

export default function ShopStack(): JSX.Element {
  return (
    <Main.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: Theme.white,
          shadowOpacity: 0,
        },
      }}>
      <Main.Screen options={{
        headerTitle:''
      }} name="Shop" component={ShopScreen} />
    </Main.Navigator>
  );
}

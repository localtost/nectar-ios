import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {FavoriteStackParamList} from '../types';
import FavoriteScreen from '../../screens/home/FavoriteScreen';

const Main = createStackNavigator<FavoriteStackParamList>();

export default function FavoriteStack(): JSX.Element {
  return (
      <Main.Navigator>
        <Main.Screen name="Favorite" component={FavoriteScreen} />
      </Main.Navigator>
  );
}

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FavoriteStackParamList} from '../types';
import FavoriteScreen from '../../screens/FavoriteScreen';

const Main = createStackNavigator<FavoriteStackParamList>();

export default function FavoriteStack(): JSX.Element {
  return (
    <Main.Navigator>
      <Main.Screen name="Favorite" component={FavoriteScreen} />
    </Main.Navigator>
  );
}

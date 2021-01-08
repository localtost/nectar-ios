import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ExploreStackParamList} from '../types';
import ExploreScreen from '../../screens/home/ExploreScreen';

const Main = createStackNavigator<ExploreStackParamList>();

export default function ExploreStack(): JSX.Element {
  return (
      <Main.Navigator>
        <Main.Screen name="Explore" component={ExploreScreen} />
      </Main.Navigator>
  );
}

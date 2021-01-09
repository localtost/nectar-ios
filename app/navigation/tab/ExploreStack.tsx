import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ExploreStackParamList} from '../types';
import ExploreScreen from '../../screens/ExploreScreen';
import {Theme} from '../../Theme';

const Main = createStackNavigator<ExploreStackParamList>();

export default function ExploreStack(): JSX.Element {
  return (
    <Main.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: Theme.white,
          shadowOpacity: 0,
        },
      }}>
      <Main.Screen name="Find Products" component={ExploreScreen} />
    </Main.Navigator>
  );
}

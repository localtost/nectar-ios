import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ProfileStackParamList} from '../types';
import AccountScreen from '../../screens/AccountScreen';

const Main = createStackNavigator<ProfileStackParamList>();

export default function ProfileStack(): JSX.Element {
  return (
    <Main.Navigator headerMode="none">
      <Main.Screen name="Profile" component={AccountScreen} />
    </Main.Navigator>
  );
}

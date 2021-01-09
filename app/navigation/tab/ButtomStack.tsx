import React, {useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import ExploreStack from './ExploreStack';
import CartStack from './CartStack';
import FavoriteStack from './FavoriteStack';
import ProfileStack from './ProfileStack';
import {RootStackParamList} from '../types';
import {Theme} from '../../Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {data} from '../../utils/data';
import {StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator<RootStackParamList>();
export default function ButtonStack(): JSX.Element {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}: BottomTabScreenProps<RootStackParamList>) => ({
          tabBarIcon: ({color, size}) => {
            return (
              <AntDesign
                name={route.name.toLowerCase()}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabel: data[route.name],
        })}
        tabBarOptions={{
          activeTintColor: Theme.main,
          inactiveTintColor: Theme.black,
          style: {
            borderRadius: 25,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            shadowOffset: {
              width: 0,
              height: -1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.0,
            backgroundColor: Theme.white,
            elevation: 10,
          },
        }}>
        <Tab.Screen name="Home" component={ShopStack} />
        <Tab.Screen name="Search1" component={ExploreStack} />
        <Tab.Screen name="Shoppingcart" component={CartStack} />
        <Tab.Screen name="Hearto" component={FavoriteStack} />
        <Tab.Screen name="User" component={ProfileStack} />
      </Tab.Navigator>
    </>
  );
}
const style = StyleSheet.create({
  slider: {
    height: 2,
    position: 'absolute',
    top: 0,
    left: 15,
    backgroundColor: Theme.main,
    borderRadius: 20,
    width: 10,
  },
});

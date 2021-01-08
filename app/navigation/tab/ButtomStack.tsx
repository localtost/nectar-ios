import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBarList from '../../components/TabBarList';
import ShopStack from './ShopStack'
import ExploreStack from './ExploreStack';
import CartStack from './CartStack';
import FavoriteStack from './FavoriteStack';
import ProfileStack from './ProfileStack'
import {Dimensions, View} from 'react-native';
import {RootStackParamList} from '../types';
import {Theme} from '../../Theme';

const Tab = createBottomTabNavigator<RootStackParamList>();

const ButtonStack = () => {
  const tabbed: number = Dimensions.get('window').height;
  return (
    <>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBarList {...props} />}>
        <Tab.Screen name="Home" component={ShopStack} />
        <Tab.Screen name="Search1" component={ExploreStack} />
        <Tab.Screen name="Shoppingcart" component={CartStack} />
        <Tab.Screen name="Hearto" component={FavoriteStack} />
        <Tab.Screen name="User" component={ProfileStack} />
      </Tab.Navigator>
      <View
        style={{
          height: tabbed / 25,
          backgroundColor: Theme.white,
        }}
      />
    </>
  );
};
export default ButtonStack;

import React  from 'react';
import {View} from 'react-native';
import {Theme} from '../config/Theme';
import SearchInput from '../components/SearchInput';
import {FlatList, ScrollView } from 'react-native-gesture-handler';
import ExploreItem from '../components/ExploreItem';
import { categories } from '../config/data';
export default function ExploreScreen(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: Theme.white,
        width: '100%',
        height:'100%',
        alignItems: 'center',
      }}>
      <SearchInput />
      <ScrollView
        contentContainerStyle={{
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap:'wrap',
          marginLeft:20
        }}>
        {categories.map((el, index) => (
            <ExploreItem key={index} index={index} item={el} />
          ))}
      </ScrollView>
    </View>
  );
}
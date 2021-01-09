import React from 'react';
import {View} from 'react-native';
import {Theme} from '../Theme';
import SearchInput from '../components/SearchInput';
import { ScrollView } from 'react-native-gesture-handler';
import ExploreItem from '../components/ExploreItem';
export default function ExploreScreen(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: Theme.white,
        flex: 1,
        width: '100%',
        alignItems: 'center',
      }}>
      <SearchInput />
      <ScrollView contentContainerStyle={{width: '95%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop:10,
          }}>
          {
            [1,2,3,4,5,6].map(el=><ExploreItem key={el}/>)
          }
        </ScrollView>
    </View>
  );
}
import React ,{ Suspense} from 'react';
import {Text, View} from 'react-native';
import {Theme} from '../Theme';
import SearchInput from '../components/SearchInput';
import {ScrollView } from 'react-native-gesture-handler';
import ExploreItem from '../components/ExploreItem';
import { categories } from '../utils/data';
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
      <Suspense fallback={<Text>Loading ...</Text>}>
        <ScrollView
          contentContainerStyle={{
            width: '90%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 5,
            alignSelf: 'center',
          }}>
          {categories.map((el, index) => (
            <ExploreItem key={index} index={index} item={el} />
          ))}
        </ScrollView>
      </Suspense>
    </View>
  );
}
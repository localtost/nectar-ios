import React from 'react';
import {View, Text, Image} from 'react-native';
import {useColor} from '../hooks/useColor';
import {Theme} from '../Theme';
import {CategoriesItem} from '../utils/data';

interface Props {
  index: number;
  item: CategoriesItem;
}
export default function ExploreItem({index, item}: Props) {
  return (
    <View
      style={{
        backgroundColor: useColor(index),
        width: '44%',
        height: 200,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={item.icon} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: Theme.black,
          textAlign: 'center',
          width: '80%',
        }}>
        {item.name}
      </Text>
    </View>
  );
}

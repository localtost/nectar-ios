import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useColor} from '../hooks/useColor';
import {Theme} from '../config/Theme';
import {CategoriesItem} from '../config/data';

interface Props {
  index: number;
  item: CategoriesItem;
}
export default function ExploreItem({index, item}: Props) {
  return (
      <View style={[styles.container, {backgroundColor: useColor(index)}]}>
        <Image source={item.icon} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '47%',
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Theme.black,
    textAlign: 'center',
    width: '80%',
  },
});

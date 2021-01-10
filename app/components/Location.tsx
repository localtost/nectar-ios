import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '../config/Theme';

export interface Props {
  title: string;
}

export function Location({title}: Props) {
  return (
    <View style={styles.container}>
      <AntDesign name="enviromento" size={25} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 5,
    color: Theme.darkGray,
    fontSize: 17,
    fontWeight: '600',
  },
});

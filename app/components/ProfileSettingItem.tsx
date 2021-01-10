import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '../config/Theme';
import {ProfileItem} from '../config/data';
import {SCREEN_WIDTH} from '../config/Theme';

interface Props {
  item: ProfileItem;
}
export default function ProfileSettingItem({item}: Props): JSX.Element {
  return (
    <View style={[styles.container, {borderBottomColor: Theme.gray}]}>
      <View style={styles.itemContainer}>
        <AntDesign
          name={item.icon}
          size={SCREEN_WIDTH / 18}
          style={{
            color: Theme.black,
          }}
        />
        <Text style={styles.title}>{item.name}</Text>
        <AntDesign
          name="right"
          size={SCREEN_WIDTH / 20}
          style={{
            color: Theme.black,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: SCREEN_WIDTH / 7,
  },
  title: {
    width: '65%',
    fontSize: 18,
    fontWeight: '600',
  },
});

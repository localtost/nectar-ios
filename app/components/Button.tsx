import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Theme, SCREEN_HEIGHT} from '../Theme';

interface Props {
  title: string;
}

export default function Button({title}: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.touchable}>
      <View style={styles.buttonInside}>
        <Image
          source={require('../assets/icons/outIcon.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.main,
  },
  buttonInside: {
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  touchable: {
    width: '80%',
    height: SCREEN_HEIGHT / 14,
    backgroundColor: Theme.ligthGray,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 19,
  },
});

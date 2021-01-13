import * as React from 'react';
import {Image, View, ImageSourcePropType,StyleSheet} from 'react-native';

export interface Props {
  url: ImageSourcePropType;
}

export function Banner({url}: Props) {
  return (
    <View style={styles.container}>
      <Image source={url} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      width: '90%',
      alignSelf: 'center',
      marginTop: 20,
    }
});
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme} from '../../Theme';
import {data} from '../../utils/data';
type Props = {
  iconName: string;
  isCurrent?: boolean;
};
const TabBarItem: React.FC<Props> = ({iconName, isCurrent}: Props) => {
  const width: number = Dimensions.get('window').width;
  const activeItem = isCurrent ? Theme.main : Theme.black;
  const activeScale = isCurrent ? 1.1 : 1;
  return (
    <View style={styles.container}>
      <AntDesign
        name={iconName.toLowerCase()}
        size={width / 15}
        style={{
          color: activeItem,
          transform: [{scale: activeScale}],
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          paddingTop: 5,
          color: activeItem,
          transform: [{scale: activeScale}],
        }}>
        {data[iconName]}
      </Text>
    </View>
  );
};
export default TabBarItem;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    paddingTop: 5,
  },
});

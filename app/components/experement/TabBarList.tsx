import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import BottomMenuItem from './TabBarItem';
import {Theme, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../config/Theme';

export default function TabBarList({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element {
  const [translateValue] = useState<Animated.AnimatedValue>(
    new Animated.Value(0),
  );
  const tabWidth: number = SCREEN_WIDTH / state.routes.length;
  return (
    <View style={[style.tabContainer]}>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{translateX: translateValue}],
              width: tabWidth - 30,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 20,
              useNativeDriver: true,
            }).start();
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{flex: 1}}
              key={index}>
              <BottomMenuItem
                iconName={label.toString()}
                isCurrent={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    height: 70,
    width: '100%',
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.0,
    backgroundColor: Theme.white,
    elevation: 10,
    bottom: 0,
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: 0,
    left: 15,
    backgroundColor: Theme.main,
    borderRadius: 20,
    width: 10,
  },
});

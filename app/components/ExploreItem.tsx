import React from 'react'
import { View, Text } from 'react-native'
import { Theme } from '../Theme';

export default function ExploreItem() {
    return (
      <View
        style={{
          backgroundColor: Theme.darkenPink,
          width: '44%',
          height: 200,
          borderRadius: 10,
          margin: 10,
        }}
      />
    );
}

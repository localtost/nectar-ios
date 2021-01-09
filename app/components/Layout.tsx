import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../Theme';

interface Props {
  children: React.ReactNode;
}
export default function Layout({children}: Props): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.white}}>
      {children}
    </SafeAreaView>
  );
}

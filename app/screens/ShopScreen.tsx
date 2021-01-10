import React from 'react';
import {View} from 'react-native';
import SearchInput from '../components/SearchInput';
import {Theme} from '../config/Theme';
import {bannerLogo} from '../config/images';
import {Banner} from '../components/Banner';
import {Location} from '../components/Location';

export default function ShopScreen(): JSX.Element {
  return (
    <View style={{backgroundColor: Theme.white, flex: 1}}>
      <Location title="Kiev, Ukraine" />
      <SearchInput />
      <Banner url={bannerLogo} />
    </View>
  );
}

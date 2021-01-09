import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import SearchInput from '../components/SearchInput';
import {Theme} from '../Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function ShopScreen(): JSX.Element {
  return (
    <View style={{backgroundColor: Theme.white, flex: 1}}>
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          marginBottom: 15,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="enviromento" size={25} />
        <Text
          style={{
            paddingLeft: 5,
            color: Theme.darkGray,
            fontSize: 17,
            fontWeight: '600',
          }}>
          Kiev,Ukraine
        </Text>
      </View>
      <SearchInput />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <ImageBackground
          source={require('../assets/background/banner.png')}
          resizeMode='contain'
          style={{
            width: '100%',
            height: '60%',
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
}

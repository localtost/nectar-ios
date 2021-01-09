import React from 'react';
import {
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  View,
  StyleSheetProperties,
  ViewStyle,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import Layout from '../components/Layout';
import ProfileSettingItem from '../components/ProfileSettingItem';
import {SCREEN_HEIGHT, SCREEN_WIDTH, Theme} from '../Theme';
import {ProfileItem, profileItems} from '../utils/data';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default function AccountScreen(): JSX.Element {
  return (
    <Layout>
      <Container
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: Theme.gray,
        }}>
        <Image
          source={require('../assets/icons/profileLogo.png')}
          style={{
            width: SCREEN_WIDTH/6,
            height: SCREEN_WIDTH/6,
            borderRadius: 50,
          }}
        />
        <View
          style={{width: '80%', justifyContent: 'flex-start', marginLeft: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Artem Kumskov
          </Text>
          <Text style={{color: Theme.darkenGray}}>artem.kumskov@gmail.com</Text>
        </View>
      </Container>
      <ScrollView>
        {profileItems.map((item) => (
          <ProfileSettingItem item={item} key={item.id} />
        ))}
        <Container style={{alignItems: 'center', justifyContent: 'center'}}>
          <Button title="Log Out" />
        </Container>
      </ScrollView>
    </Layout>
  );
}
const Container = ({children, style}: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SCREEN_HEIGHT / 7,
    justifyContent: 'flex-start',
  },
});

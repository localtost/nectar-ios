import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import ProfileSettingItem from '../components/ProfileSettingItem';
import {SCREEN_HEIGHT, SCREEN_WIDTH, Theme} from '../config/Theme';
import {profileItems} from '../config/data';
import {profileLogo} from '../config/images';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default function AccountScreen(): JSX.Element {
  return (
    <View style={{backgroundColor: Theme.white, flex: 1}}>
      <ScrollView>
        <SafeAreaView>
          <Container style={styles.overlayContainer}>
            <Image source={profileLogo} style={styles.image} />
            <View
              style={styles.titlesContainre}>
              <Text
                style={styles.nameTitle}>
                Artem Kumskov
              </Text>
              <Text style={{color: Theme.darkenGray}}>
                artem.kumskov@gmail.com
              </Text>
            </View>
          </Container>
          {profileItems.map((item) => (
            <ProfileSettingItem item={item} key={item.id} />
          ))}
          <Container style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Log Out" />
          </Container>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
const Container = ({children, style}: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  overlayContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Theme.gray,
  },
  container: {
    width: '100%',
    height: SCREEN_HEIGHT / 7,
    justifyContent: 'flex-start',
  },
  nameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titlesContainre: {
    width: '80%',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  image: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 6,
    borderRadius: 50,
  },
});

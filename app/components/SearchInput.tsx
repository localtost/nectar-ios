import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Theme } from '../config/Theme';

export default function SearchInput():JSX.Element {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.container}>
          <AntDesign name="search1" size={20} />
          <TextInput
            placeholder="Search Store"
            style={styles.input}
          />
        </View>
      </View> 
    );
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Theme.ligthGray,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 10,
    fontSize: 15,
  },
});
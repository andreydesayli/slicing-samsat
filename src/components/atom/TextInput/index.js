import { StyleSheet, Text, View, TextInput as TI } from 'react-native'
import React from 'react'
import { fonts } from '../../../assets';
import Gap from '../Gap';

const TextInput = (props) => {
    const {title} = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} />
      <TI style={styles.TI} />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    TI: {
    borderWidth: 1,
    borderColor: '#9A0000',
    borderRadius: 15,
    width: 301,
    height: 43,
    paddingLeft: 15,
    },
    title: {
    fontFamily: fonts.Poppins.regular,
    fontSize: 14,
    color: '#2E2E2E',
    }
})
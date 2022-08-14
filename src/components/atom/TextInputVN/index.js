import { StyleSheet, Text, View, TextInput as TI } from 'react-native'
import React from 'react'
import { fonts, IconPen } from '../../../assets'

const TextInputVN = () => {
  return (
    <View style={styles.container}>
      <TI style={styles.TI} placeholder="Berikan nama untuk kendaraan anda"/>
      <IconPen style={styles.pen} />
    </View>
  )
}

export default TextInputVN

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TI: {
        fontFamily: fonts.Poppins.regular,
        borderBottomWidth: 2,
        borderColor: '#F3F3F3',
        paddingLeft: 10,
        width: "100%"
    },
    pen: {
        marginLeft: -18,
    }
})
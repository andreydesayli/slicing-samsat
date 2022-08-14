import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconTrashCan, IconBack } from '../../../assets/icons'
import { fonts } from '../../../assets'

const Header = (props) => {
  const {title} = props

  return (
    <View style={styles.container}>
      <IconBack style={styles.icback} />
      <Text style={styles.title} >{title}</Text>
      <View style={styles.trashCan} >
        <IconTrashCan />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 21,
      alignItems: 'center',
      backgroundColor: '#9A0000'
    },
    icback: {
      marginLeft: 24,
      marginRight: 25,
    },
    trashCan: {
      flex:1,
      alignItems: 'flex-end',
      marginRight: 26
    },
    title: {
      fontFamily: fonts.Poppins.semibold,
      fontSize: 18,
      color: '#FFFFFF'
    },
})
import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { 
    IMGFik,
    IMGUnklab,
    IMGJasaraharja,
    IMGPemprov,
    IMGSatlantas } from '../../../assets'

const Footer = () => {
  return (
    <View style={styles.container}>
        <Image source={IMGFik} />
        <Image source={IMGSatlantas} />
        <Image source={IMGPemprov} />
        <Image source={IMGJasaraharja} />
        <Image source={IMGUnklab} />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 35,
    }
})
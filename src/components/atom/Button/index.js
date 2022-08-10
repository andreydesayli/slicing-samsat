import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../../../assets';

const Button = (props) => {
    const {label, onPress} = props;
  return (
    <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8} 
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9A0000',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 43,
        width: 301,
    },
    buttonText: {
        color: '#ffff',
        fontFamily: fonts.Poppins.medium,
        fontSize: 18,
    }
})
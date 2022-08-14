import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAdd } from '../../../assets'
import { fonts } from '../../../assets'

const AddPhoto = (props) => {
    const {title} = props
  return (
    <View>
      <TouchableOpacity activeOpacity={0.3}>
        <View style={styles.box}>
            <IconAdd />
            <Text style={styles.text} >{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AddPhoto

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#F3F2F2',
        borderRadius: 8,
        paddingTop: 33,
        alignItems: 'center',
    },
    text: {
        fontFamily: fonts.Poppins.medium, //font family difigma pakai roboto-medium
        fontSize: 12,
        color: '#FFFFFF',
        marginTop: 6,
    },
})
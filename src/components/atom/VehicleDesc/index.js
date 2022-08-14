import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../assets'
import Gap from '../Gap'

const VehicleDesc = (props) => {
    const {title, content} = props

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={7} />
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default VehicleDesc

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.Poppins.medium,
        fontSize: 12,
        color: '#585858',
        paddingLeft: 7,
    },
    content: {
        fontFamily: fonts.Poppins.regular,
        fontSize: 15,
        color: '#585858',
        borderBottomWidth: 2,
        borderColor: '#F3F3F3',
        width: 150,
        paddingLeft: 7,
    }
})
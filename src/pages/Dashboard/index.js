import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../components/molecules'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
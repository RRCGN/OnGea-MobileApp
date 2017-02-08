import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  typeText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.54)'
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.87)'
  }
})

const TripDate = ({ typeText, dateText }) => {
  return (
    <View>
      <Text style={styles.typeText}>{typeText}</Text>
      <Text style={styles.dateText}>{dateText}</Text>
    </View>
  )
}

export default TripDate

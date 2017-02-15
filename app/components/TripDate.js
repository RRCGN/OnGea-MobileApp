/**
 * Component to display a date with some text above it
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


type Props = {
  typeText: string,
  dateText: string
}

const TripDate = ({ typeText, dateText }: Props) => {
  return (
    <View>
      <Text style={styles.typeText}>{typeText}</Text>
      <Text style={styles.dateText}>{dateText}</Text>
    </View>
  )
}

export default TripDate


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

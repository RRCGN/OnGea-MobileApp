/**
 * Component to display a date with some text above it.
 * @flow
 */

import React from 'react'
import moment from 'moment'
import { View, Text, StyleSheet } from 'react-native'


type Props = {
  type: string,
  date: string
}

const TripDate = ({ type, date }: Props) => {
  return (
    <View>
      <Text style={styles.typeText}>{type}</Text>
      <Text style={styles.dateText}>{moment(date).format('DD.MM.YYYY')}</Text>
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

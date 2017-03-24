/**
 * Component to display a date with some text above it.
 * @flow
 */

import React from 'react'
import moment from 'moment'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/constants'


type OGDateProps = {
  type: string,
  date: string,
  light?: boolean
}

const OGDate = ({ type, date, light = false }: OGDateProps) => {
  return (
    <View>
      <Text style={[ styles.typeText, light && styles.lightText ]}>{type}</Text>
      <Text style={[ styles.dateText, light && styles.lightText ]}>
        {moment(date).format('DD.MM.YYYY')}
      </Text>
    </View>
  )
}

export default OGDate


const styles = StyleSheet.create({
  typeText: {
    fontSize: 12,
    color: Colors.DARK_SECONDARY
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.DARK_PRIMARY
  },
  lightText: {
    color: 'white'
  }
})

/**
 * Display TripDate side-by-side with a line between it.
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import TripDate from './TripDate'


type Props = {
  children: Array<ReactElement<TripDate>>
}

const TripDateList = ({ children }: Props) => {
  return (
    <View style={styles.row}>
      {children.map((child, i) => (
        <View key={i} style={styles.item}>{child}</View>
      ))}
    </View>
  )
}

export default TripDateList


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginLeft: -16,
    marginRight: -16
  },
  item: {
    paddingLeft: 16,
    paddingRight: 16
  }
})

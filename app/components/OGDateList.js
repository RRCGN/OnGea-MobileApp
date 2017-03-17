/**
 * Display TripDate side-by-side with a line between it.
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import OGDate from './OGDate'


type OGDateListProps = {
  children: Array<ReactElement<OGDate>>
}

const OGDateList = ({ children }: OGDateListProps) => {
  return (
    <View style={styles.row}>
      {children.map((child, i) => (
        <View key={i} style={styles.item}>{child}</View>
      ))}
    </View>
  )
}

export default OGDateList


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

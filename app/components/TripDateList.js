/**
 * Display Components side-by-side with a line between it
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'


type Props = {
  children: Array<ReactElement<*>>
}

const TripDateList = ({ children }: Props) => {
  return (
    <View style={styles.row}>
      {children.map((child, i) => {
        // Wrap every child in a view with its own styles.
        // Every view except the first has a seperator style
        const style = StyleSheet.flatten([
          styles.item,
          i != 0 && styles.itemSeparator
        ])
        return <View key={i} style={style}>{child}</View>
      })}
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
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  itemSeparator: {
    borderLeftWidth: 1,
    borderLeftColor: '#E0E0E0'
  }
})

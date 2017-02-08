import React from 'react'
import { View, StyleSheet } from 'react-native'

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

const TripDateList = ({ children }) => {
  return (
    <View style={styles.row}>
      {children.map((child, i) => {
        const styleList = [
          styles.item,
          i != 0 && styles.itemSeparator
        ]
        return <View key={i} style={StyleSheet.flatten(styleList)}>{child}</View>
      })}
    </View>
  )
}

export default TripDateList

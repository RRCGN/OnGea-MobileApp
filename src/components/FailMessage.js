import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FailMessage = props => {
  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

export default FailMessage

const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#f5adad',
    padding: 16
  },
  text: {
    color: '#a31919'
  }
})

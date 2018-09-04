import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const FlatButton = props => {
  return (
    <TouchableOpacity
      style={props.style}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <View style={styles.base}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

FlatButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.any
}

export default FlatButton

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#eaeaea',
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    color: '#6c6c6c'
  }
})

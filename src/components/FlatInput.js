import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, StyleSheet } from 'react-native'

const FlatInput = props => {
  const { style, ...rest } = props

  return (
    <TextInput underlineColorAndroid="transparent" style={[ styles.input, style ]} {...rest} />
  )
}

export default FlatInput

const styles = StyleSheet.create({
  input: {
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 0,
    fontSize: 14,
    color: '#6c6c6c'
  }
})

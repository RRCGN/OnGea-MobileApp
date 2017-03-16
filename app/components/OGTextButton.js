/**
 * Flat Button (no background) with touch feedback.
 * Can display an Icon or Text.
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Touchable from './Touchable'
import { Colors } from '../utils/constants'


type Props = {
  onPress?: Function,
  label: string,
  color?: string,
  backgroundColor?: string,
  style?: any
}

const OGTextButton = ({
  onPress = () => {},
  label,
  color,
  backgroundColor,
  style
}: Props) => (
  <Touchable onPress={onPress} rippleColor="rgba(0,0,0,0.5)">
    <View
      style={[
        backgroundColor && styles.elevated,
        styles.button,
        { backgroundColor: backgroundColor || 'transparent' },
        style
      ]}
    >
      <Text style={[ styles.text, { color: color || Colors.PRIMARY } ]}>
        {label.toUpperCase()}
      </Text>
    </View>
  </Touchable>
)

export default OGTextButton


const styles = StyleSheet.create({
  elevated: {
    elevation: 2
  },
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    borderRadius: 2,
    flex: 0,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

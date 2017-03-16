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
  <Touchable
    onPress={onPress}
    rippleColor="rgba(0,0,0,0.5)"
    borderRadius={backgroundColor == null ? 2 : 0}
  >
    <View
      style={[
        backgroundColor ? styles.raisedButton : styles.flatButton,
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
  raisedButton: {
    elevation: 2,
    paddingLeft: 16,
    paddingRight: 16
  },
  flatButton: {
    paddingLeft: 8,
    paddingRight: 8
  },
  button: {
    height: 36,
    borderRadius: 2,
    flex: -1,
    minWidth: 64,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }
})

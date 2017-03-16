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
  onPress: Function,
  label?: string,
  icon?: ReactElement<*>,
  color?: string,
  style?: any
}

const MatButton = ({ onPress, label, icon, color, style }: Props) => (
  <Touchable onPress={onPress}>
    <View style={[ { padding: 8, borderRadius: 2 }, style ]}>
      {label &&
        <Text style={[ { color }, styles.text ]}>{label.toUpperCase()}</Text>
      }
      {icon}
    </View>
  </Touchable>
)

export default MatButton

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.PRIMARY
  }
})

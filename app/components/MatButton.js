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
  label?: string,
  icon?: ReactElement<*>,
  color?: string,
  backgroundColor?: string,
  style?: any
}

const MatButton = ({
  onPress = () => {},
  label,
  icon,
  color,
  backgroundColor,
  style
}: Props) => (
  <Touchable onPress={onPress} useForeground>
    <View
      style={[
        backgroundColor && styles.elevated,
        styles.button,
        { backgroundColor: backgroundColor || 'transparent' },
        style
      ]}
    >
      {label &&
        <Text
          style={[
            styles.text,
            { color: color || Colors.PRIMARY }
          ]}
        >
          {label.toUpperCase()}
        </Text>
      }
    </View>
  </Touchable>
)

export default MatButton


const styles = StyleSheet.create({
  elevated: {
    elevation: 12
  },
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    borderRadius: 2,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

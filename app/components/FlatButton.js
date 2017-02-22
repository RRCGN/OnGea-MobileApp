/**
 * Flat Button (no background) with touch feedback
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Touchable from './Touchable'
import { Colors } from '../utils/constants'


type IProps = {
  onPress: () => void,
  label?: string,
  icon?: ReactElement<*>,
  color?: string
}

const FlatButton = ({ onPress, label, icon, color }: IProps) => (
  <Touchable onPress={onPress}>
    <View style={{ padding: 8, borderRadius: 2 }}>
      {label &&
        <Text style={[ styles.text, color ]}>{label.toUpperCase()}</Text>
      }
      {icon}
    </View>
  </Touchable>
)

export default FlatButton

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: Colors.BLUE
  }
})

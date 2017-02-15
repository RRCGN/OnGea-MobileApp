/**
 * Simple Button Component
 * @flow
 */

import React from 'react'
import { Text, StyleSheet } from 'react-native'
import FlatButton from './FlatButton'
import { Colors } from '../utils/constants'

type Props = {
  onPress: () => void,
  text: string
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: Colors.BLUE
  }
})

const Button = ({ onPress = () => {}, text }: Props) => (
  <FlatButton onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </FlatButton>
)

export default Button

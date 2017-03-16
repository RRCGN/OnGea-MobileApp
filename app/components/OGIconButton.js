/**
 * Flat Button (no background) with touch feedback for an icon
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Touchable from './Touchable'
import { Colors } from '../utils/constants'


type Props = {
  onPress?: Function,
  icon: ReactElement<*>,
  style?: any
}

const OGIconButton = ({
  onPress = () => {},
  icon,
  style
}: Props) => (
  <Touchable onPress={onPress} rippleColor="rgba(0,0,0,0.2)" borderRadius={18}>
    <View style={[ styles.button, style ]}>
      {React.cloneElement(icon, { size: 24 })}
    </View>
  </Touchable>
)

export default OGIconButton


const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

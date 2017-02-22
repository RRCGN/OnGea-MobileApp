/**
 * Flat Button (no background) with touch feedback
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import Touchable from './Touchable'


type IProps = {
  onPress: () => void,
  children: ReactElement<*>
}

const FlatButton = ({ onPress, children }: IProps) => (
  <View style={{ marginRight: 8 }}>
    <Touchable onPress={onPress}>
      <View style={{ padding: 8, borderRadius: 2 }}>
        {children}
      </View>
    </Touchable>
  </View>
)

export default FlatButton

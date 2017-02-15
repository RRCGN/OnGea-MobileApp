/**
 * iOS: Tab Button for Web View
 * @flow
 */

import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'


type Props = {
  tintColor: string,
  focused: boolean
}

const WebTabButton = ({ tintColor, focused }: Props) => (
  <Ionicon
    name={focused ? 'ios-globe' : 'ios-globe-outline'}
    size={26}
    style={{ color: tintColor }}
  />
)

export default WebTabButton

/**
 * iOS (Ionicon) Icon for TabBar
 * @flow
 */

import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'


type Props = {
  tintColor: string,
  focused: boolean
}

const MobilitiesTabButton = ({ tintColor, focused }: Props) => (
  <Ionicon
    name={focused ? 'ios-bonfire' : 'ios-bonfire-outline'}
    size={26}
    style={{ color: tintColor }}
  />
)

export default MobilitiesTabButton

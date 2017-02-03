/**
 *
 * @flow
 */

import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'

const MobilitiesTabButton = ({ tintColor, focused }) => (
  <Ionicon
    name={focused ? 'ios-briefcase' : 'ios-briefcase-outline'}
    size={26}
    style={{ color: tintColor }}
  />
)

export default MobilitiesTabButton

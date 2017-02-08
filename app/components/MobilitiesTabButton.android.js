/**
 * Android (Material) Icon for TabBar
 */

import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const MobilitiesTabButton = ({ tintColor, focused }) => (
  <MaterialIcon
    name='landscape'
    size={26}
    style={{ color: tintColor }}
  />
)

export default MobilitiesTabButton

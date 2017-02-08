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

MobilitiesTabButton.propTypes = {
  tintColor: React.PropTypes.string.isRequired,
  focused: React.PropTypes.bool // focused has no effect in Android Version
}

export default MobilitiesTabButton

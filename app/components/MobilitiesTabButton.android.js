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
  tintColor: React.PropTypes.string,
  focused: React.PropTypes.boolean // focused has no effect in Android Version
}

export default MobilitiesTabButton

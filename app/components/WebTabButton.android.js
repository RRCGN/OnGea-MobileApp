/**
 * Android: Tab Button for Web View
 */

import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const WebTabButton = ({ tintColor, focused }) => (
  <MaterialIcon
    name='public'
    size={26}
    style={{ color: tintColor }}
  />
)

WebTabButton.propTypes = {
  tintColor: React.PropTypes.string,
  focused: React.PropTypes.boolean // focused has no effect in Android Version
}

export default WebTabButton

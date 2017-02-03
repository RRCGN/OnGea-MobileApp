/**
 * Tab Button for Web View
 * @flow
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

export default WebTabButton

/**
 * iOS: Tab Button for Web View
 */

import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'

const WebTabButton = ({ tintColor, focused }) => (
  <Ionicon
    name={focused ? 'ios-globe' : 'ios-globe-outline'}
    size={26}
    style={{ color: tintColor }}
  />
)

WebTabButton.propTypes = {
  tintColor: React.PropTypes.string,
  focused: React.PropTypes.boolean // focused has no effect in Android Version
}

export default WebTabButton

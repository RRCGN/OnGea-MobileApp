/**
 * Android: Tab Button for Web View
 * @flow
 */

import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  tintColor: string
}

const WebTabButton = ({ tintColor }: Props) => (
  <MaterialIcon
    name='public'
    size={26}
    style={{ color: tintColor }}
  />
)

export default WebTabButton

/**
 * Android (Material) Icon for TabBar
 * @flow
 */

import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


type Props = {
  tintColor: string
}

const MobilitiesTabButton = ({ tintColor }: Props) => (
  <MaterialIcon
    name='landscape'
    size={26}
    style={{ color: tintColor }}
  />
)

export default MobilitiesTabButton

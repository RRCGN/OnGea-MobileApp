/**
 * Icon for different Platforms. MaterialIcon for Android, Ionicon for iOS.
 * @flow
 */

import React from 'react'
import { Platform } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'


type Props = {
  androidIcon: string,
  iosIcon: string,
  props: any
}

const PlatformIcon = ({ androidIcon, iosIcon, ...props }: Props) => {
  const Icon = Platform.OS === 'ios' ? Ionicon : MaterialIcon
  const name = Platform.OS === 'ios' ? iosIcon : androidIcon

  return <Icon name={name} {...props} />
}

export default PlatformIcon

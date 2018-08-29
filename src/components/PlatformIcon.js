import React from 'react'
import { Platform } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

const PlatformIcon = ({ androidIcon, iosIcon, ...props }) => {
  const Icon = Platform.OS === 'ios' ? Ionicon : MaterialIcon
  const name = Platform.OS === 'ios' ? iosIcon : androidIcon

  return <Icon name={name} {...props} />
}

export default PlatformIcon

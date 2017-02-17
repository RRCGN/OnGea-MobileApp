/**
 * Helper for native Touchable Views across platforms
 * @flow
 */

import React from 'react'
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'


type Props = {
  onPress: () => void,
  rippleColor?: string,
  useForeground?: boolean,
  children: ReactElement<*>
}

const Touchable = ({
  onPress = () => { },
  rippleColor,
  useForeground = false,
  children
}: Props) => {

  // Use TouchableNativeFeedback for Android
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        useForeground={
          TouchableNativeFeedback.canUseNativeForeground() ?
            useForeground :
            false
        }
        background={
          rippleColor ?
            TouchableNativeFeedback.Ripple(rippleColor, false) :
            TouchableNativeFeedback.SelectableBackground()
        }>
        <View>{children}</View>
      </TouchableNativeFeedback>
    )

  }

  // Use TouchableOpacity for iOS
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        onPress={onPress}>
        <View>{children}</View>
      </TouchableOpacity>
    )
  }
}

export default Touchable

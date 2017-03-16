/**
 * Helper for native Touchable Views across platforms.
 * Uses TouchableNativeFeedback in Android and TouchableOpacity in iOS.
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
  onPressIn: () => void,
  onPressOut: () => void,
  rippleColor?: string,
  useForeground?: boolean,
  children: ReactElement<*>
}

const Touchable = ({
  onPress = () => { },
  onPressIn = () => { },
  onPressOut = () => { },
  rippleColor,
  useForeground = false,
  children
}: Props) => {

  // Use TouchableNativeFeedback for Android
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        useForeground={
          TouchableNativeFeedback.canUseNativeForeground() ?
            useForeground :
            false
        }
        background={
          rippleColor ?
            TouchableNativeFeedback.Ripple(rippleColor, false) :
            TouchableNativeFeedback.SelectableBackground()
        }
      >
        {children}
      </TouchableNativeFeedback>
    )

  }

  // Use TouchableOpacity for iOS
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View>{children}</View>
      </TouchableOpacity>
    )
  }
}

export default Touchable

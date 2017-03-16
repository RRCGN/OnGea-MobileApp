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
  borderRadius?: number,
  useForeground?: boolean,
  children: ReactElement<*>
}

const Touchable = ({
  onPress = () => { },
  onPressIn = () => { },
  onPressOut = () => { },
  rippleColor,
  borderRadius,
  useForeground = false,
  children
}: Props) => {

  // Use TouchableNativeFeedback for Android
  if (Platform.OS === 'android') {
    return (
      <View style={{ borderRadius }}>
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
              TouchableNativeFeedback.Ripple(rippleColor, borderRadius != null ? true : false) :
              TouchableNativeFeedback.SelectableBackground()
          }
        >
          {children}
        </TouchableNativeFeedback>
      </View>
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

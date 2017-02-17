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
}: Props) => (
  // Use TouchableNativeFeedback for Android
  {Platform.OS === 'android' &&
    <TouchableNativeFeedback
      onPress={onPress}
      useForeground={() => (
        useForeground && TouchableNativeFeedback.canUseNativeForeground()
      )}
      background={() => (
        rippleColor ?
          TouchableNativeFeedback.Ripple(rippleColor, false) :
          TouchableNativeFeedback.SelectableBackground()
      )}>
      <View>{children}</View>
    </TouchableNativeFeedback>
  }

  // Use TouchableNativeFeedback for Android
  {Platform.OS === 'ios' &&
    <TouchableOpacity
      onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  }
)

export default Touchable

/**
 * Flat Button (no background) with touch feedback
 * @flow
 */

import React from 'react'
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native'


type Props = {
  onPress: () => void,
  children: ReactElement<*>
}

const FlatButton = ({ onPress, children }: Props) => {
  // Decide: TouchableOpacity for iOS or TouchableNativeFeedback for Android
  const Touch =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  // Use SelectableBackground only under Android
  // ...as callback, so iOS doesn't get mad.
  const backgroundProps = Platform.select({
    ios: {},
    android: {
      background: () => (TouchableNativeFeedback.SelectableBackground())
    }
  })

  return (
    <Touch
      onPress={onPress}>
      <View style={styles.container}>
        {children}
      </View>
    </Touch>
  )
}

export default FlatButton


const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    padding: 8,
    borderRadius: 2
  }
})

/**
 * Flat Button (no background) with touch feedback
 */

import React from 'react'
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    padding: 8,
    borderRadius: 2
  }
})

const FlatButton = ({ onPress, children }) => {
  const TouchableComponent = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback
  })

  const backgroundProps = Platform.select({
    ios: {},
    android: {
      background: () => (TouchableNativeFeedback.SelectableBackground())
    }
  })

  return (
    <TouchableComponent
      onPress={onPress}>
      <View style={styles.container}>
        {children}
      </View>
    </TouchableComponent>
  )
}

FlatButton.propTypes = {
  onPress: React.PropTypes.func
}

export default FlatButton

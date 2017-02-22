/**
 * Background for the translucent StatusBar in iOS as a Linear Gradient.
 * Returns no Component in Android.
 * @flow
 */

import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


type Props = {
  type?: 'light' | 'dark'
}

const StatusBarBackgroundIOS = ({ type = 'light' }: Props) => {
  if (Platform.OS === 'ios') {
    return (
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0)']}
        style={styles.background}
      />
    )
  }

  return null
}

export default StatusBarBackgroundIOS


const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  }
})

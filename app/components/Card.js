/**
 * Card Component
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity
 } from 'react-native'
import ImageWithCaption from './ImageWithCaption'

/**
 * Color Constants not from ./utils/constants
 * to encapsulate card more
 */
const Colors = {
  CARD_BACKGROUND: '#FFFFFF',
  CARD_BORDER: '#E0E0E0'
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: 2
  },
  segmentSmallSpace: {
    padding: 8
  },
  segmentBigSpace: {
    padding: 16
  },
  segmentWithBorder: {
    borderBottomColor: Colors.CARD_BORDER,
    borderBottomWidth: 1
  }
})


/** Card View */

export const CardView = ({ children }) => {
  const shadowProps = Platform.select({
    ios: {
      shadowOpacity: 0.18,
      shadowRadius: 1.4,
      shadowOffset: {
        height: 1
      }
    },
    android: {
      elevation: 2
    }
  })

  return (
    <View style={styles.card} {...shadowProps}>{children}</View>
  )
}


/** Card Image (Proxy for ImageWithCaption) */

export const CardImage = ({ onPress, ...props }) => {
  const TouchableFeedback =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
  const touchableProps = Platform.select({
    android: {
      background: TouchableNativeFeedback.SelectableBackground(),
      useForeground: TouchableNativeFeedback.canUseNativeForeground() ? true : false
    },
    ios: { }
  })

  if (onPress) {
    return (
      <TouchableFeedback onPress={onPress} {...touchableProps}>
        <View>
          <ImageWithCaption {...props} />
        </View>
      </TouchableFeedback>
    )
  }

  return <ImageWithCaption {...props} />
}

CardImage.propTypes = ImageWithCaption.propTypes


/** Card Actions */

export const CardSegment = ({ hasBorderBottom, space, children }) => {
  const styleList = [
    hasBorderBottom && styles.segmentWithBorder,
    space === 'small' ? styles.segmentSmallSpace : styles.segmentBigSpace
  ]

  return (
    <View style={StyleSheet.flatten(styleList)}>{children}</View>
  )
}

CardSegment.defaultProps = {
  space: 'big',
  hasBorderBottom: false
}

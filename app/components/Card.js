/**
 * Card Component
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity
 } from 'react-native'
import ImageWithCaption from './ImageWithCaption'
import type { Props as IWCProps } from './ImageWithCaption'

// Color Constants not from ./utils/constants to encapsulate card more
const CardColors = {
  CARD_BACKGROUND: '#FFFFFF',
  CARD_BORDER: '#E0E0E0'
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: CardColors.CARD_BACKGROUND,
    borderRadius: 2,
    ...Platform.select({
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
  },
  segmentSmallSpace: {
    padding: 8
  },
  segmentBigSpace: {
    padding: 16
  },
  segmentWithBorder: {
    borderBottomColor: CardColors.CARD_BORDER,
    borderBottomWidth: 1
  }
})


/** Card View */

type CardViewProps = {
  children: ReactElement<*>
}

export const CardView = ({ children }: CardViewProps) => (
  <View style={styles.card}>{children}</View>
)


/** Card Image (Proxy for ImageWithCaption) */

type CardImageProps = {
  onPress?: ?Function,
  props: IWCProps
}

export const CardImage = ({ onPress, ...props }: CardImageProps) => {
  // Decide: TouchableOpacity for iOS or TouchableNativeFeedback for Android
  const Touch =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  // iOS really hates Android and gets angry when you call something from
  // TouchableNativeFeedback.
  // Android is really mad if you try to call `canUseNativeForeground` in
  // a function.
  // This looks a bit strange, but it makes both OS's a bit less angry.
  const touchableProps = Platform.select({
    android: {
      useForeground: Touch.canUseNativeForeground &&
        Touch.canUseNativeForeground(),
      background: Touch.SelectableBackground && Touch.SelectableBackground()
    }
  })

  // If onPress function is available, wrap it in Touch Component
  if (onPress) {
    return (
      <Touch onPress={onPress} {...touchableProps}>
        <View>{/* Touch works only wrapped in <View> */}
          <ImageWithCaption {...props} />
        </View>
      </Touch>
    )
  }

  // If onPress not present, proxy to ImageWithCaption
  return (
    <ImageWithCaption {...props} />
  )
}


/** Card Actions */

type CardSegmentProps = {
  hasBorderBottom: boolean,
  space?: 'small' | 'big',
  children: ReactElement<*>
}

export const CardSegment = (
  { hasBorderBottom = false, space = 'big', children }: CardSegmentProps
) => {

  // Compute styles based on props
  const style = StyleSheet.flatten([
    // Border Bottom
    hasBorderBottom && styles.segmentWithBorder,

    // Big or small Segment Spacing
    space === 'big' ? styles.segmentBigSpace : styles.segmentSmallSpace
  ])

  return (
    <View style={style}>{children}</View>
  )
}

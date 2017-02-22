/**
 * Card Component
 * @flow
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import ImageWithCaption from './ImageWithCaption'
import type { Props as IWCProps } from './ImageWithCaption'


// Color Constants not from utils/constants to encapsulate card more
const CardColors = {
  CARD_BACKGROUND: '#FFFFFF',
  CARD_BORDER: '#E0E0E0'
}


/** Card View */

type CardViewProps = {
  children: ReactElement<*>
}

export const CardView = ({ children }: CardViewProps) => (
  <View style={styles.card}>{children}</View>
)


/** Card Segment */

type CardSegmentProps = {
  hasBorderBottom: boolean,
  space?: 'small' | 'big',
  children: ReactElement<*>
}

export const CardSegment = (
  { hasBorderBottom = false, space = 'big', children }: CardSegmentProps
) => (
  <View style={[
    hasBorderBottom && styles.segmentWithBorder,
    space === 'big' ? styles.segmentBigSpace : styles.segmentSmallSpace
  ]}>{children}</View>
)


const styles = StyleSheet.create({
  card: {
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
    }),
    backgroundColor: CardColors.CARD_BACKGROUND,
    borderRadius: 2
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

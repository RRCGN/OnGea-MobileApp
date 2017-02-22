/**
 * Component Collection for a Material Card.
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'


// Color Constants not from utils/constants to encapsulate card more
const CardColors = {
  CARD_BACKGROUND: '#FFFFFF',
  CARD_BORDER: '#E0E0E0'
}


/** Card View – outer wrapper of a card */

type CardViewProps = {
  children: Array<ReactElement<*>>
}

export const CardView = ({ children }: CardViewProps) => (
  <View style={styles.card}>{children}</View>
)


/** Card Segment – section in a card */

type CardSegmentProps = {
  hasBorderBottom?: boolean,
  space?: 'small' | 'big',
  children: Array<ReactElement<*>>
}

export const CardSegment = (
  { hasBorderBottom = false, space = 'big', children }: CardSegmentProps
) => (
  <View
    style={[
      hasBorderBottom && styles.segmentWithBorder,
      space === 'big' ? styles.segmentBigSpace : styles.segmentSmallSpace
    ]}
  >{children}</View>
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

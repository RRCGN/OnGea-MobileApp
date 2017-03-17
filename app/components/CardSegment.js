/**
 * Card Segment.
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'


type CardSegmentProps = {
  hasBorderBottom?: boolean,
  children: Array<ReactElement<*>>
}

type CardSegmentSmall = {
  small: boolean,
  big?: null
}

type CardSegmentBig = {
  small?: null,
  big: boolean
}

const CardSegment = ({
  hasBorderBottom = false,
  small,
  big,
  children
}: CardSegmentProps & (CardSegmentSmall | CardSegmentBig)) => (
  <View
    style={[
      hasBorderBottom && styles.segmentWithBorder,
      big && styles.segmentBigSpace,
      small && styles.segmentSmallSpace
    ]}
  >{children}</View>
)

export default CardSegment


const styles = StyleSheet.create({
  segmentSmallSpace: {
    padding: 8
  },
  segmentBigSpace: {
    padding: 16
  },
  segmentWithBorder: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1
  }
})

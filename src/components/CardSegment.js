/**
 * Card Segment.
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Colors } from '../utils/constants'


type Props = {
  hasBorderBottom?: boolean,
  children: Array<ReactElement<*>>
}

type SmallProps = {
  small: boolean,
  big?: null
}

type BigProps = {
  small?: null,
  big: boolean
}


const CardSegment = ({
  hasBorderBottom = false,
  small,
  big,
  children
}: Props & (SmallProps | BigProps)) => (
  <View
    style={[
      hasBorderBottom && styles.segmentWithBorder,
      big && styles.segmentBigSpace,
      small && styles.segmentSmallSpace
    ]}
  >
    {children}
  </View>
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
    borderBottomColor: Colors.DARK_DIVIDER,
    borderBottomWidth: 1
  }
})
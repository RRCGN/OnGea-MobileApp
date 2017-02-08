/**
 * Card Component
 */

import React, { Component } from 'react'
import { View, StyleSheet, Image, Platform, Text } from 'react-native'
import ImageWithCaption from './ImageWithCaption'

const Colors = {
  WHITE: '#FFFFFF'
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 2
  },
  segmentSmallSpace: {
    padding: 8
  },
  segmentBigSpace: {
    padding: 16
  },
  segmentWithBorder: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: StyleSheet.hairlineWidth
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

export const CardImage = (props) => {
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

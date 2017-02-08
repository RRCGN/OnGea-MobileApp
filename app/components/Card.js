/**
 * Card Component
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Image, Platform } from 'react-native'
import ImageWithCaption from './ImageWithCaption'

const Colors = {
  WHITE: '#FFFFFF'
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 2
  }
})

export class CardView extends Component {
  render() {
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
    const elevation = this.props.elevation || 2
    return (
      <View style={styles.card} {...shadowProps}>{this.props.children}</View>
    )
  }
}

export class CardImage extends Component {
  render() {
    return (
      <ImageWithCaption {...this.props} />
    )
  }
}

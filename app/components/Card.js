/**
 * Card Component
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Colors = {
  WHITE: '#FFFFFF'
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 2
  },
  imageContainer: {
    marginLeft: -16,
    marginRight: -16,
    marginTop: -16
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  }
})

export class CardView extends Component {
  render() {
    const elevation = this.props.elevation || 2
    return (
      <View style={styles.card} elevation={elevation}>{this.props.children}</View>
    )
  }
}

export class CardImage extends Component {
  render() {
    return (

        <Image style={styles.image} resizeMode='cover' source={require('../assets/concert.jpg')} />
    )
  }
}

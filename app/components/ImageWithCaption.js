/**
 * Aspect Ratio Image with an overlayed caption
 */

import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  subtext: {
    color: 'white',
    fontSize: 14
  },
  image: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  }
})

export default class ImageWithCaption extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0, width: 0 }
  }

  handleOnLayout = (event) => {
    const { width } = event.nativeEvent.layout
    this.setState({ height: width * (9/16), width })
  }

  render() {
    const { height, width } = this.state

    return (
      <View onLayout={this.handleOnLayout} style={{ position: 'relative' }}>
        <Image
          resizeMode="cover"
          style={{ height, width, ...StyleSheet.flatten(styles.image) }}
          source={this.props.source}
        />
        <View style={styles.overlay}>
          <Text style={styles.text}>{this.props.title}</Text>
          {this.props.subtitle && (
            <Text style={styles.subtext}>{this.props.subtitle}</Text>
          )}
        </View>
      </View>
    )
  }
}

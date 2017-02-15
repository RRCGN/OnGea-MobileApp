/**
 * Aspect Ratio Image with an overlayed caption
 */

import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: 'white',
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  subtext: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent'
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
    const { title, subtitle, source } = this.props

    return (
      <View onLayout={this.handleOnLayout} style={{ position: 'relative' }}>
        <Image
          resizeMode="cover"
          style={{ height, width, ...StyleSheet.flatten(styles.image) }}
          source={source}
        />
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} style={styles.overlay}>
          <Text style={styles.text}>{title}</Text>
          {subtitle && (
            <Text style={styles.subtext}>{subtitle}</Text>
          )}
        </LinearGradient>
      </View>
    )
  }
}

ImageWithCaption.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  source: Image.propTypes.source.isRequired
}

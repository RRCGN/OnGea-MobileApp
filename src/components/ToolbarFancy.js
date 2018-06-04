/**
 *
 * @flow
 */

import React from 'react'
import { View, Image, Text, StyleSheet, Platform, StatusBar } from 'react-native'


const ToolbarFancy = ({ image, title }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image}>
      <View style={styles.overlay} />
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
    </Image>
  </View>
)

export default ToolbarFancy


const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: Platform.OS === 'ios' ? 64 : 80,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: null,
    ...Platform.select({
      ios: {
        paddingTop: 37,
        height: 64
      },
      android: {
        paddingTop: StatusBar.currentHeight,
        height: 80,
        paddingLeft: 55,
        paddingRight: 18
      }
    })
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  title: {
    flex: 0,
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 1 },
    ...Platform.select({
      ios: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center'
      },
      android: {
        fontWeight: '500',
        fontSize: 17,
        alignSelf: 'flex-start'
      }
    })
  }
})

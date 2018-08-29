import React from 'react'
import { View, Image, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import dimensions from '../utils/dimensions'


const ToolbarFancy = ({ image, title }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <View style={styles.overlay} />
    <Text numberOfLines={2} style={styles.title}>{title}</Text>
  </View>
)

export default ToolbarFancy


const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: dimensions.stickyHeaderHeight,
    paddingTop: getStatusBarHeight(),
    justifyContent: 'center'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    justifyContent: 'center'
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
    fontWeight: '700',
    ...Platform.select({
      ios: {
        fontSize: 16,
        alignSelf: 'center'
      },
      android: {
        fontSize: 17,
        alignSelf: 'flex-start',
        marginLeft: 55,
        paddingRight: 16
      }
    })
  }
})

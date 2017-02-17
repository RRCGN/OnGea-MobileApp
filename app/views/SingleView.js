/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { View, Platform, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native'
import ImageWithCaption from '../components/ImageWithCaption'
import ToolbarButton from '../components/ToolbarButton'
import LinearGradient from 'react-native-linear-gradient'
import ParallaxScrollView from 'react-native-parallax-scroll-view'

export default class SingleView extends Component {
  static navigationOptions = {
    title: "",
    header: ({ goBack, state }) => ({
      style: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        marginBottom: Platform.OS === 'ios' ? -64 : -56 - StatusBar.currentHeight,
        zIndex: 1,
        elevation: 0,
        ...Platform.select({
          android: {
            position: 'relative',
            top: StatusBar.currentHeight
          }
        })
      },
      titleStyle: {
        color: 'white'
      },
      left: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          floating={true}
          onPress={() => goBack(null)}
        />
      )
    })
  }

  render() {
    const { width } = Dimensions.get('window')
    const ratio32Height = width * (2/3)
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'ios' &&
          <LinearGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0)']} style={styles.iosTopGradient} />
        }
        <ParallaxScrollView
          style={{ flex: 1 }}
          fadeOutForeground={false}
          backgroundColor="rgba(255, 0, 0, 0.5)"
          parallaxHeaderHeight={ratio32Height}
          renderBackground={() => (
            <View style={{ height: ratio32Height }}>
              <Image
                style={{ flex: 1 }}
                source={require('../assets/concert.jpg')}
                width={width}
                height={ratio32Height}
                resizeMode="cover" />
            </View>
          )}
          renderForeground={() => (
            <Text>Hello</Text>
          )}
          stickyHeaderHeight={100}
          renderStickyHeader={() => (
            <View style={{ height: 100, paddingTop: 60 }}>
              <Text style={{ color: 'white'}}>Foo bar</Text>
            </View>
          )}
        >
          <View style={{ height: 1000, flex: 1 }}>

          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  iosTopGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  }
})

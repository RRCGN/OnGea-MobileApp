/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { View, Platform, StyleSheet, StatusBar, ScrollView } from 'react-native'
import ImageWithCaption from '../components/ImageWithCaption'
import ToolbarButton from '../components/ToolbarButton'
import LinearGradient from 'react-native-linear-gradient'

export default class SingleView extends Component {
  static navigationOptions = {
    title: "",
    header: ({ goBack }) => ({
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
    return (
      <View>
        {Platform.OS === 'ios' &&
          <LinearGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0)']} style={styles.iosTopGradient} />
        }
        <ScrollView>
          <ImageWithCaption source={require('../assets/concert.jpg')} title="Tolle Reise" ratio="3:2" />
          <View style={{ height: 1000 }} />
        </ScrollView>
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

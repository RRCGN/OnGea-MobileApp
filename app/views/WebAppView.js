/**
 * Screen for OnGea WebView
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, StatusBar, Platform } from 'react-native'
import PlatformIcon from '../components/PlatformIcon'

export default class WebViewScreen extends Component {
  static navigationOptions = {
    title: 'Web',
    tabBar: {
      label: 'Web',
      icon: ({ tintColor, focused }) => (
        <PlatformIcon
          iosIcon={focused ? 'ios-globe' : 'ios-globe-outline'}
          androidIcon="public"
          size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
      )
    }
  }

  render() {
    return (
      <View>
        <Text>Hellooo WebApp!</Text>
      </View>
    )
  }
}

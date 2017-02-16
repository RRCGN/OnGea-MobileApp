/**
 * Screen for OnGea WebView
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../utils/constants'
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
          size={24} color={tintColor} />
      )
    }
  }

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor={Colors.DARK_BLUE} />
        <Text>Hellooo WebApp!</Text>
      </View>
    )
  }
}

/**
 * Screen for OnGea WebView
 */

import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import WebTabButton from '../components/WebTabButton'
import { Colors } from '../utils/constants'

export default class WebViewScreen extends Component {
  static navigationOptions = {
    title: 'Web',
    tabBar: {
      label: 'Web',
      icon: ({ tintColor, focused }) => (
        <WebTabButton tintColor={tintColor} focused={focused} />
      )
    }
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={Colors.DARK_BLUE} />
        <Text>Hellooo WebApp!</Text>
      </View>

    )
  }
}

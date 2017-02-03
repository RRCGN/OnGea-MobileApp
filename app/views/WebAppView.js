/**
 * Screen for OnGea Web View
 * @flow
 */

import React, { Component } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import WebTabButton from '../components/WebTabButton'

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
      <Text>Hellooo WebApp!</Text>
    )
  }
}

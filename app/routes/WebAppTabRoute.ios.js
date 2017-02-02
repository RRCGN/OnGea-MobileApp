/**
 * Screen for OnGea Web View
 * @flow
 */

import React, { Component } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class WebAppTabRoute extends Component {
  static navigationOptions = {
    title: 'Web',
    tabBar: {
      label: 'Web',
      icon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-globe' : 'ios-globe-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }

  render() {
    return (
      <Text>Hellooo WebApp!</Text>
    )
  }
}

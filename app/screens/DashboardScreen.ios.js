/**
 * Dashboard Overview Screen
 * @flow
 */

import React, { Component } from 'react'
import {
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    tabBar: {
      label: 'Dashboard',
      icon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-briefcase' : 'ios-briefcase-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }

  render() {
    return (
      <Text>Hellooo!</Text>
    )
  }
}

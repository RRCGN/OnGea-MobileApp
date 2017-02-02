/**
 * Dashboard Overview
 * @flow
 */

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { dashboardTabBar as tabBar } from '../navigators'

export default class TestView extends Component {
  static navigationOptions = {
    title: 'Jurrp', tabBar
  }

  render() {
    return (
      <Text>Jurrrp</Text>
    )
  }
}

/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class TestView extends Component {
  static navigationOptions = {
    title: ({ state }) => `Mobility ${state.params.no}`
  }

  render() {
    return (
      <Text>Jurrrp</Text>
    )
  }
}

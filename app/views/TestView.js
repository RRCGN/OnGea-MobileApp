/**
 * Dashboard Overview
 * @flow
 */

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import navOpt from '../lib/mobilities-tab-options'

export default class TestView extends Component {
  static navigationOptions = navOpt({ title: ({ state }) => `Mobility ${state.params.no}` })

  render() {
    return (
      <Text>Jurrrp</Text>
    )
  }
}

/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class TestView extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.title,
    header: ({ state, setParams }) => ({
      left: undefined,
      style: {
        backgroundColor: 'transparent'
      },
      titleStyle: {
        backgroundColor: 'transparent'
      }
    })
  }

  render() {
    return (
      <Text>Jurrrp</Text>
    )
  }
}

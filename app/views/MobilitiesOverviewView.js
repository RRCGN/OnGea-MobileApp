/**
 * Dashboard Overview
 * @flow
 */

import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DashboardOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button onPress={() => navigate('Test', { no: 1 })} title="Mobility 1" />
        <Button onPress={() => navigate('Test', { no: 2 })} title="Mobility 2" />
        <Button onPress={() => navigate('Test', { no: 3 })} title="Mobility 3" />
      </View>
    )
  }
}

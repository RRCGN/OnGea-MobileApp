/**
 * Dashboard Overview
 * @flow
 */

import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { dashboardTabBar as tabBar } from '../navigators'

export default class DashboardOverviewView extends Component {
  static navigationOptions = {
    title: 'Activities', tabBar
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button onPress={() => navigate('Test')} title="Acivity 1" />
        <Button onPress={() => navigate('Test')} title="Acivity 2" />
        <Button onPress={() => navigate('Test')} title="Acivity 3" />
      </View>
    )
  }
}

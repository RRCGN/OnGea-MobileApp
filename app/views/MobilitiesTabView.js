/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 */

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import MobilitiesTabButton from '../components/MobilitiesTabButton'

export default class MobilitiesTabView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Mobilities',
      icon: ({ tintColor, focused }) => (
        <MobilitiesTabButton tintColor={tintColor} focused={focused} />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <MobilitiesNavigator />
      </View>
    )
  }
}

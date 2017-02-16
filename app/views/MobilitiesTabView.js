/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 * @flow
 */

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import PlatformIcon from '../components/PlatformIcon'

export default class MobilitiesTabView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Mobilities',
      icon: ({ tintColor, focused }) => (
        <PlatformIcon
          iosIcon={focused ? 'ios-bonfire' : 'ios-bonfire-outline'}
          androidIcon="landscape"
          size={24} color={tintColor} focused={focused} />
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

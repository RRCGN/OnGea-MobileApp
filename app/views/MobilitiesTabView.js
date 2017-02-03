/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StatusBar } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import MobilitiesTabButton from '../components/MobilitiesTabButton'
import { Colors } from '../utils/constants'

export default class MobilitiesTabView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Mobilities',
      icon: ({ tintColor, focused }) => (
        <MobilitiesTabButton tintColor={tintColor} focused={focused} />
      )
    }
  }

  componentDidMount() {
    Platform.OS === 'android' && StatusBar.setBackgroundColor(Colors.DARK_BLUE, true)
  }

  render() {
    return (
      <MobilitiesNavigator />
    )
  }
}

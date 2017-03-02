/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 * @flow
 */

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import PlatformIcon from '../components/PlatformIcon'
import Login from '../containers/Login'

export default class MobilitiesTabView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Mobilities',
      icon: ({ tintColor, focused }) => (
        <PlatformIcon
          iosIcon={focused ? 'ios-bonfire' : 'ios-bonfire-outline'}
          androidIcon="landscape"
          size={24} color={tintColor} />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.36)"
          barStyle="light-content"
        />
        {this.props.loggedIn ?
          <MobilitiesNavigator /> :
          <Login />
        }
      </View>
    )
  }
}

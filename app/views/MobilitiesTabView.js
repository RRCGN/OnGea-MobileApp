/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 * @flow
 */

import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
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
          size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
      )
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  componentWillMount() {
    const { loggedIn } = this.props
    if (loggedIn) {
      this.setState({ loggedIn })
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
        {this.state.loggedIn ?
          <MobilitiesNavigator /> :
          <Login />
        }
      </View>
    )
  }
}

/**
 * Contents of Mobilities Tab. Nested Navigator.
 * Mobilities Tab renders a StackNavigator, see MobilitiesNavigator.
 * @flow
 */

import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import PlatformIcon from '../components/PlatformIcon'
import LoginView from './LoginView'


type TabViewState = {
  loggedIn: boolean,
  token?: string
}

export default class MobilitiesTabView extends Component {
  state: TabViewState

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

  constructor() {
    super()
    this.state = { loggedIn: false }
  }

  componentWillMount() {
    // Initial check if we're logged in to render the proper screen.
    const { loggedIn } = this.props.screenProps
    if (loggedIn) {
      this.setState({ loggedIn })
    }
  }

  render() {
    const { loggedIn } = this.props.screenProps
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.36)"
          barStyle="light-content"
        />
        {this.state.loggedIn ?
          <MobilitiesNavigator /> :
          <LoginView onSuccessfulLogin={this._handleSuccessfulLogin} />
        }
      </View>
    )
  }

  _handleSuccessfulLogin = (token) => {
    this.setState({ token, loggedIn: true })
  }
}

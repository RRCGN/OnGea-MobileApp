/**
 * Main App
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import SplashScreen from 'rn-splash-screen'
import MainTabNavigator from './navigators/MainTabNavigator'
import LoginService from './services/LoginService'

export default class OnGeaApp extends Component {

  state: {
    loaded: boolean,
    loggedIn: ?boolean,
    token?: string
  }

  constructor() {
    super()

    this.state = {
      loaded: false,
      loggedIn: null
    }
  }

  componentDidMount() {
    // Facebook/Flow doesn't allow async on lifecycle methods.
    // It would look much nicer like `async componentDidMount()`, but flow
    // throws an error.

    // Check if we're already logged in to show correct view.
    (async () => {
      const { loggedIn, token } = await LoginService.checkStatus()
      this.setState({
        token,
        loggedIn,
        loaded: true
      })

      SplashScreen.hide()
    })()
  }

  render() {
    const { loggedIn, token } = this.state

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        {this.state.loaded &&
          <MainTabNavigator
            screenProps={{
              loggedIn,
              token,
              logout: this._handleLogout,
              login: this._handleLogin
            }}
          />
        }
      </View>
    )
  }

  _handleLogout = async (): Promise<void> => {
    try {
      await LoginService.clearToken()
    } catch (error) {
      console.error('Could not clear token:', error)
    }

    this.setState({ loggedIn: false, token: '' })
    this._rerender()
  }

  _handleLogin = async (token: string): Promise<void> => {
    try {
      await LoginService.saveToken(token)
    } catch (error) {
      console.log('Error when saving token:', error)
    }

    this.setState({ loggedIn: true, token })
    this._rerender()
  }

  _rerender() {
    // FIXME: changing screenProps doesn't trigger a re-render, bug in
    //   react-navigation. Solution is to re-render the navigator itself.
    //   https://github.com/react-community/react-navigation/issues/577
    this.setState({ loaded: false })
    this.setState({ loaded: true })
  }

}


// $FlowFixMe: uuugh flow doesn't know about ignoredYellowBox why
console.ignoredYellowBox = [
   'Behaviour of screenProps has changed',
]

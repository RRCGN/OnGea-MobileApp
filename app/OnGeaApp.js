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

    // Check if we're already logged in and pass result to Navigator,
    // so we can render the LoginView, if we need it.
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
          <MainTabNavigator screenProps={{ loggedIn, token }} />
        }
      </View>
    )
  }
}


// $FlowFixMe: uuugh flow doesn't know about ignoredYellowBox why
console.ignoredYellowBox = [
   'Behaviour of screenProps has changed',
]

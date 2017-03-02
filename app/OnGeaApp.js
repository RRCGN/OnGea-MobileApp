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
import LoginManager from './managers/LoginManager'

export default class OnGeaApp extends Component {

  state: {
    loaded: boolean,
    loggedIn: ?boolean
  }

  constructor() {
    super()

    this.state = {
      loaded: false,
      loggedIn: null
    }
  }

  async componentDidMount() {
    const { loggedIn, token } = await LoginManager.checkStatus()
    this.setState({
      loggedIn,
      loaded: true
    })

    SplashScreen.hide()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        {this.state.loaded &&
          <MainTabNavigator loggedIn={this.state.loggedIn} />
        }
      </View>
    )
  }
}

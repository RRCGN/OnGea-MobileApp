/**
 * Main App
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  NetInfo,
  StatusBar
} from 'react-native'
import SplashScreen from 'rn-splash-screen'
import MainTabNavigator from './navigators/MainTabNavigator'
import LoginService from './services/LoginService'
import DataService from './services/DataService'


export default class OnGeaApp extends Component {

  state: {
    loaded: boolean,
    loggedIn: ?boolean,
    token?: string,
    data?: any
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

    // Check logged in status, online status and save into state
    (async () => {
      const { loggedIn, token } = await LoginService.checkStatus()
      const isOnline = await NetInfo.isConnected.fetch()

      if (!loggedIn) {
        this.setState({ loggedIn, loaded: true })
        SplashScreen.hide()
        return
      }

      const data = isOnline
        ? await DataService.fetchAndSave()
        : await DataService.getAll()

      this.setState({ loggedIn, token, data, loaded: true })
      SplashScreen.hide()
    })()
  }

  render() {
    const { loggedIn, token, data } = this.state

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
              login: this._handleLogin,
              refreshData: this._handleRefresh,
              data
            }}
          />
        }
      </View>
    )
  }

  _handleLogout = async (): Promise<void> => {
    try {
      await LoginService.clearToken()
      await DataService.purge()
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

    const data = await DataService.fetchAndSave()

    this.setState({ loggedIn: true, token, data })
    this._rerender()
  }

  _handleRefresh = async (): Promise<void> => {
    await DataService.fetchAndSave()
    const data = await DataService.getAll()
    this.setState({ data })
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

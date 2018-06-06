import React from 'react'
import {
  View,
  NetInfo,
  StatusBar
} from 'react-native'
import SplashScreen from 'rn-splash-screen'

import MainTabNavigator from './navigators/MainTabNavigator'
import LoginService from './services/LoginService'
import DataService from './services/DataService'
import NotificationService from './services/NotificationService'

import { asyncStorageDebugger } from './utils/debugger'

class RootView extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loaded: false,
    loggedIn: null,
    token: '',
    logoutToken: '',
    data: null
  }

  componentWillMount() {
    this.notificationService = new NotificationService()
    this.notificationService.register()
  }

  componentDidMount() {
    // Check logged in status, online status and save into state
    this.proofStatus()
  }

  proofStatus = async () => {
    // await LoginService.clearTokens()
    asyncStorageDebugger()

    const { loggedIn, token, logoutToken } = await LoginService.checkStatus()
    const isOnline = await NetInfo.isConnected.fetch()

    if (!loggedIn) {
      this.setState({ loggedIn, loaded: true })
      SplashScreen.hide()
      return
    }

    const data = isOnline
      ? await DataService.fetchAndSave()
      : await DataService.getAll()
    this.setState({ loggedIn, token, logoutToken, data, loaded: true })
    SplashScreen.hide()
  }

  render() {
    const { loggedIn, token, logoutToken, data } = this.state
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
              logoutToken,
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

  _handleLogout = async () => {
    try {
      await LoginService.clearTokens()
      await DataService.purge()
    } catch (error) {
      console.error('Could not clear token:', error)
    }

    this.setState({ loggedIn: false, token: '' })
    this._rerender()
  }

  _handleLogin = async (tokens) => {
    try { await LoginService.saveTokens(tokens) }
    catch (e) { console.log('Error when saving token:', e)}

    const data = await DataService.fetchAndSave()
    this.setState({ ...tokens, loggedIn: true, data })
    this._rerender()
  }

  _handleRefresh = async () => {
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
  'Remote debugger',
  'Behaviour of screenProps has changed',
  'Warning: isMounted(...) is deprecated'
]




export default RootView

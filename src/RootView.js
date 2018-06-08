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

  state = {
    loaded: false,
    loggedIn: false,
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
    // asyncStorageDebugger()
    // this._handleLogout()


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
    this.setState({ loggedIn, token, logoutToken, data: data.data, loaded: true })
    SplashScreen.hide()
  }
  reloadHandler = async () => {
    await this._fetchDataFromApi()
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
              reloadHandler: this.reloadHandler,
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

  _fetchDataFromApi = async () => {
    const responseData = await DataService.fetchAndSave()
    this.setState({ loggedIn: true, data: responseData.data })
  }

  _handleLogin = async (tokens) => {
    try { await LoginService.saveTokens(tokens) }
    catch (e) { console.log('Error when saving token:', e)}
    this.setState({ ...tokens })
    await this._fetchDataFromApi()
  }

  _handleLogout = async () => {
    try {
      await LoginService.clearTokens()
      await DataService.purge()
    } catch (error) {
      console.error('Could not clear token:', error)
    }

    this.setState({ loggedIn: false, token: '' })
  }




  _handleRefresh = async () => {
    await DataService.fetchAndSave()
    const responseData = await DataService.getAll()
    this.setState({ data: responseData.data })
  }

}


// $FlowFixMe: uuugh flow doesn't know about ignoredYellowBox why
console.ignoredYellowBox = [
  'Remote debugger',
  'Behaviour of screenProps has changed',
  'Warning: isMounted(...) is deprecated',
  'You should only render one navigator explicitly' // check the comment bellow
]

// in relation to rendering navigation issue, check the link - later should be implemented
// https://reactnavigation.org/docs/en/common-mistakes.html#explicitly-rendering-more-than-one-navigator



export default RootView

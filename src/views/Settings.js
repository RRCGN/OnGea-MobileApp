import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'
import { Colors } from '../utils/constants'

import ApiService from '../services/ApiService'
import { asyncStorageDebugger, loadDataDebugger } from '../utils/debugger'

class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight } })
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)} /> )
    }
  }

  handleLogout = async () => {
    const { screenProps } = this.props
    if (await ApiService.logout(screenProps.logoutToken)) {
      this.props.screenProps.logout()
    } else {
      console.log('cannot logout - server side')
      // managing sad-path need to be done from server side
      // it MUST be logout from server, then to be able logout in client-side
      // that is because if the user is logged at the server side, cannot login again and get token :/
    }
    this.props.screenProps.logout() // debug
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <View style={{ padding: 18 }} />
        <Button label="Show Maps" onPress={ () => { this.props.navigation.navigate('ShowMap') } } />
        <View style={{ padding: 18 }} />
        <Button label="Logout" onPress={ () => { this.handleLogout() } } />
        { __DEV__ && (
          <View style={{paddingTop: 50}}>
            <Button label='Debug Async Storage' onPress={() => {asyncStorageDebugger()}} />
            <Button label='Load content' onPress={() => {loadDataDebugger()}} />
          </View>
        )}
      </View>
    )
  }
}


Settings.propTypes = { screenProps: PropTypes.object }


export default Settings

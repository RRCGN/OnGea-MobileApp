import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'
import { asyncStorageDebugger, loadDataDebugger } from '../utils/debugger'

class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)} /> )
    }
  }

  handleLogout() {
    this.props.logout()
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


Settings.propTypes = { logout: PropTypes.func }

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  auth: state.auth
})

import { logout } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  logout: (props) => { dispatch(logout(props)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)

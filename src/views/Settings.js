import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'
import DebugBoard from '../components/debug/DebugBoard'

import { logout } from '../redux/ducks/auth'
import { resetActivities } from '../redux/ducks/activities'

class Settings extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    resetActivities: PropTypes.func.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  handleLogout = () => {
    this.props.logout()
    this.props.resetActivities()
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <View style={{ padding: 18 }} />
        <Button label="Logout" onPress={this.handleLogout} />
        {__DEV__ && (
          <View style={{ paddingTop: 50 }}>
            <DebugBoard />
          </View>
        )}
      </View>
    )
  }
}

import { connect } from 'react-redux'


const mapDispatchToProps = {
  logout,
  resetActivities
}

export default connect(
  null,
  mapDispatchToProps
)(Settings)

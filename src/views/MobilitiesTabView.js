import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import PropTypes from 'prop-types'
// import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import MobilitiesTabView from '../views/MobilitiesTabView'
import PlatformIcon from '../components/PlatformIcon'
import Login from './Login'


class MobilitiesTabView extends Component {

  componentWillMount() {
    const { loggedIn } = this.props.screenProps
    this.props.navigation.setParams({ loggedIn })
  }

  render() {
    const { login, loggedIn } = this.props.screenProps
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.36)"
          barStyle="light-content"
        />
        <Login onSuccessfulLogin={login} {...this.props} />
        {loggedIn
          ? <MobilitiesTabView screenProps={this.props.screenProps} />
          : <Login onSuccessfulLogin={login} {...this.props} />
        }
      </View>
    )
  }
}

MobilitiesTabView.propTypes = { screenProps: PropTypes.object, navigation: PropTypes.object }

export default MobilitiesTabView

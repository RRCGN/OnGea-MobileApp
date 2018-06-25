import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import PropTypes from 'prop-types'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import PlatformIcon from '../components/PlatformIcon'
import Login from './Login'


class MobilitiesTabView extends Component {
  static navigationOptions = {
    tabBarLabel: 'Activities',
    tabBarIcon: ({ tintColor, focused }) => (
        <PlatformIcon
          iosIcon={focused ? 'ios-bonfire' : 'ios-bonfire-outline'}
          androidIcon="landscape"
          size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
      )
  }

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
        {loggedIn
          ? <MobilitiesNavigator screenProps={this.props.screenProps} />
          : <Login onSuccessfulLogin={login} {...this.props} />
        }
      </View>
    )
  }
}

MobilitiesTabView.propTypes = { screenProps: PropTypes.object, navigation: PropTypes.object }

export default MobilitiesTabView

import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import MobilitiesNavigator from '../navigators/MobilitiesNavigator'
import PlatformIcon from '../components/PlatformIcon'
import LoginView from './LoginView'


export default class MobilitiesTabView extends Component {
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
          : <LoginView onSuccessfulLogin={login} {...this.props} />
        }
      </View>
    )
  }
}

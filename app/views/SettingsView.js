/**
 * Settings View
 * @flow
 */

import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class SettingsView extends Component {
  static navigationOptions = {
    title: 'Einstellungen'
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Logout" onPress={this.props.screenProps.logout} />
      </View>
    )
  }
}

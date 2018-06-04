/**
 * Settings View
 * @flow
 */

import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'
import { Colors } from '../utils/constants'

export default class SettingsView extends Component {
  static navigationOptions = {
    title: 'Settings',
    header: ({ goBack }) => ({
      style: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight
          }
        })
      },
      titleStyle: {
        color: Colors.WHITE
      },
      left: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => goBack(null)}
        />
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <Button label="Logout" onPress={this.props.screenProps.logout} />
      </View>
    )
  }
}

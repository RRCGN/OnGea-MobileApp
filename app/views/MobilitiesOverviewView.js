/**
 * Mobilities Overview
 */

import React, { Component } from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import MobilitiesListView from './MobilitiesListView'
import { Colors } from '../utils/constants'
import {ToolbarButton} from '../components/Button'

export default class MobilitiesOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities',
    header: ({ navigate }) => ({
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
      right: (
        <ToolbarButton
          androidIcon="settings"
          iosIcon="ios-cog"
          onPress={() => navigate('Settings')}
        />
      )
    })
  }

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.36)" />
        <MobilitiesListView
          refreshData={this.props.screenProps.refreshData}
          activities={this.props.screenProps.data.activities}
          {...this.props}
        />
      </View>
    )
  }
}

/**
 * Mobilities Overview
 */

import React, { Component } from 'react'
import { Platform, StatusBar, View } from 'react-native'
import MobilitiesListView from './MobilitiesListView'
import { Colors } from '../utils/constants'

export default class MobilitiesOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities',
    header: {
      style: {
        backgroundColor: Colors.BLUE,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight
          }
        })
      },
      titleStyle: {
        color: Colors.WHITE
      }
    }
  }

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.36)" />
        <MobilitiesListView {...this.props} />
      </View>
    )
  }
}

/**
 * Detail View
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native'

import ToolbarButton from '../components/ToolbarButton'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'

import { Colors } from '../utils/constants'


export default class SingleView extends Component {
  static navigationOptions = {
    title: "",
    header: ({ goBack, state }) => {
      return {
        style: {
          borderRadius: 0,
          backgroundColor: 'transparent',
          marginBottom: Platform.OS === 'ios' ? -64 : -56 - StatusBar.currentHeight,
          zIndex: 1,
          elevation: 0,
          ...Platform.select({
            android: {
              marginTop: StatusBar.currentHeight
            }
          })
        },
        titleStyle: {
          color: 'white'
        },
        left: (
          <ToolbarButton
            androidIcon="arrow-back"
            iosIcon="ios-arrow-back"
            floating={true}
            onPress={() => goBack(null)}
          />
        )
      }
    }
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
})

/**
 * Map View
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'
import MapView from 'react-native-maps'

import ToolbarButton from '../components/ToolbarButton'
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
    const { params } = this.props.navigation.state

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

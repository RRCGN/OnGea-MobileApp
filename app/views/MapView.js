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
import * as Animatable from 'react-native-animatable'

import ToolbarButton from '../components/ToolbarButton'
import ListItemFancy from '../components/ListItemFancy'
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

  constructor(props) {
    super(props)

    const { params } = props.navigation.state

    this.state = {
      initCoords: {
        latitude: params.location.lat,
        longitude: params.location.long,
        latitudeDelta: 0.01,
        longitudeDelta: 0.005
      },
      icon: {
        name: params.icon
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.panel.transitionTo({ translateY: 0 }, 300, 'ease-out')
    }, 500)
  }

  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          toolbarEnabled={false}
          initialRegion={this.state.initCoords}
          onRegionChange={this._handleRegionChange}
          onMarkerPress={this._handleItemPress}
          ref="map"
        >
          <MapView.Marker
            coordinate={this.state.initCoords}
          />
        </MapView>
        <Animatable.View
          style={styles.panel}
          ref="panel"
        >
          <ListItemFancy
            primary={params.primary}
            secondary={params.secondary}
            icon={this.state.icon.name}
            iconColor={this.state.icon.color}
            onPress={this._handleItemPress}
          />
        </Animatable.View>
      </View>
    )
  }

  _handleItemPress = () => {
    const { params } = this.props.navigation.state

    this.refs.map.animateToRegion(this.state.initCoords)
  }

  _handleRegionChange = (region) => {
    const { params } = this.props.navigation.state
    const { initCoords } = this.state

    function round(value, decimalPlaces = 3) {
      const places = Math.pow(10, decimalPlaces)
      return Math.round(value * places) / places
    }

    if (
        (round(region.latitude) === round(initCoords.latitude)) &&
        (round(region.longitude) === round(initCoords.longitude))
      ) {
      this.setState({ icon: { name: params.icon, color: null }})
    } else {
      this.setState({ icon: { name: 'map-marker-radius', color: '#2196F3' }})
    }
  }


}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    elevation: 8,
    transform: [{ translateY: 80 }]
  }
})

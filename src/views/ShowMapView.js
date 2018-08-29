import React from 'react'
import { View, StyleSheet } from 'react-native'
import Config from 'react-native-config'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

import ToolbarButton from '../components/ToolbarButton'
import MapInfoBar from '../components/MapInfoBar'
import { transparentHeaderStyle as headerStyle } from '../utils/styles'

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN)

export default class ShowMap extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      headerStyle,
      headerLeft: (
        <ToolbarButton
          iconColor="black"
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          floating={true}
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  getCoordinates = () => {
    const { place } = this.props.navigation.state.params
    return [+place.longitude, +place.latitude]
  }

  setMapRef = ref => {
    this.mapRef = ref
  }

  handleCenterPress = () => {
    const coordinates = this.getCoordinates()
    this.mapRef.setCamera({
      centerCoordinate: coordinates,
      zoom: 14,
      duration: 700
    })
  }

  render() {
    const { place } = this.props.navigation.state.params
    const coordinates = this.getCoordinates()

    return (
      <View style={styles.screen}>
        <MapboxGL.MapView
          ref={this.setMapRef}
          centerCoordinate={coordinates}
          showUserLocation={true}
          zoomLevel={14}
          styleURL={MapboxGL.StyleURL.Street}
          style={styles.map}
        >
          <MapboxGL.PointAnnotation
            id={place.id.toString()}
            title={place.name}
            selected={true}
            coordinate={coordinates}
          />
        </MapboxGL.MapView>
        <MapInfoBar place={place} onCenterPress={this.handleCenterPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

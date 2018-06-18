import React from 'react'
import Config from 'react-native-config'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import TabBarPage from '../components/Map/TabBar'
import sheet from '../components/Map/sheet'
import { onSortOptions } from '../components/Map/'

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN)

class ShowMap extends React.Component {
  constructor(props) {
    super(props)
    this._mapOptions = Object.keys(MapboxGL.StyleURL)
      .map((key) => {
        return {
          label: key,
          data: MapboxGL.StyleURL[key]
        }
      })
      .sort(onSortOptions)

    this.state = {
      styleURL: this._mapOptions[0].data
    }
    this.onMapChange = this.onMapChange.bind(this)
  }

  onMapChange(index, styleURL) {
    this.setState({ styleURL: styleURL })
  }

  render() {
    return (
      <TabBarPage
        {...this.props}
        scrollable
        options={this._mapOptions}
        onOptionPress={this.onMapChange}>
        <MapboxGL.MapView
          showUserLocation={true}
          zoomLevel={12}
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          styleURL={this.state.styleURL}
          style={sheet.matchParent}
        />
      </TabBarPage>
    )
  }
}

export default ShowMap

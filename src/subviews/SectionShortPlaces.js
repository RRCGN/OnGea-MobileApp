import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withI18n } from '@lingui/react'
import { compose } from 'recompose'

import { getMapId } from '../redux/ducks/offline-maps'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'

class SectionShortPlaces extends React.PureComponent {
  static propTypes = {
    onPlacePress: PropTypes.func.isRequired,
    places: PropTypes.array.isRequired,
    placesDownloaded: PropTypes.array.isRequired,
    placesDownloading: PropTypes.array.isRequired
  }

  handleItemPress = place => () => {
    this.props.onPlacePress(place)
  }

  getPrimaryText = place => {
    return `${place.name}, ${place.description}`
  }

  getSecondaryText = place => {
    const { i18n } = this.props
    const { placesDownloading, placesDownloaded } = this.props
    const mapId = getMapId(place)

    const address = `${place.street}, ${place.postcode} ${place.town}`
    const isDownloading = placesDownloading.includes(mapId)
    const isDownloaded = placesDownloaded.includes(mapId)

    if (isDownloading) {
      return address + ' – ' + i18n.t`downloading...`
    }

    if (isDownloaded) {
      return address + ' – ' + i18n.t`offline available`
    }

    return address
  }

  render() {
    const { i18n } = this.props

    return (
      <Section title={i18n.t`Places`}>
        {this.props.places.map(place => (
          <ListItemStandard
            key={place.id}
            primary={this.getPrimaryText(place)}
            secondary={this.getSecondaryText(place)}
            onPress={this.handleItemPress(place)}
          />
        ))}
      </Section>
    )
  }
}

const mapStateToProps = state => ({
  placesDownloaded: state.offlineMaps.downloaded,
  placesDownloading: state.offlineMaps.downloading
})

export default compose(
  withI18n(),
  connect(mapStateToProps)
)(SectionShortPlaces)

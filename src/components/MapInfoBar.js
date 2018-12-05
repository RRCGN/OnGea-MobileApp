import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import PropTypes from 'prop-types'

import PlatformIcon from '../components/PlatformIcon'
import { Colors } from '../utils/constants'

export default class MapInfoBar extends React.PureComponent {
  static propTypes = {
    place: PropTypes.object.isRequired,
    onCenterPress: PropTypes.func.isRequired
  }

  render() {
    const { place } = this.props
    const name = place.name || ''
    const description = place.description || ''
    const sep = place.name ? ', ' : ''
    const primary = name + sep + description

    const postcode = place.postcode ? place.postcode.trim() : ''
    const town = place.town ? ' ' + place.town.trim() : ''
    const country = place.country ? ', ' + place.country : ''
    const secondary = postcode + town + country

    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={styles.bar}>
          <View style={styles.infos}>
            <Text style={styles.primaryText}>{primary}</Text>
            {!!place.street && (
              <Text style={styles.secondaryText}>{place.street}</Text>
            )}
            <Text style={styles.secondaryText}>{secondary}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={this.props.onCenterPress}
              style={styles.touchArea}
            >
              <PlatformIcon
                androidIcon="filter-tilt-shift"
                iosIcon="ios-contract"
                color={Colors.DARK_SECONDARY}
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 0,
    flexDirection: 'row',
    padding: 16,
    elevation: 12,
    backgroundColor: 'white',
    zIndex: 1
  },
  infos: {
    flex: 1
  },
  actions: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchArea: {
    padding: 4
  },
  primaryText: {
    fontSize: 16,
    color: Colors.DARK_PRIMARY,
    fontWeight: '500'
  },
  secondaryText: {
    fontSize: 14,
    color: Colors.DARK_PRIMARY
  }
})

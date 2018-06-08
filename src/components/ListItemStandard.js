/**
 * TripDate Shows Time, Location and Icon for a Travel
 * @flow
 */

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../utils/constants'


type Props = {
  primary: string,
  secondary: string,
  big?: boolean,
  style: {}
}

const ListItemStandard = ({ primary, secondary, big = false, style}: Props) => (
  <View style={[ styles.container, big && styles.big, style ]}>
    <Text style={styles.primary}>{primary}</Text>
    <Text style={styles.secondary}>{secondary}</Text>
  </View>
)

export default ListItemStandard


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50
  },
  big: {
    height: 72
  },
  primary: {
    color: Colors.DARK_PRIMARY
  },
  secondary: {
    color: Colors.DARK_SECONDARY
  },
  dots: {
    position: 'absolute',
    top: 54,
    left: 8,
    width: 8,
    height: 36,
    zIndex: 2,
    opacity: 0.38
  }
})

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
  secondary: string
}

const ListItemStandard = ({ primary, secondary }: Props) => (
  <View style={styles.container}>
    <Text style={styles.primary}>{primary}</Text>
    <Text style={styles.secondary}>{secondary}</Text>
  </View>
)

export default ListItemStandard


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    position: 'relative',
    height: 50
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

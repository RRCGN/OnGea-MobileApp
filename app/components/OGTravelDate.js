/**
 * TripDate Shows Time, Location and Icon for a Travel
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


type Props = {
  primary: string,
  secondary: string,
  icon?: string
}

const OGTravelDate = ({ primary, secondary, icon }: Props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.iconContainer}>
        {icon && <Icon name={icon} style={styles.icon} size={24} />}
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.primary}>{primary}</Text>
      <Text style={styles.secondary}>{secondary}</Text>
    </View>
  </View>
)

export default OGTravelDate


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row'
  },
  right: {
    marginLeft: 32
  },
  left: {
    width: 24,
    alignSelf: 'stretch',
    flex: 0,
    justifyContent: 'center'
  },
  iconContainer: {
    width: 24,
    height: 24
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.38)'
  },
  primary: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

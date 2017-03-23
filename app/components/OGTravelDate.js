/**
 * TripDate Shows Time, Location and Icon for a Travel
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


type Props = {
  location: string,
  time: string,
  icon: string
}

const OGTravelDate = ({ location, time, icon }: Props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Icon name={icon} style={styles.icon} size={24} />
    </View>
    <View style={styles.right}>
      <Text style={styles.primary}>{time}</Text>
      <Text style={styles.secondary}>{location}</Text>
    </View>
  </View>
)

export default OGTravelDate


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row'
  },
  left: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    flex: 0,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  right: {
    flex: 1,
    alignSelf: 'stretch'
  },
  primary: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

/**
 * Mobilities Navigator (Stack Navigator)
 */

import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import SingleView from '../views/SingleView'
import SettingsView from '../views/SettingsView'
import DetailView from '../views/DetailView'
import MapView from '../views/MapView'
import { Colors } from '../utils/constants'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Single: { screen: SingleView },
  Map: { screen: MapView },
  Detail: { screen: DetailView },
  Settings: { screen: SettingsView }
}, {
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
})

export default MobilitiesNavigator

/**
 * Mobilities Navigator (Stack Navigator)
 */

import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import SingleView from '../views/SingleView'
import SettingsView from '../views/SettingsView'
import { Colors } from '../utils/constants'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Single: { screen: SingleView },
  Settings: { screen: SettingsView }
}, {
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
})

export default MobilitiesNavigator

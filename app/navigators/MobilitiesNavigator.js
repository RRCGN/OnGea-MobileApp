/**
 * Mobilities Navigator (Stack Navigator)
 */

import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import SingleView from '../views/SingleView'
import { Colors } from '../utils/constants'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Single: { screen: SingleView }
}, {
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
})

export default MobilitiesNavigator

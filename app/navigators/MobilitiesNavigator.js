/**
 *
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import TestView from '../views/TestView'
import { Colors } from '../utils/constants'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Test: { screen: TestView }
}, {
  headerMode: 'float',
  navigationOptions: {
    header: {
      tintColor: Colors.WHITE,
      style: {
        backgroundColor: Colors.BLUE
      }
    }
  }
})

export default MobilitiesNavigator

/**
 * 
 * @flow
 */

import React from 'react'
import { StackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import TestView from '../views/TestView'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Test: { screen: TestView }
}, {
  headerMode: 'float'
})

export default MobilitiesNavigator

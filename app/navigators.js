/**
 * Navigators for app.
 * This app is a TabNavigator with a StackNavigator in one Tab (the Dashboard Tab)
 * @flow
 */

import {
  TabNavigator,
  StackNavigator,
  TabView
} from 'react-navigation'
import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import WebAppView from './views/WebAppView'
import MobilitiesOverviewView from './views/MobilitiesOverviewView'
import TestView from './views/TestView'

const MobilitiesNavigator = StackNavigator({
  Overview: { screen: MobilitiesOverviewView },
  Test: { screen: TestView }
})

const MainScreenTabNavigator = TabNavigator({
  Web: {
    screen: WebAppView
  },
  Dashboard: {
    screen: MobilitiesNavigator
  }
}, {
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  ...Platform.select({
    android: {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#BBDEFB',
        style: {
          backgroundColor: '#2196F3'
        }
      }
    }
  })
})

export default MainScreenTabNavigator

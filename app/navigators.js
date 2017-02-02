/**
 * Navigators for app.
 * This app is a TabNavigator with a StackNavigator in one Tab (the Dashboard Tab)
 * @flow
 */

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import WebAppView from './views/WebAppView'
import DashboardOverviewView from './views/DashboardOverviewView'
import TestView from './views/TestView'

const DashboardNavigator = StackNavigator({
  Overview: { screen: DashboardOverviewView },
  Test: { screen: TestView }
})

const MainScreenTabNavigator = TabNavigator({
  Web: {
    screen: WebAppView
  },
  Dashboard: {
    screen: DashboardNavigator
  }
})

export const dashboardTabBar = {
  label: 'Activities',
  icon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'ios-briefcase' : 'ios-briefcase-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
}

export default MainScreenTabNavigator

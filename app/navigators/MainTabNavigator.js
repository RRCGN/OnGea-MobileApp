/**
 *
 * @flow
 */

import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, TabView } from 'react-navigation'
import WebAppView from '../views/WebAppView'
import MobilitiesTabView from '../views/MobilitiesTabView'

const MainScreenTabNavigator = TabNavigator({
  Web: {
    screen: WebAppView
  },
  Mobilities: {
    screen: MobilitiesTabView
  }
}, {
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
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

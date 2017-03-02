/**
 * Main Navigation (Tab Navigator)
 * Two Tabs for WebView and Mobilities Overview
 */

import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, TabView } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import WebAppView from '../views/WebAppView'
import MobilitiesTabView from '../views/MobilitiesTabView'
import { Colors } from '../utils/constants'

const MainScreenTabNavigator = TabNavigator({
  Mobilities: {
    screen: MobilitiesTabView
  },
  Web: {
    screen: WebAppView
  }
}, {
  tabBarComponent: Platform.OS === 'ios' ?
                    TabView.TabBarBottom :
                    NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: Colors.PRIMARY_LIGHT,
    style: {
      backgroundColor: Colors.PRIMARY
    },
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Mobilities: {
          barBackgroundColor: '#00796B'
        },
        Web: {
          barBackgroundColor: '#B71C1C',
          rippleColor: 'black'
        }
      }
    }
  }
})

export default MainScreenTabNavigator

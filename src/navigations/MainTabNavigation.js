import React from 'react'
import { Text, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { TabView } from 'react-native-tab-view'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import WebApp from '../views/WebApp'
import MainNavigation from './MainNavigation'
import { Colors } from '../utils/constants'
import PlatformIcon from '../components/PlatformIcon'

const MainTabNavigation = createBottomTabNavigator({
  Mobilities: {
    screen: MainNavigation,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Activities',
      tabBarIcon: ({ tintColor, focused }) => (
      <PlatformIcon
            iosIcon={focused ? 'ios-globe' : 'ios-globe-outline'}
            androidIcon="public"
            size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
        )
    })
  },
  Web: {
    screen: WebApp,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Activities',
      tabBarIcon: ({ tintColor, focused }) => (
         <PlatformIcon
           iosIcon={focused ? 'ios-bonfire' : 'ios-bonfire-outline'}
           androidIcon="landscape"
           size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
       )
    })
  }
}, {
  initialRouteName: 'Mobilities',
  tabBarComponent: Platform.OS === 'ios' ? TabView.TabBarBottom : NavigationComponent,
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
      style: {
        borderTopWidth: 0,
        elevation: 8
      },
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

export default MainTabNavigation

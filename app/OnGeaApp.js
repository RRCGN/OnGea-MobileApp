/**
 * Main App
 * @flow
 */

import { TabNavigator } from 'react-navigation'
import WebAppScreen from './screens/WebAppScreen'
import DashboardScreen from './screens/DashboardScreen'

const OnGeaApp = TabNavigator({
  Web: {
    screen: WebAppScreen
  },
  Dashboard: {
    screen: DashboardScreen
  }
})

export default OnGeaApp

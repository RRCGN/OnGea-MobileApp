/**
 * Main App
 * @flow
 */

import { TabNavigator } from 'react-navigation'
import WebAppTabRoute from './routes/WebAppTabRoute'
import DashboardTabRoute from './routes/DashboardTabRoute'

const OnGeaApp = TabNavigator({
  Web: {
    screen: WebAppTabRoute
  },
  Dashboard: {
    screen: DashboardTabRoute
  }
})

export default OnGeaApp

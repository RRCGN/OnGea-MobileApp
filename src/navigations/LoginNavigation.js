import { StatusBar, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import colors from '../utils/colors'
import { normalHeaderStyle } from '../utils/styles'

import Login from '../views/Login'
import WebApp from '../views/WebApp'

const LoginNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    WebApp: { screen: WebApp }
  },
  {
    initialRouteName: 'Login',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: normalHeaderStyle,
      headerTitleStyle: { color: 'black' }
    }
  })

export default LoginNavigation

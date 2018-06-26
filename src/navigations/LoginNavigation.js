import { StatusBar, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import colors from '../utils/colors'

import LoginView from '../views/Login'
import WebAppView from '../views/WebApp'

const LoginNavigation = createStackNavigator(
  {
    Login: { screen: LoginView },
    WebApp: { screen: WebAppView }
  },
  {
    initialRouteName: 'Login',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryGreen,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight } })
      },
      headerTitleStyle: { color: colors.white }
    }
  })

export default LoginNavigation

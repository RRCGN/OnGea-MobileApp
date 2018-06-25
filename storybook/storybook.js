import { getStorybookUI, configure } from '@storybook/react-native'
import SplashScreen from 'rn-splash-screen'

SplashScreen && SplashScreen.hide()

configure(() => {
  require('../src/components/__stories__/')
}, module)

export default getStorybookUI({ port: 7007, host: '127.0.0.1' })

import { getStorybookUI, configure } from '@kadira/react-native-storybook'
import SplashScreen from 'rn-splash-screen'

SplashScreen && SplashScreen.hide()

configure(() => {
  require('../app/components/__stories__/')
}, module)

export default getStorybookUI({ port: 7007, host: '10.0.3.2' })

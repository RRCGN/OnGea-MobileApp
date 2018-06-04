import { getStorybookUI, configure } from '@kadira/react-native-storybook'

configure(() => {
  require('../src/components/__stories__/')
}, module)

export default getStorybookUI({ port: 7007, host: '10.0.3.2' })

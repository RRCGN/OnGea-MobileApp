import { getStorybookUI, configure } from '@storybook/react-native'

configure(() => {
  require('../src/components/__stories__/')
}, module)

export default getStorybookUI({ port: 7007, host: '10.0.3.2' })

import { Platform, StatusBar } from 'react-native'
import colors from './colors'

export const normalHeaderStyle = {
  backgroundColor: 'white',
  elevation: 5,
  ...Platform.select({
    'android': {
      paddingTop: StatusBar.currentHeight,
      height: 56 + StatusBar.currentHeight
    }
  })
}

export const transparentHeaderStyle = {
  elevation: 0,
  borderRadius: 0,
  borderBottomWidth: 0,
  shadowRadius: 0,
  shadowColor: 'transparent',
  backgroundColor: 'transparent',
  marginBottom:
    Platform.OS === 'ios' ? -86 : -56 - StatusBar.currentHeight,
  zIndex: 1,
  ...Platform.select({
    'android': {
      paddingTop: StatusBar.currentHeight,
      height: 56 + StatusBar.currentHeight
    }
  })
}

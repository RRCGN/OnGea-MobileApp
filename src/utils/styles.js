import { Platform, StatusBar} from 'react-native'
import colors from './colors'

const styles = {
  headerStyle: {
    backgroundColor: colors.primaryGreen,
    elevation: 5,
    ...Platform.select({
      'android': {
        paddingTop: StatusBar.currentHeight,
        height: 56 + StatusBar.currentHeight
      }
    })
  }
}
export default styles

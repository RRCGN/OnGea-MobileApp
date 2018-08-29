import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Dimensions, Platform } from 'react-native'

const dimensions = {
  headerWidth: Dimensions.get('window').width,
  headerHeight: Dimensions.get('window').width * (2/3),
  stickyHeaderHeight: Platform.OS === 'ios' ? 44 + getStatusBarHeight() : 56 + getStatusBarHeight()
}

export default dimensions

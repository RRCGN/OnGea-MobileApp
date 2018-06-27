import { Dimensions, Platform } from 'react-native'

const dimensions = {
  headerWidth: Dimensions.get('window').width,
  headerHeight: Dimensions.get('window').width * (2/3),
  stickyHeaderHeight: Platform.OS === 'ios' ? 86 : 80
}

export default dimensions

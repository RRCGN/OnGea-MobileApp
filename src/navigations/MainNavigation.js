import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import ActivitiesOverview from '../views/ActivitiesOverview'
import Activity from '../views/Activity'
import DetailView from '../views/DetailView'
import MapView from '../views/MapView'
import Settings from '../views/Settings'
import UploadImagesView from '../views/UploadImagesView'
import ShowMapView from '../views/ShowMapView'
import colors from '../utils/colors'
import generalStyles from '../utils/styles'
const MainNavigation = createStackNavigator(
  {
    Overview: { screen: ActivitiesOverview },
    SingleActivity: { screen: Activity },
    Map: { screen: MapView },
    Detail: { screen: DetailView },
    Settings: { screen: Settings },
    UploadImages: { screen: UploadImagesView },
    ShowMap: { screen: ShowMapView }
  },
  {
    // initialRouteName: 'Overview',
    initialRouteName: 'Settings',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: generalStyles.headerStyle,
      headerTitleStyle: { color: colors.white }
    }
  }
)

export default MainNavigation

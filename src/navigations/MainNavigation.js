import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import ActivitiesOverview from '../views/ActivitiesOverview'
import Activity from '../views/Activity'
import Credits from '../views/Credits'
import DetailView from '../views/DetailView'
import Settings from '../views/Settings'
import UploadImagesView from '../views/UploadImagesView'
import ShowMapView from '../views/ShowMapView'
import colors from '../utils/colors'
import { normalHeaderStyle } from '../utils/styles'

const MainNavigation = createStackNavigator(
  {
    Overview: { screen: ActivitiesOverview },
    SingleActivity: { screen: Activity },
    Detail: { screen: DetailView },
    Settings: { screen: Settings },
    Credits: { screen: Credits },
    UploadImages: { screen: UploadImagesView },
    ShowMap: { screen: ShowMapView }
  },
  {
    initialRouteName: 'Overview',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: normalHeaderStyle,
      headerTitleStyle: { color: 'black' }
    }
  }
)

export default MainNavigation

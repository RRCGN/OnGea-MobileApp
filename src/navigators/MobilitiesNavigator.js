import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import ActivitiesOverview from '../views/ActivitiesOverview'
import Activity from '../views/Activity'
import DetailView from '../views/DetailView'
import MapView from '../views/MapView'
import Settings from '../views/Settings'
import UploadImagesView from '../views/UploadImagesView'
import ShowMapView from '../views/ShowMapView'

const MobilitiesNavigator = createStackNavigator(
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
    initialRouteName: 'Overview',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen' })

export default MobilitiesNavigator

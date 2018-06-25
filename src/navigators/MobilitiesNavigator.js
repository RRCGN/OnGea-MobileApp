import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import SingleActivityView from '../views/SingleActivityView'
import DetailView from '../views/DetailView'
import MapView from '../views/MapView'
import SettingsView from '../views/SettingsView'
import UploadImagesView from '../views/UploadImagesView'
import ShowMapView from '../views/ShowMapView'

const MobilitiesNavigator = createStackNavigator(
  {
    Overview: { screen: MobilitiesOverviewView },
    SingleActivity: { screen: SingleActivityView },
    Map: { screen: MapView },
    Detail: { screen: DetailView },
    Settings: { screen: SettingsView },
    UploadImages: { screen: UploadImagesView },
    ShowMap: { screen: ShowMapView }
  },
  {
    initialRouteName: 'Overview',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen' })

export default MobilitiesNavigator

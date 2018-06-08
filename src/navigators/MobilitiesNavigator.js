import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MobilitiesOverviewView from '../views/MobilitiesOverviewView'
import SingleView from '../views/SingleView'
import SettingsView from '../views/SettingsView'
import DetailView from '../views/DetailView'
import MapView from '../views/MapView'

const MobilitiesNavigator = createStackNavigator(
  {
    Overview: { screen: MobilitiesOverviewView },
    Single: { screen: SingleView },
    Map: { screen: MapView },
    Detail: { screen: DetailView },
    Settings: { screen: SettingsView } },
  {
    initialRouteName: 'Single',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen' })

export default MobilitiesNavigator

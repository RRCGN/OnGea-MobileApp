import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { TabView } from 'react-native-tab-view'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import WebAppView from '../views/WebAppView'
import MobilitiesTabView from '../views/MobilitiesTabView'
import { Colors } from '../utils/constants'

const MainScreenTabNavigator = createBottomTabNavigator({
  Mobilities: {
    screen: MobilitiesTabView
  },
  Web: {
    screen: WebAppView
  }
}, {
  tabBarComponent: Platform.OS === 'ios' ? TabView.TabBarBottom : NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: Colors.PRIMARY_LIGHT,
    style: {
      backgroundColor: Colors.PRIMARY
    },
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      style: {
        borderTopWidth: 0,
        elevation: 8
      },
      tabs: {
        Mobilities: {
          barBackgroundColor: '#00796B'
        },
        Web: {
          barBackgroundColor: '#B71C1C',
          rippleColor: 'black'
        }
      }
    }
  }
})

export default MainScreenTabNavigator

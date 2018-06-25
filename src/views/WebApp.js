import React from 'react'
import { View, StatusBar, Platform, WebView } from 'react-native'
import PlatformIcon from '../components/PlatformIcon'

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Web',
    tabBarLabel: 'Web',
    tabBarIcon: ({ tintColor, focused }) => (
      <PlatformIcon
        iosIcon={focused ? 'ios-globe' : 'ios-globe-outline'}
        androidIcon="public"
        size={24} color={Platform.OS === 'ios' ? tintColor : 'white' } />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: 'http://rootsnroutes.eu' }}
          style={{ marginTop: StatusBar.currentHeight }}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#d52319'
  }
}

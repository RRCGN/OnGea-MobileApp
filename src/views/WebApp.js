import React from 'react'
import { ActivityIndicator, StatusBar, View, WebView } from 'react-native'
import ToolbarButton from '../components/ToolbarButton'
import colors from '../utils/colors'
import { normalHeaderStyle as headerStyle } from '../utils/styles'

export default class WebViewScreen extends React.Component {
  state = {
    loaded: false
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'rootsnroutes.eu',
      headerStyle,
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          iconColor="black"
          onPress={() => navigation.goBack(null)} /> )
    }
  }
  preformLoaded () {
    this.setState({loaded: true})
  }

  render() {
    const { loaded } = this.state
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          animated
        />
        <WebView
          onLoad={() => this.preformLoaded()}
          source={{ uri: 'http://rootsnroutes.eu' }}
          style={{ flex: 1, backgroundColor: 'white' }} />
         {!loaded && (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              size="small"
              color="black" />
          </View>
        )}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  indicatorContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

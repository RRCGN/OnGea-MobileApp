import React from 'react'
import { ActivityIndicator, StatusBar, View, WebView } from 'react-native'
import ToolbarButton from '../components/ToolbarButton'
import colors from '../utils/colors'

export default class WebViewScreen extends React.Component {
  state = {
    loaded: false
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'WEBSITE',
      headerStyle: {
        backgroundColor: colors.primaryRed
      },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
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
        <WebView
          onLoad={() => this.preformLoaded()}
          source={{ uri: 'http://rootsnroutes.eu' }}
          style={{flex: 1}} />
         {!loaded && (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              size="small"
              color={colors.primaryRed} />
          </View>
        )}
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 50,
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

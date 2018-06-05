import React, { Component } from 'react'
import { Platform, StatusBar, View } from 'react-native'
import MobilitiesListView from './MobilitiesListView'
import { Colors } from '../utils/constants'
import ToolbarButton from '../components/ToolbarButton'

export default class MobilitiesOverviewView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Activities',
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight
          }
        })
      },
      headerTitleStyle: {
        color: Colors.WHITE
      },
      headerRight: (
        <ToolbarButton
          androidIcon="more-vert"
          iosIcon="ios-cog"
          onPress={ () => navigation.navigate('Settings') } />
      )
    }
  }

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.36)" />
        <MobilitiesListView
          refreshData={this.props.screenProps.refreshData}
          activities={this.props.screenProps.data.activities}
          {...this.props}
        />
      </View>
    )
  }
}

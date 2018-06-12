import React, { Component } from 'react'
import { StatusBar, Platform, Text, View } from 'react-native'
import MobilitiesListView from './MobilitiesListView'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'

import { Colors } from '../utils/constants'
class MobilitiesOverviewView extends Component {
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
      ),
      headerLeft: (
        <ToolbarButton
          androidIcon="add"
          iosIcon="ios-add"
          onPress={ () => navigation.navigate('UploadImages') } />
      )
    }
  }


  noDataFound() {
    const { data } = this.props.screenProps
    return Object.keys(data).length === 0 && data.constructor === Object
  }

  render() {
    const { screenProps } = this.props
    return (
      <View>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.36)" />
        {(this.noDataFound())
          ? (
            <View>
              <Text style={{margin: 10}}>failed loading data!</Text>
              <Button label='reload' onPress={this.props.screenProps.reloadHandler}/>
            </View> )
          : (<MobilitiesListView
            refreshData={screenProps.refreshData}
            activities={screenProps.data}
            {...this.props} />)}
      </View>
    )
  }
}

MobilitiesOverviewView.propTypes = {
  screenProps: PropTypes.object
}

export default MobilitiesOverviewView

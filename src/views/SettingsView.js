import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'
import { Colors } from '../utils/constants'

class SettingsView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight } })
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)} /> )
    }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <Button label="Logout" onPress={this.props.screenProps.logout} />
      </View>
    )
  }
}


SettingsView.propTypes = { screenProps: PropTypes.object }


export default SettingsView

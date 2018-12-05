import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native'

import ToolbarButton from '../components/ToolbarButton'
import ToolbarFancy from '../components/ToolbarFancy'
import Section from '../components/Section'
import SectionAllOrganization from '../subviews/SectionAllOrganization'
import SectionAllSchedule from '../subviews/SectionAllSchedule'
import SectionAllTravel from '../subviews/SectionAllTravel'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import { Colors } from '../utils/constants'

import { transparentHeaderStyle as headerStyle } from '../utils/styles'

export default class DetailView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '',
      headerStyle,
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          floating={true}
          onPress={() => navigation.goBack(null)} />
      )}
  }


  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={styles.background}>
        <StatusBarBackgroundIOS />
        <ToolbarFancy image={{ uri: params.image }} title={params.title} />
        <ScrollView>
          {this.renderSwitchedContent()}
        </ScrollView>
      </View>
    )
  }

  renderSwitchedContent = () => {
    const { params } = this.props.navigation.state

    switch (params.type) {
      case 'ORGANIZATION':
        return (
          <SectionAllOrganization organization={params.payload} />
        )
      case 'SCHEDULE':
        return (
          <SectionAllSchedule events={params.payload} />
        )
      case 'TRAVEL':
        return (
          <SectionAllTravel travel={params.payload} />
        )
      default:
        return null
    }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
  }
})

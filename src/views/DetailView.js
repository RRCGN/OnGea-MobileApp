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
import SectionShortTravel from '../subviews/SectionShortTravel'
import SectionAllTravel from '../subviews/SectionAllTravel'
import SectionAllOrganization from '../subviews/SectionAllOrganization'
import SectionAllSchedule from '../subviews/SectionAllSchedule'
import SectionShortStay from '../subviews/SectionShortStay'
import SectionShortSchedule from '../subviews/SectionShortSchedule'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import { Colors } from '../utils/constants'

import generalStyles from '../utils/styles'

export default class DetailView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '',
      titleStyle: {
        color: 'white'
      },
      headerStyle: {
        ...generalStyles.headerStyle,
        elevation: 0,
        borderRadius: 0,
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowColor: 'transparent',
        backgroundColor: 'transparent',
        marginBottom:
          Platform.OS === 'ios' ? -86 : -56 - StatusBar.currentHeight,
        zIndex: 1
      },
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
        <ToolbarFancy image={{ uri: params.image }} title={params.payload.title} />
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

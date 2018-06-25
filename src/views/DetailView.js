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
import SectionAllSchedule from '../subviews/SectionAllSchedule'
import SectionShortStay from '../subviews/SectionShortStay'
import SectionShortSchedule from '../subviews/SectionShortSchedule'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'

import { Colors } from '../utils/constants'


export default class SingleActivityView extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '',
      titleStyle: {
        color: 'white'
      },
      headerStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        marginBottom: Platform.OS === 'ios' ? -64 : -56 - StatusBar.currentHeight,
        zIndex: 1,
        elevation: 0,
        ...Platform.select({
          android: {
            marginTop: StatusBar.currentHeight
          }
        })
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
        <ToolbarFancy image={{ uri: params.image }} title={params.title} />
        <ScrollView>
          {this._renderSummary()}
          {this._renderAll()}
        </ScrollView>
      </View>
    )
  }

  _renderSummary = () => {
    const { params } = this.props.navigation.state

    switch (params.type) {
      case 'TRAVEL':
        return (
          <SectionShortTravel
            data={params.data}
            noBorder={params.data.length === 1}
          />
        )
      case 'STAY':
        return (
          <SectionShortStay
            data={params.data}
            noBorder={params.data.length === 1}
            navigation={this.props.navigation}
          />
        )
      case 'SCHEDULE':
        return null
    }
  }

  _renderAll = () => {
    const { params } = this.props.navigation.state

    switch (params.type) {
      case 'TRAVEL':
        return this._renderTravel()
      case 'STAY':
        return null
      case 'SCHEDULE':
        return this._renderSchedule()
    }
  }

  _renderTravel = () => {
    const { params } = this.props.navigation.state

    if (params.data.length === 1) return null
    return <SectionAllTravel data={params.data} />
  }

  _renderSchedule = () => {
    const { params } = this.props.navigation.state

    return <SectionAllSchedule data={params.data} />
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
  }
})

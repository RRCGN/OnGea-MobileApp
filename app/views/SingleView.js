/**
 * Dashboard Overview
 */

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
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView,
  { TriggeringView } from 'react-native-image-header-scroll-view'

import ToolbarButton from '../components/ToolbarButton'

import TitleOnShadow from '../components/TitleOnShadow'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import DateRange from '../components/DateRange'
import SectionShortTravel from '../subviews/SectionShortTravel'
import SectionShortStay from '../subviews/SectionShortStay'
import SectionOrganization from '../subviews/SectionOrganization'
import SectionDownloads from '../subviews/SectionDownloads'
import SectionShortSchedule from '../subviews/SectionShortSchedule'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'

import { Colors } from '../utils/constants'


export default class SingleView extends Component {
  static navigationOptions = {
    title: "",
    header: ({ goBack, state }) => {
      return {
        style: {
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
        titleStyle: {
          color: 'white'
        },
        left: (
          <ToolbarButton
            androidIcon="arrow-back"
            iosIcon="ios-arrow-back"
            floating={true}
            onPress={() => goBack(null)}
          />
        )
      }
    }
  }

  componentWillMount() {
    this.headerWidth = Dimensions.get('window').width
    this.headerHeight = this.headerWidth * (2/3)
    this.stickyHeaderHeight = Platform.OS === 'ios' ? 64 : 80
  }

  _handleStickHeader = () => {
    this.navBarView.fadeIn(200)
  }

  _handleUnstickHeader = () => {
    this.navBarView.fadeOut(200)
  }

  render() {
    return (
        <HeaderImageScrollView
          maxHeight={this.headerHeight}
          minHeight={this.stickyHeaderHeight}
          renderHeader={this._renderTitleBackground}
          renderForeground={this._renderTitleForeground}
          renderFixedForeground={this._renderStickyHeader}
          fadeOutForeground
          foregroundParallaxRatio={0.8}
        >
          <TriggeringView
            onBeginHidden={this._handleStickHeader}
            onDisplay={this._handleUnstickHeader}
          >
            {this._renderDates()}
          </TriggeringView>
          {this._renderContent()}
        </HeaderImageScrollView>
    )
  }

  _renderDates = () => {
    const { params } = this.props.navigation.state

    return (
      <View style={{ backgroundColor: '#7B1FA2', padding: 16 }}>
        <DateRange light from={params.dateFrom} to={params.dateTo} />
      </View>
    )
  }

  _renderContent = () => {
    const { params } = this.props.navigation.state
    const { navigation } = this.props

    const genericParams = {
      image: params.backdrop,
      title: params.name
    }

    return (
      <View>
        <SectionShortTravel
          data={params.travels}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="More"
                onPress={() => navigation.navigate('Detail', { type: 'TRAVEL', data: params.travels, ...genericParams })}
              />
            </ButtonFlatGrid>
          }
        />
        <SectionShortStay
          data={params.stays}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="More"
                onPress={() => navigation.navigate('Detail', { type: 'STAY', data: params.stays, ...genericParams })}
              />
            </ButtonFlatGrid>
          }
        />
        <SectionShortSchedule
          data={params.schedule}
          navigation={navigation}
          footer={
            <ButtonFlatGrid>
              <Button
                label="Schedule"
                onPress={() => navigation.navigate('Detail', { type: 'SCHEDULE', data: params.schedule, ...genericParams })}
              />
            </ButtonFlatGrid>
          }
        />
        <SectionOrganization data={params.organizations} />
        <SectionDownloads data={params.downloads} />
      </View>
    )
  }

  _renderTitleForeground = () => {
    const { params } = this.props.navigation.state
    return <TitleOnShadow title={params.name} />
  }

  _renderTitleBackground = () => {
    const { params } = this.props.navigation.state
    return (
      <View style={{ height: this.headerHeight }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: params.backdrop }}
          width={this.headerWidth}
          height={this.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }

  _renderStickyHeader = () => {
    const { params } = this.props.navigation.state
    return (
      <View>
        <StatusBarBackgroundIOS />
        <Animatable.View
          style={styles.stickyHeader}
          ref={(navBarView) => this.navBarView = navBarView}
        >
          <View style={styles.stickyHeaderInner}>
            <Text numberOfLines={2} style={styles.toolbarTitle}>{params.name}</Text>
          </View>
        </Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stickyHeader: {
    opacity: 0,
    ...Platform.select({
      ios: {
        marginTop: 19,
        height: 46
      },
      android: {
        marginTop: 24,
        height: 56
      }
    })
  },
  stickyHeaderInner: {
    flex: 1,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginLeft: 55,
        paddingRight: 16
      }
    })
  },
  toolbarTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 1 },
    ...Platform.select({
      ios: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center'
      },
      android: {
        fontWeight: '500',
        fontSize: 17,
        alignSelf: 'flex-start'
      }
    })
  }
})

/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { View, Platform, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native'
import ToolbarButton from '../components/ToolbarButton'
import TitleOnShadow from '../components/TitleOnShadow'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import HeaderImageScrollView from '../lib/ImageHeaderScrollView'
import * as Animatable from 'react-native-animatable'
import { Colors } from '../utils/constants'

export default class SingleView extends Component {
  static navigationOptions = {
    title: "",
    header: ({ goBack, state }) => {
      const toolbarFloat = state.params.toolbarFloat == null ? true : state.params.toolbarFloat
      return {
        style: {
          borderRadius: 0,
          backgroundColor: 'transparent',
          marginBottom: Platform.OS === 'ios' ? -64 : -56 - StatusBar.currentHeight,
          zIndex: 1,
          elevation: 0,
          ...Platform.select({
            android: {
              position: 'relative',
              top: StatusBar.currentHeight
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
            floating={toolbarFloat}
            onPress={() => goBack(null)}
          />
        )
      }
    }
  }

  componentWillMount() {
    this.headerWidth = Dimensions.get('window').width
    this.headerHeight = this.headerWidth * (2/3)
    this.stickyHeaderHeight = Platform.OS === 'ios' ? 64 : 104
  }

  _handleStickHeader = () => {
    this.navBarView.fadeIn(200)
  }

  _handleUnstickHeader = () => {
    this.navBarView.fadeOut(200)
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <HeaderImageScrollView
          maxHeight={this.headerHeight}
          minHeight={this.stickyHeaderHeight}
          renderHeader={this._renderTitleBackground}
          renderForeground={this._renderTitleForeground}
          renderFixedForeground={this._renderStickyHeader}
          fadeOutForeground={true}
          onMinIn={this._handleStickHeader}
          onMinOut={this._handleUnstickHeader}
        >
          <View style={{ height: 1000 }}>

          </View>
        </HeaderImageScrollView>
      </View>
    )
  }

  _renderTitleForeground = () => {
    return <TitleOnShadow title="Hello" />
  }

  _renderTitleBackground = () => {
    return (
      <View style={{ height: this.headerHeight, overflow: 'hidden' }}>
        <StatusBarBackgroundIOS />
        <Image
          style={{ flex: 1 }}
          source={require('../assets/concert.jpg')}
          width={this.headerWidth}
          height={this.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }

  _renderStickyHeader = () => {
    return (
      <Animatable.View
        style={styles.stickyHeader}
        ref={(navBarView) => this.navBarView = navBarView}
      >
        <View style={styles.stickyHeaderInner}>
          <Text style={styles.toolbarTitle}>Foo bar</Text>
        </View>
      </Animatable.View>
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
        marginTop: 48,
        height: 56
      }
    })
  },
  stickyHeaderInner: {
    flex: 1,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginLeft: 55
      }
    })
  },
  toolbarTitle: {
    color: 'white',
    backgroundColor: 'transparent',
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

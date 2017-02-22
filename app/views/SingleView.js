/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { View, Platform, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native'
import ToolbarButton from '../components/ToolbarButton'
import TitleOnShadow from '../components/TitleOnShadow'
import StatusBarBackgroundIOS from '../components/StatusBarBackgroundIOS'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          style={{ flex: 1 }}
          fadeOutForeground={true}
          backgroundColor={Colors.PRIMARY}
          parallaxHeaderHeight={this.headerHeight}
          renderBackground={this._renderTitleBackground}
          renderForeground={this._renderTitleForeground}
          stickyHeaderHeight={this.stickyHeaderHeight}
          renderStickyHeader={this._renderStickyHeader}
          onChangeHeaderVisibility={(headerVisible) => {
            const { toolbarFloat } = this.props.navigation.state.params
            const { setParams } = this.props.navigation

            if (!headerVisible && toolbarFloat) {
              setParams({ toolbarFloat: false })
            } else if (headerVisible && !toolbarFloat) {
              setParams({ toolbarFloat: true })
            }
          }}
        >
          <View style={{ height: 1000, flex: 1, backgroundColor: 'white' }}>

          </View>
        </ParallaxScrollView>
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
      <View style={styles.stickyHeader}>
        <View style={styles.stickyHeaderInner}>
          <Text style={styles.toolbarTitle}>Foo bar</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stickyHeader: {
    ...Platform.select({
      ios: {
        marginTop: 18,
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

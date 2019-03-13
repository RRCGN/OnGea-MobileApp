import React from 'react'
import { Image, Platform, Text, View, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView, {
  TriggeringView
} from 'react-native-image-header-scroll-view'
import PropTypes from 'prop-types'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import StatusBarBackgroundIOS from '../../components/StatusBarBackgroundIOS'
import TitleOnShadow from '../../components/TitleOnShadow'
import dimensions from '../../utils/dimensions'

export default class ActivityHeader extends React.PureComponent {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    renderDates: PropTypes.func.isRequired
  }

  handleStickHeader = () => {
    this.navBarViewHandler.fadeIn(200)
  }

  handleUnstickHeader = () => {
    this.navBarViewHandler.fadeOut(200)
  }

  renderTitleBackground = () => {
    const { activity } = this.props
    const projectImage =
      activity.project && activity.project.image && activity.project.image[0]
        ? activity.project.image[0].path
        : 'https://placehold.it/1600x900'
    const activityImage = activity.image && activity.image.path
    const image = activityImage || projectImage

    return (
      <View style={{ height: this.headerHeight, flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: image }}
          width={dimensions.headerWidth}
          height={dimensions.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }

  renderTitleForeground = () => {
    const { activity } = this.props

    return <TitleOnShadow title={activity.title} subtitle={activity.subtitle} />
  }

  renderStickyHeader = () => {
    const { activity } = this.props

    return (
      <View>
        <StatusBarBackgroundIOS />
        <Animatable.View
          style={styles.stickyHeader}
          ref={navBarView => (this.navBarViewHandler = navBarView)}
        >
          <Text numberOfLines={2} style={styles.toolbarTitle}>
            {activity.title}
          </Text>
        </Animatable.View>
      </View>
    )
  }

  render() {
    return (
      <HeaderImageScrollView
        maxHeight={dimensions.headerHeight}
        minHeight={dimensions.stickyHeaderHeight}
        renderHeader={this.renderTitleBackground}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderForeground={this.renderTitleForeground}
        renderFixedForeground={this.renderStickyHeader}
        fadeOutForeground
        bounces={false}
      >
        <TriggeringView
          onBeginHidden={this.handleStickHeader}
          onDisplay={this.handleUnstickHeader}
        >
          {this.props.renderDates()}
        </TriggeringView>
        {this.props.children}
      </HeaderImageScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    margin: 10
  },
  stickyHeader: {
    flex: 0,
    opacity: 0,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
    height: dimensions.stickyHeaderHeight,
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
    fontWeight: '700',
    ...Platform.select({
      ios: {
        fontSize: 16,
        alignSelf: 'center'
      },
      android: {
        fontSize: 17,
        alignSelf: 'flex-start'
      }
    })
  }
}

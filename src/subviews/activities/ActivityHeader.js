import React from 'react'
import {Image, Platform, Text, View} from 'react-native'
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import StatusBarBackgroundIOS from '../../components/StatusBarBackgroundIOS'
import TitleOnShadow from '../../components/TitleOnShadow'
import dimensions from '../../utils/dimensions'
import PropTypes from 'prop-types'

class ActivityHeader extends React.Component {

  renderTitleBackground = () => {
    const { activityObject } = this.props
    return (
      <View style={{ height: this.headerHeight, flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: activityObject.image.url }}
          width={dimensions.headerWidth}
          height={dimensions.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }
  renderTitleForeground = () => {
    const {activityObject} = this.props
    return <TitleOnShadow title={activityObject.title} subtitle={activityObject.subtitle} />
  }

  renderStickyHeader = () => {
    const {activityObject} = this.props
    return (
      <View>
        <StatusBarBackgroundIOS />
        <Animatable.View
          style={styles.stickyHeader}
          ref={(navBarView) => this.navBarViewHandler = navBarView}>
          <View style={styles.stickyHeaderInner}>
            <Text numberOfLines={2} style={styles.toolbarTitle}>{activityObject.title}</Text>
          </View>
        </Animatable.View>
      </View>
    )
  }

  handleStickHeader = () => {
    this.navBarViewHandler.fadeIn(200)
  }

  handleUnstickHeader = () => {
    this.navBarViewHandler.fadeOut(200)
  }
  render () {
    const { renderDates } = this.props
    return (
      <HeaderImageScrollView
        maxHeight={dimensions.headerHeight}
        minHeight={dimensions.stickyHeaderHeight}
        renderHeader={this.renderTitleBackground}
        renderForeground={this.renderTitleForeground}
        renderFixedForeground={this.renderStickyHeader}
        fadeOutForeground
        foregroundParallaxRatio={0.8}>
        <TriggeringView
          onBeginHidden={this.handleStickHeader}
          onDisplay={this.handleUnstickHeader}>
          {renderDates()}
        </TriggeringView>
        {this.props.children}
      </HeaderImageScrollView>
    )
  }
}

ActivityHeader.propTypes = {
  activityObject: PropTypes.object,
  handleClick: PropTypes.func
}

const styles = {
  container: {
    flex: 1,
    margin: 10
  },
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
    paddingTop: 26,
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
}

ActivityHeader.propTypes = {
  activityObject: PropTypes.object,
  renderDates: PropTypes.any,
  children: PropTypes.any
}

export default ActivityHeader

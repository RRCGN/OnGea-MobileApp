import React from 'react'
import {Image, Text, View} from 'react-native'
import * as Animatable from 'react-native-animatable'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import StatusBarBackgroundIOS from '../../components/StatusBarBackgroundIOS'
import TitleOnShadow from '../../components/TitleOnShadow'
import dimensions from '../../utils/dimensions'
import PropTypes from 'prop-types'

const ActivityHeader = ({activityObject}) => {
  let navBarViewHandler = null
  const {image} = activityObject
  const renderTitleBackground = () => {
    return (
      <View style={{ height: this.headerHeight, flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: image.url }}
          width={dimensions.headerWidth}
          height={dimensions.headerHeight}
          resizeMode="cover"
        />
      </View>
    )
  }
  const renderTitleForeground = () => {
    const {title, subtitle} = activityObject
    return <TitleOnShadow title={title} subtitle={subtitle} />
  }

  const renderStickyHeader = () => {
    const {title} = activityObject
    return (
      <View>
        <StatusBarBackgroundIOS />
        <Animatable.View
          style={styles.stickyHeader}
          ref={(navBarView) => navBarViewHandler = navBarView}>
          <View style={styles.stickyHeaderInner}>
            <Text numberOfLines={2} style={styles.toolbarTitle}>{title}</Text>
          </View>
        </Animatable.View>
      </View>
    )
  }
  console.log(navBarViewHandler)
  const handleStickHeader = () => {
    navBarViewHandler.fadeIn(200)
  }

  const handleUnstickHeader = () => {
    navBarViewHandler.fadeOut(200)
  }

  return (
    <HeaderImageScrollView
      maxHeight={dimensions.headerHeight}
      minHeight={dimensions.stickyHeaderHeight}
      renderHeader={renderTitleBackground}
      renderForeground={renderTitleForeground}
      renderFixedForeground={renderStickyHeader}
      fadeOutForeground
      foregroundParallaxRatio={0.8}
    >
      <TriggeringView
        onBeginHidden={handleStickHeader}
        onDisplay={handleUnstickHeader}
      >
        {/* {this._renderDates()} */}
      </TriggeringView>
      {/* {this._renderContent()} */}
    </HeaderImageScrollView>
  )
}
ActivityHeader.propTypes = {
  activityObject: PropTypes.object,
  handleClick: PropTypes.func
}

const styles = {
  container: {
    flex: 1,
    margin: 10
  }
}
export default ActivityHeader

import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import MapHeader from './MapHeader'

import sheet from './sheet'
import colors from './colors'

class Page extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onDismissExample: PropTypes.func,
    children: PropTypes.any
  };

  render() {
    return (
      <View style={sheet.matchParent}>
        <MapHeader
          relative
          backgroundColor={colors.primary.pink}
          statusBarColor={colors.primary.pinkDark}
          statusBarTextTheme={'light-content'}
          label={this.props.label || 'OnGea map examples' }
          onBack={this.props.onDismissExample}
        />

        {this.props.children}
      </View>
    )
  }
}

export default Page

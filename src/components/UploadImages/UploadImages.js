import React from 'react'
import { ActivityIndicator, Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import PhotoUpload from 'react-native-photo-upload'

import { Colors } from '../../utils/constants'

class UploadImages extends React.Component {
  state = {
    images: [],
    selecting: false
  }

  handleStart = () => {
    this.setState({ selecting: true })
  }

  handleResponse = (object) => {
    this.setState({ selecting: false })
    this.props.appendImageContent(object)
  }

  render() {
    const { images, selecting } = this.state
    const { style } = this.props
    return (
      <View style={{ flex: 1, ...style }}>
        <PhotoUpload
          onStart={this.handleStart}
          onResponse={this.handleResponse}
        >
          <View style={styles.indicatorView}>
            <ActivityIndicator
              animating={selecting}
              style={styles.indicator}
              size="small"
              color={Colors.PRIMARY}
            />
          </View>
          <View style={styles.placeholder}>
            <Text>Take a photo</Text>
          </View>
        </PhotoUpload>
      </View>
    )
  }
}

const styles = {
  placeholder: {
    flex: 1,
    height: 300,
    zIndex: 1,
    backgroundColor: 'blue'
  },
  indicatorView: {
    position: 'absolute',
    backgroundColor: 'transparent',
    paddingVertical: 30,
    width: 150,
    height: 150,
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 2
  }
}

UploadImages.propTypes = {
  appendImageContent: PropTypes.func,
  style: PropTypes.any
}

export default UploadImages

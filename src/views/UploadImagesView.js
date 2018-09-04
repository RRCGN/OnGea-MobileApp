import React from 'react'
import {
  Alert,
  ActivityIndicator,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { Trans } from '@lingui/react'
import { connect } from 'react-redux'
import * as mime from 'react-native-mime-types'

import { i18n } from '../i18n'

import { uploadFile } from '../redux/ducks/activities'
import ToolbarButton from '../components/ToolbarButton'
import FlatButton from '../components/FlatButton'
import FailMessage from '../components/FailMessage'
import { Colors } from '../utils/constants'

class UploadImagesView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t`Upload Documents`,
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          iconColor="black"
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  state = {
    image: null,
    mimeType: null,
    isLoading: false,
    isSuccess: false,
    isFailed: false
  }

  handleImagePress = () => {
    ImagePicker.showImagePicker(
      {
        title: i18n.t`Choose image`,
        cancelButtonTitle: i18n.t`Cancel`,
        mediaType: 'photo'
      },
      response => {
        if (response.didCancel) return
        if (response.error) {
          alert(i18n.t`Failed to load image.`)
          return
        }

        const { fileName } = response
        const mimeType = mime.lookup(fileName)

        this.setState({
          fileName,
          mimeType,
          image: response.data,
          isFailed: false,
          isSuccess: false
        })
      }
    )
  }

  handleUploadPress = () => {
    const { image: base64, mimeType, fileName } = this.state

    this.setState({ isLoading: true, isFailed: false, isSuccess: false })

    this.props
      .uploadFile({ base64, mimeType, fileName })
      .then(() => {
        alert(i18n.t`File uploaded successfully.`)

        this.setState({
          isLoading: false,
          isSuccess: true,
          image: null,
          mimeType: null,
          fileName: null
        })
      })
      .catch(error => {
        this.setState({ isLoading: false, isFailed: true })
      })
  }

  render() {
    const { i18n } = this.props
    const { isLoading, isSuccess, isFailed, image, mimeType } = this.state
    const isUploadable = image

    return (
      <View style={styles.screen}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          animated
        />
        <TouchableOpacity
          onPress={this.handleImagePress}
          style={styles.touchArea}
          disabled={isLoading}
        >
          {image ? (
            <Image
              source={{ uri: `data:${mimeType};base64,` + image }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.chooseText}>
                <Trans>Choose image</Trans>
              </Text>
            </View>
          )}
        </TouchableOpacity>
        {isFailed && (
          <FailMessage style={styles.failMessage}>
            <Trans>Error when uploading file.</Trans>
          </FailMessage>
        )}
        {isUploadable && (
          <FlatButton
            disabled={isLoading}
            isLoading={isLoading}
            color="white"
            onPress={this.handleUploadPress}
          >
            <Trans>Upload now</Trans>
          </FlatButton>
        )}
      </View>
    )
  }
}

const styles = {
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
  },
  failMessage: {
    marginBottom: 20
  },
  touchArea: {
    height: 260,
    marginBottom: 40
  },
  image: {
    flex: 1,
    borderRadius: 6
  },
  chooseText: {
    fontSize: 24,
    color: '#6c6c6c'
  },
  placeholder: {
    flex: 1,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 6
  }
}

export default connect(
  null,
  { uploadFile }
)(UploadImagesView)

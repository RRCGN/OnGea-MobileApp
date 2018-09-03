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
import { withI18n, Trans } from '@lingui/react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as mime from 'react-native-mime-types'

import { uploadFile } from '../redux/ducks/activities'
import ToolbarButton from '../components/ToolbarButton'
import { Button } from '../components/Button'
import { Colors } from '../utils/constants'

class UploadImagesView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Upload Images',
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          android: {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight
          }
        })
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
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
    const { i18n } = this.props

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
    const { i18n } = this.props
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
        alert(i18n.t`Error when uploading file.`)
        this.setState({ isLoading: false, isFailed: true })
      })
  }

  render() {
    const { i18n } = this.props
    const { isLoading, isSuccess, isFailed, image, mimeType } = this.state
    const isUploadable = image && !isLoading

    return (
      <View style={styles.screen}>
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
        {isUploadable && (
          <Button
            backgroundColor={Colors.PRIMARY}
            color="white"
            onPress={this.handleUploadPress}
            label={i18n.t`Upload image`}
          />
        )}
        {isLoading && <ActivityIndicator size="small" color={Colors.PRIMARY} />}
      </View>
    )
  }
}

const styles = {
  screen: {
    flex: 1,
    padding: 24
  },
  touchArea: {
    height: 260,
    marginBottom: 40
  },
  image: {
    flex: 1,
    borderRadius: 5
  },
  chooseText: {
    fontSize: 24,
    fontWeight: '700'
  },
  placeholder: {
    flex: 1,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: Colors.DARK_DIVIDER
  }
}

export default compose(
  withI18n(),
  connect(
    null,
    { uploadFile }
  )
)(UploadImagesView)

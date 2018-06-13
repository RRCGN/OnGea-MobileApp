import React from 'react'
import { Alert, ActivityIndicator, Text, View, Platform, StatusBar } from 'react-native'

import ToolbarButton from '../components/ToolbarButton'
import UploadImages from '../components/UploadImages/UploadImages'
import Button from '../components/ButtonText'
import { Colors } from '../utils/constants'
import Uploader from '../services/Uploader'

// import ApiService from '../services/ApiService'
// import { asyncStorageDebugger, loadDataDebugger } from '../utils/debugger'

class UploadImagesView extends React.Component {
  constructor(props) {
    super(props)
    this.appendImageContent = this.appendImageContent.bind(this)
  }

  state = {
    imagesArray: [],
    uploading: false,
    uploadFailed: false,
    uploadSuccess: false
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Upload Images',
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        elevation: 5,
        ...Platform.select({
          'android': {
            paddingTop: StatusBar.currentHeight,
            height: 56 + StatusBar.currentHeight } })
      },
      headerTitleStyle: { color: Colors.WHITE },
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)} /> )
    }
  }

  uploadImages = async () => {
    const { imagesArray, uploadSuccess } = this.state
    if (uploadSuccess) {
      Alert.alert('Already uploaded!')
    } else {
      this.setState({uploadFailed: false, uploadSuccess: false, uploading: true})
      const response = await Uploader.uploadFile(imagesArray)
      if (response) {
        this.setState({uploading: false})
        response.ok ? this.preformSuccessUpload() : this.preformFailedUpload()
      }
    }
  }

  preformSuccessUpload () {
    this.setState({uploadFailed: false, uploadSuccess: true})
  }

  preformFailedUpload () {
    this.setState({uploadFailed: true, uploadSuccess: false})
  }

  appendImageContent(imageData) {
    let {imagesArray} = this.state
    imagesArray.push(imageData)
    this.setState({imagesArray: imagesArray})
  }

  isUploadButtonActive () {
    const {imagesArray} = this.state
    return !!(imagesArray === undefined || imagesArray.length == 0)
  }

  render() {
    const { uploading, uploadSuccess, uploadFailed } = this.state
    return (
      <View style={{ flex: 1, padding: 18 }}>
          { !uploadSuccess
            ? ( <UploadImages appendImageContent = {this.appendImageContent} style={uploading ? styles.uploading : {}}/>)
            : ( <View style={{ flex: 1, padding: 1}} />)}
         <View style={styles.buttonContainer}>
           { uploadFailed && (
             <Text style={styles.errorText}>error uploading!</Text>)}
           { uploadSuccess && (
             <Text style={styles.successText}>uploaded successfully!</Text>)}
           { uploading
             ? ( <ActivityIndicator size="small" color={Colors.PRIMARY} /> )
             : ( <Button
                   disabled={this.isUploadButtonActive()}
                   icon='upload'
                   label="Upload Images"
                   onPress={ () => { this.uploadImages() } } />) }
        </View>
      </View>
    )
  }
}

const styles = {
  uploading: {
    opacity: 0.3
  },
  buttonContainer: {
    height: 40,
    justifyContent: 'center'
  },
  errorText: {
    color: Colors.RED,
    textAlign: 'center'
  },
  successText: {
    color: Colors.GREEN,
    textAlign: 'center'
  }
}
export default UploadImagesView

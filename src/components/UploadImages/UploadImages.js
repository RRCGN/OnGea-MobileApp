import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import PhotoUpload from 'react-native-photo-upload'
const addImage = require('../../assets/uploader-add-image.png')
const loadingImage = require('../../assets/uploader-loading-image.png')
const removeImage = require('../../assets/uploader-remove-image.png')
import { Colors } from '../../utils/constants'

class UploadImages extends React.Component {
  state = {
    images: [],
    selecting: false
  }
  UploadImages = () => {
    console.log('Hey! you are doing something')
  }
  addImage() {
    const { images } = this.state
    console.log('adding an image')
    this.setState({images: images.push({title: 'a title'})})
  }
  onStartHandling () {
    this.setState({selecting: true})
  }
  onResponseHandling () {
    this.setState({selecting: false})
  }
  render() {
    const { images, selecting } = this.state
    return (
      <View style={{ flex: 1, padding: 1 }}>
       <PhotoUpload
         onPhotoSelect={(object) => {console.log('onPhotoSelect', {object})}}
         onTapCustomButton={(object) => {console.log('onTapCustomButton', {object})}}
         onStart={(object) => {this.onStartHandling(object)}}
         onResponse={(object) => {this.onResponseHandling(object)}}
         onCancel={(object) => {console.log('onCancel', {object})}}
         onRender={(object) => {console.log('onRender', {object})}}
         onResizedImageUri={(object) => {console.log('onResizedImageUri', {object})}}
       >
         <View style={styles.indicatorView}>
           <ActivityIndicator
             animating={selecting}
             style={styles.indicator}
             size="small"
             color={Colors.PRIMARY} />
         </View>
         <Image
           style={ styles.image }
           resizeMode='cover'
           source={selecting ? loadingImage : addImage}
         />
       </PhotoUpload>
      </View>
    )
  }
}

const styles = {
  image: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75,
    zIndex: 1
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

export default UploadImages

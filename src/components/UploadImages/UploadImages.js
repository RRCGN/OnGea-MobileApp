import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import PropTypes from 'prop-types'
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


  addImage() {
    const { images } = this.state
    console.log('adding an image')
    this.setState({images: images.push({title: 'a title'})})
  }

  onStartHandling () {
    this.setState({selecting: true})
  }

  onResponseHandling (object) {
    console.log({object})
    const {appendImageContent} = this.props
    this.setState({selecting: false})
    appendImageContent(object)
  }

  render() {
    const { images, selecting } = this.state
    const { style } = this.props
    return (
      <View style={{ flex: 1, padding: 1 , ...style}}>
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

UploadImages.propTypes = {
  appendImageContent: PropTypes.func,
  style: PropTypes.any
}


export default UploadImages

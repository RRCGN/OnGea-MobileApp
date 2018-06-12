import React from 'react'
import { View, Platform, StatusBar } from 'react-native'

import ToolbarButton from '../components/ToolbarButton'
import UploadImages from '../components/UploadImages/UploadImages'
import Button from '../components/ButtonText'
import { Colors } from '../utils/constants'

// import ApiService from '../services/ApiService'
// import { asyncStorageDebugger, loadDataDebugger } from '../utils/debugger'

class UploadImagesView extends React.Component {
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

  uploadImages = () => {
    console.log('Hey! you are doing something')
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
         <UploadImages />
        <Button label="Upload Images" onPress={ () => { this.uploadImages() } } />
      </View>
    )
  }
}


export default UploadImagesView

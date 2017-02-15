/**
 * Dashboard Overview
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import ImageWithCaption from '../components/ImageWithCaption'

export default class SingleView extends Component {
  static navigationOptions = {
    title: null
  }

  render() {
    return (
      <View>
        <ImageWithCaption source={require('../assets/concert.jpg')} title="Tolle Reise" />
      </View>
    )
  }
}

/**
 * Dashboard Overview
 * @flow
 */

import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CardView, CardImage } from '../components/Card'

export default class DashboardOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <CardView>
          <CardImage source={require('../assets/concert.jpg')} />
          <Text>Hellooo</Text>
        </CardView>
      </View>
    )
  }
}

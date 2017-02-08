/**
 * Mobilities Overview
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
          <CardImage source={require('../assets/concert.jpg')} title="Il Mestiere Dell'arte 2" subtitle="Second Educational Path" />
          <Text>Hellooo</Text>
        </CardView>
      </View>
    )
  }
}

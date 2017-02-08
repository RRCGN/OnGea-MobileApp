/**
 * Mobilities Overview
 */

import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CardView, CardImage, CardSegment } from '../components/Card'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FlatButton from '../components/FlatButton'
import ButtonList from '../components/ButtonList'
import Button from '../components/Button'

export default class DashboardOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <CardView>
          <CardImage source={require('../assets/concert.jpg')} title="Tolle Reise" subtitle="nach Madrid" />
          <CardSegment hasBorderBottom space="small">
            <ButtonList>
              <FlatButton>
                <MaterialIcon name="map" style={{ color: 'rgba(0,0,0,0.54)'}} size={20} />
              </FlatButton>
              <FlatButton>
                <MaterialIcon name="alarm" style={{ color: 'rgba(0,0,0,0.54)'}} size={20} />
              </FlatButton>
            </ButtonList>
          </CardSegment>
          <CardSegment space="big">
            <Text>Dates</Text>
          </CardSegment>
          <CardSegment space="small">
            <ButtonList>
              <Button text="ANSEHEN" />
            </ButtonList>
          </CardSegment>
        </CardView>
      </View>
    )
  }
}

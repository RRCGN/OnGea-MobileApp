/**
 * ListView for Mobilities
 */

import React, { Component } from 'react'
import { ListView, RefreshControl, View, StyleSheet, Image } from 'react-native'
import DataService from '../services/DataService'
import FlatButton from '../components/FlatButton'
import ButtonList from '../components/ButtonList'
import TripDate from '../components/TripDate'
import TripDateList from '../components/TripDateList'
import ImageCaptionContainer from '../components/ImageCaptionContainer'
import TitleOnShadow from '../components/TitleOnShadow'
import Touchable from '../components/Touchable'
import { CardView, CardSegment } from '../components/Card'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


export default class MobilitiesListView extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(['halli', 'hallo']),
      refreshing: false
    }
  }

  render() {
    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._handleRefresh}
          />
        }
        dataSource={this.state.dataSource}
        renderRow={this._renderListRow}
      />
    )
  }

  _renderListRow = (rowData) => (
    <View style={styles.listItem}>
      <CardView>
        {this._renderImage()}
        {this._renderActionButtons()}
        {this._renderDates()}
        {this._renderMoreButtons()}
      </CardView>
    </View>
  )

  _renderImage = () => {
    return (
      <Touchable useForeground={true} onPress={() => this.props.navigation.navigate('Single', { title: 'Tolle Reise' })}>
        <View style={{ aspectRatio: 16/9 }}>
          <ImageCaptionContainer
            source={require('../assets/concert.jpg')}
            caption={
              <TitleOnShadow title="Tolle Reise" subtitle="nach Madrid" />
            } />
        </View>
      </Touchable>
    )
  }

  _renderActionButtons = () => {
    return (
      <CardSegment hasBorderBottom space="small">
        <ButtonList>
          <FlatButton
            icon={
              <MaterialIcon
                name="map"
                style={{ color: 'rgba(0,0,0,0.54)'}}
                size={20} />
            }
          />
          <FlatButton
            icon={
              <MaterialIcon
                name="alarm"
                style={{ color: 'rgba(0,0,0,0.54)'}}
                size={20} />
            }
          />
        </ButtonList>
      </CardSegment>
    )
  }

  _renderDates = () => {
    return (
      <CardSegment space="big">
        <TripDateList>
          <TripDate typeText="vom" dateText="10.04.2017" />
          <TripDate typeText="bis" dateText="16.04.2017" />
        </TripDateList>
      </CardSegment>
    )
  }

  _renderMoreButtons = () => {
    return (
      <CardSegment space="small">
        <ButtonList>
          <FlatButton label="Ansehen" />
        </ButtonList>
      </CardSegment>
    )
  }

  _handleRefresh = async () => {
    this.setState({ refreshing: true })
    const data = await this.props.refreshData()
    this.setState({ refreshing: false })
  }
}

const styles = StyleSheet.create({
  listItem: {
    margin: 16
    // FIXME: Space between cards is now 32, because RN doesn't collapse
    // margins. Other solutions causes issues under Android: Although there
    // is _somehow_ padding below the last card, it will just scroll to the end
    // of the last card, ignoring everything else.
  }
})

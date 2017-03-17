/**
 * ListView for Mobilities
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Image,
  NetInfo,
  ListView,
  StyleSheet,
  RefreshControl
} from 'react-native'
import Snackbar from 'react-native-snackbar'
import DataService from '../services/DataService'
import OGTextButton from '../components/OGTextButton'
import OGIconButton from '../components/OGIconButton'
import ButtonList from '../components/ButtonList'
import TripDate from '../components/TripDate'
import TripDateList from '../components/TripDateList'
import ImageCaptionContainer from '../components/ImageCaptionContainer'
import TitleOnShadow from '../components/TitleOnShadow'
import Touchable from '../components/Touchable'
import Hint from '../components/Hint'
import { CardView, CardSegment } from '../components/Card'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ComIcon from 'react-native-vector-icons/MaterialCommunityIcons'


type MLVProps = {
  mobilities: any,
  refreshData: () => void,
  navigation: any
}

type MLVState = {
  dataSource: any,
  refreshing: boolean
}

export default class MobilitiesListView extends Component {
  props: MLVProps
  state: MLVState

  constructor(props: MLVProps) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(props.mobilities),
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
        {this._renderImage(rowData)}
        {this._renderDates(rowData)}
        {this._renderMoreButtons(rowData)}
      </CardView>
    </View>
  )

  _renderImage = (data) => {
    return (
      <Touchable
        useForeground={true}
        onPress={() => this.props.navigation.navigate('Single', data)}
      >
        <View style={{ aspectRatio: 16/9 }}>
          <ImageCaptionContainer
            source={{ uri: data.activity.image }}
            caption={<TitleOnShadow title={data.activity.name} />}
          />
        </View>
      </Touchable>
    )
  }

  _renderActionButtons = () => {
    return (
      <CardSegment hasBorderBottom space="small">
        <ButtonList>
          <OGIconButton
            icon={
              <MaterialIcon
                name="map"
                style={{ color: 'rgba(0,0,0,0.54)'}}
              />
            }
          />
          <OGIconButton
            icon={
              <MaterialIcon
                name="alarm"
                style={{ color: 'rgba(0,0,0,0.54)'}}
              />
            }
          />
        </ButtonList>
      </CardSegment>
    )
  }

  _renderHint = (data) => {
    return (
      <View style={{ marginTop: -1 }}>
        <Hint
          type="nice"
          text="Dein Flug ist morgen um 18:00 Uhr."
          icon={<ComIcon size={18} color="white" name="airplane-takeoff" />}
        />
      </View>
    )
  }

  _renderDates = (data) => {
    return (
      <CardSegment space="big">
        <TripDateList>
          <TripDate type="vom" date={data.activity.dateFrom} />
          <TripDate type="bis" date={data.activity.dateTo} />
        </TripDateList>
      </CardSegment>
    )
  }

  _renderMoreButtons = () => {
    return (
      <CardSegment space="small">
        <ButtonList>
          <OGTextButton label="Ansehen" />
        </ButtonList>
      </CardSegment>
    )
  }

  _handleRefresh = async () => {
    this.setState({ refreshing: true })

    // Check network connection
    const isOnline = await NetInfo.isConnected.fetch()
    if (!isOnline) {
      this.setState({ refreshing: false })
      Snackbar.show({
        title: 'Your connection is offline.',
        duration: Snackbar.LENGTH_SHORT
      })
      return
    }

    // Fetch new data
    const data = await this.props.refreshData()

    // FIXME: Currently the whole navigator gets re-mounted because screenProp
    //   doesn't trigger a rerender. If this issue is closed, refreshing
    //   needs to be set to false.
    //   https://github.com/react-community/react-navigation/issues/577

    // this.setState({ refreshing: false })
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

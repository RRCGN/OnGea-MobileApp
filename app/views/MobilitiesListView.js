/**
 * ListView for Mobilities
 */

import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import FlatButton from '../components/FlatButton'
import ButtonList from '../components/ButtonList'
import Button from '../components/Button'
import TripDate from '../components/TripDate'
import TripDateList from '../components/TripDateList'
import { CardView, CardImage, CardSegment } from '../components/Card'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class MobilitiesListView extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(['halli', 'hallo'])
    }
  }

  renderListRow = (rowData) => (
    <View style={styles.listItem}>
      <CardView>
        <CardImage
          source={require('../assets/concert.jpg')}
          title="Tolle Reise"
          subtitle="nach Madrid"
          onPress={() => this.props.navigation.navigate('Single', { title: 'Tolle Reise' })}
        />
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
          <TripDateList>
            <TripDate typeText="vom" dateText="10.04.2017" />
            <TripDate typeText="bis" dateText="16.04.2017" />
          </TripDateList>
        </CardSegment>
        <CardSegment space="small">
          <ButtonList>
            <Button text="ANSEHEN" />
          </ButtonList>
        </CardSegment>
      </CardView>
    </View>
  )

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderListRow}
      />
    )
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

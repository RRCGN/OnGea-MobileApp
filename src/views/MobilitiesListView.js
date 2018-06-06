import React, { Component } from 'react'
import { ListView, NetInfo, RefreshControl, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Card, CardSegment, CardTitle } from '../components/Card'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import DateRange from '../components/DateRange'



type MLVProps = {
  mobilities: any,
  refreshData: () => void,
  navigation: any
}

type MLVState = {
  dataSource: any,
  refreshing: boolean
}

class MobilitiesListView extends Component {
  props: MLVProps
  state: MLVState

  constructor(props: MLVProps) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      // dataSource: dataSource.cloneWithRows(props.activities),
      dataSource: dataSource.cloneWithRows({}),
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

  _renderListRow = (data) => (
    <View style={styles.listItem}>
      <Card>

        {/* Image */}
        <CardTitle
          image={{ uri: data.backdrop }}
          title={data.name}
          onPress={() => this.props.navigation.navigate('Single', data)}
        />

        {/* Dates */}
        <CardSegment big>
          <DateRange from={data.dateFrom} to={data.dateTo} />
        </CardSegment>

        {/* Action Buttons */}
        <CardSegment big>
          <ButtonFlatGrid>
            <Button
              label="View"
              onPress={() => this.props.navigation.navigate('Single', data)}
            />
          </ButtonFlatGrid>
        </CardSegment>

      </Card>
    </View>
  )

  _handleRefresh = async () => {
    this.setState({ refreshing: true })

    // Check network connection
    const isOnline = await NetInfo.isConnected.fetch()
    if (!isOnline) {
      this.setState({ refreshing: false })
      /* TODO: Snackbar replacement
      Snackbar.show({
        title: 'Your connection is offline.',
        duration: Snackbar.LENGTH_SHORT
      })*/
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

MobilitiesListView.propTypes = { screenProps: PropTypes.object }

export default MobilitiesListView

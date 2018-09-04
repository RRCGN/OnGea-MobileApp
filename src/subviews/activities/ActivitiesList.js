import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'

import ActivityCard from './ActivityCard'
import ActivitiesEmpty from './ActivitiesEmpty'

export default class ActivitiesList extends React.Component {
  static propTypes = {
    activitiesArray: PropTypes.array.isRequired,
    isRefreshing: PropTypes.bool,
    handleRefresh: PropTypes.func.isRequired,
    onGoToActivity: PropTypes.func.isRequired
  }

  renderItem = ({ item }) => {
    return (
      <ActivityCard
        activity={item}
        onGoToActivity={this.props.onGoToActivity(item)}
      />
    )
  }

  renderEmptyList = () => {
    return <ActivitiesEmpty isRefreshing={this.props.isRefreshing} />
  }

  getKeyFromItem = item => item.id.toString()

  render() {
    const { activitiesArray, isRefreshing, handleRefresh } = this.props

    return (
      <FlatList
        ListHeaderComponent={SafeAreaView}
        ListFooterComponent={SafeAreaView}
        ListEmptyComponent={this.renderEmptyList}
        data={activitiesArray}
        renderItem={this.renderItem}
        keyExtractor={this.getKeyFromItem}
        refreshing={isRefreshing}
        onRefresh={this.props.handleRefresh}
      />
    )
  }
}

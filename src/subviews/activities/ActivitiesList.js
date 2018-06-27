import React from 'react'
import { FlatList } from 'react-native'
import Activity from './Activity'
import ActivitiesEmpty from './ActivitiesEmpty'
import PropTypes from 'prop-types'

class ActivitiesList extends React.Component {

  static propTypes = {
    activitiesArray: PropTypes.array,
    isRefreshing: PropTypes.bool,
    handleRefresh: PropTypes.func,
    handleClick: PropTypes.func
  }

  _renderItem = ({item}) => <Activity activityObject={item} handleClick={this.props.handleClick} />
  _keyExtractor = (activity) => activity.id.toString()

  render () {
    const { activitiesArray, isRefreshing, handleRefresh } = this.props
    return (
        <FlatList
          ListEmptyComponent={() => <ActivitiesEmpty />}
          data={activitiesArray}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          refreshing={isRefreshing}
          onRefresh={() => {handleRefresh()}}
        />
    )
  }
}


export default ActivitiesList

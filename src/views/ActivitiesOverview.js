import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchActivities } from '../redux/ducks/activities'
import ActivitiesList from '../subviews/activities/ActivitiesList'
import ToolbarButton from '../components/ToolbarButton'

class ActivitiesOverview extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchActivities: PropTypes.func.isRequired,
    activities: PropTypes.array.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My Activities',
      headerRight: (
        <ToolbarButton
          androidIcon="settings"
          iosIcon="ios-cog"
          onPress={() => navigation.navigate('Settings')}
        />
      )
    }
  }

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props
      .fetchActivities()
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(error => {
        console.error(error)
        this.setState({ isLoading: false })
      })
  }

  handleRefresh = () => {
    this.props.fetchActivities()
  }

  handleGoToActivity = activityObject => {
    this.props.navigation.navigate('SingleActivity', { activityObject })
  }

  render() {
    const { isLoading } = this.state

    return (
      <ActivitiesList
        activitiesArray={this.props.activities}
        isRefreshing={isLoading}
        handleRefresh={this.handleRefresh}
        onGoToActivity={this.handleGoToActivity}
      />
    )
  }
}

const mapStateToProps = state => ({
  activities: state.activities
})

const mapDispatchToProps = {
  fetchActivities
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesOverview)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { i18n } from '../i18n'
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
      title: i18n.t`Activities`,
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
    isLoading: false
  }

  componentDidMount() {
    if (this.props.activities.length === 0) {
      this.loadActivities()
    }
  }

  loadActivities = () => {
    this.setState({ isLoading: true })

    this.props
      .fetchActivities()
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(error => {
        this.setState({ isLoading: false })
      })
  }

  handleRefresh = () => {
    this.loadActivities()
  }

  handleGoToActivity = activity => () => {
    this.props.navigation.navigate('SingleActivity', {
      activityId: activity.id
    })
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
  activities: state.activities.ids
    .map(id => state.activities.entities[id])
    .filter(a => !!a)
})

const mapDispatchToProps = {
  fetchActivities
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesOverview)

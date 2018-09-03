import React, { Component } from 'react'
import { Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { i18n } from '../i18n'
import { fetchActivities } from '../redux/ducks/activities'
import ActivitiesList from '../subviews/activities/ActivitiesList'
import ToolbarButton from '../components/ToolbarButton'
import {
  scheduleNotifications,
  poll,
  configurePushNotifications
} from '../lib/notifications'

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
    this.setupNotifications()

    if (this.props.activities.length === 0) {
      this.loadActivities()
    }
  }

  setupNotifications = () => {
    configurePushNotifications()
    scheduleNotifications()
      .then(({ firstTime }) => {
        poll().catch(err => console.error(err))

        if (!firstTime) return

        const message = i18n.t`We will send you notifications with important Announcements before and during your journey.`
        const iosAddition = i18n.t`Notifications will work while OnGea is in Background. If you completely close the app, Notifications will also be turned off.`

        Alert.alert(
          i18n.t`Push Notifications enabled`,
          Platform.OS === 'ios' ? message + ' ' + iosAddition : message,
          [{ text: 'OK', onPress: () => {} }]
        )
      })
      .catch(err => {
        // Announcements Feature is not available.
        // Intentially left blank
      })
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

import React from 'react'
import { StatusBar, View, Platform, StyleSheet } from 'react-native'
import SplashScreen from 'rn-splash-screen'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAgreementVersion } from '../redux/ducks/agreement'
import {
  scheduleNotifications,
  poll,
  configurePushNotifications
} from '../lib/notifications'

import AgreementAcceptance from './AgreementAcceptance'
import LoginNavigation from '../navigations/LoginNavigation'
import MainNavigation from '../navigations/MainNavigation'

import agreement from '../strings/agreements'

class Root extends React.PureComponent {
  static propTypes = {
    isAgreementAccepted: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setAgreementVersion: PropTypes.func.isRequired
  }

  componentDidMount() {
    SplashScreen.hide()

    const { isAgreementAccepted, isLoggedIn } = this.props
    if (isAgreementAccepted && isLoggedIn) {
      this.setupNotifications()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn && !nextProps.isLoggedIn) {
      clearInterval(this.notificationPoll)
      cancelNotifications()
    }
  }

  sendIosNotificationInfo = () => {
    Alert.alert(
      i18n.t`OnGea Announcements on iOS`,
      i18n.t`We will send you Notifications about important Announcements. You will receive Notifications when the App is active or in background, but not if you completely close the App.`,
      [{ text: 'OK', onPress: () => {} }]
    )
  }

  setupNotifications = () => {
    configurePushNotifications()
    scheduleNotifications()
      .then(({ firstTime }) => {
        this.pollActiveNotifications()

        if (firstTime && Platform.OS === 'ios') {
          this.sendIosNotificationInfo()
        }
      })
      .catch(err => {
        // Announcements Feature is not available.
        // Intentially left blank
      })
  }

  pollActiveNotifications = () => {
    this.pollOneTimeNotification()

    this.notificationPoll = setInterval(() => {
      this.pollOneTimeNotification()
    }, 60000) // 1 minute
  }

  pollOneTimeNotification = () => {
    poll().catch(err => console.error(err))
  }

  handleAgree = () => {
    this.props.setAgreementVersion(agreement.version)
  }

  renderMain = () => {
    return (
      <View style={styles.screen}>
        {this.props.isLoggedIn && (
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
            animated
          />
        )}
        {this.props.isLoggedIn ? <MainNavigation /> : <LoginNavigation />}
      </View>
    )
  }

  renderAgreement = () => {
    return (
      <AgreementAcceptance
        agreements={agreement.items}
        onAgree={this.handleAgree}
      />
    )
  }

  render() {
    return (
      <View style={styles.screen}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {this.props.isAgreementAccepted
          ? this.renderMain()
          : this.renderAgreement()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isAgreementAccepted: state.agreement.acceptedVersion === agreement.version,
  isLoggedIn: !!state.auth.token
})

const mapDispatchToProps = {
  setAgreementVersion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
})

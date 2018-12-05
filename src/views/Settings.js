import React, { Component } from 'react'
import { View, Alert, ScrollView, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import { purgeStoredState } from 'redux-persist'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import RNExitApp from 'react-native-exit-app'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'
import { Trans } from '@lingui/react'
import { version } from '../../package.json'

import { i18n } from '../i18n'
import ToolbarButton from '../components/ToolbarButton'
import FlatButton from '../components/FlatButton'
import Section from '../components/Section'

import { persistConfig } from '../redux/configure-store'
import { logout } from '../redux/ducks/auth'
import { resetActivities } from '../redux/ducks/activities'

class Settings extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    resetActivities: PropTypes.func.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t`Settings`,
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          iconColor="black"
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  state = {
    isDeletingAllData: false,
    isDeletingMaps: false
  }

  deleteStore = () => {
    return purgeStoredState(persistConfig)
  }

  deleteMaps = () => {
    return MapboxGL.offlineManager.getPacks().then(packs => {
      return Promise.all(
        packs.map(pack => MapboxGL.offlineManager.deletePack(pack.name))
      )
    })
  }

  handleLogout = () => {
    this.props.resetActivities()
    this.props.logout()
  }

  handleReallyDeleteAll = () => {
    this.setState({ isDeletingAllData: true })

    this.deleteMaps()
      .then(() => this.deleteStore())
      .catch(err => {
        console.error(err)
        this.deleteStore()
        return
      })
      .then(() => RNExitApp.exitApp())
  }

  handleDeleteAll = () => {
    Alert.alert(
      i18n.t`Delete all data`,
      i18n.t`This action will delete all stored data and the offline available map. After that it will close OnGea. If you reopen OnGea again, you will be back to a fresh start.`,
      [
        { text: i18n.t`Cancel`, onPress: () => {}, style: 'cancel' },
        {
          text: i18n.t`Delete all and exit`,
          onPress: this.handleReallyDeleteAll
        }
      ],
      { cancelable: false }
    )
  }

  handleDeleteMaps = () => {
    this.setState({ isDeletingMaps: true })
    this.deleteMaps()
      .then(results => {
        this.setState({ isDeletingMaps: false })
        alert(i18n.t`Deleted ${results.length} offline Maps.`)
      })
      .catch(err => {
        this.setState({ isDeletingMaps: false })
        alert(i18n.t`Failed to delete offline Maps.`)
        console.error(err)
      })
  }

  handleCreditsPress = () => {
    this.props.navigation.navigate('Credits')
  }

  render() {
    const { isDeletingMaps, isDeletingAllData } = this.state

    return (
      <ScrollView style={styles.screen}>
        <View style={styles.screen}>
          <Section>
            <FlatButton onPress={this.handleLogout}>
              <Trans>Logout</Trans>
            </FlatButton>
          </Section>
          <Section title={i18n.t`Delete offline maps`}>
            <Text style={styles.explain}>
              <Trans>
                Maps for places of your activity are downloaded for offline
                usage. Use this to delete all downloaded maps. If you view an
                Activity, relevant maps will be downloaded again.
              </Trans>
            </Text>
            <FlatButton
              disabled={isDeletingMaps}
              isLoading={isDeletingMaps}
              onPress={this.handleDeleteMaps}
            >
              <Trans>Delete offline maps</Trans>
            </FlatButton>
          </Section>
          <Section title={i18n.t`Delete all data`}>
            <Text style={styles.explain}>
              <Trans>
                This action will delete all stored data and the offline
                available map. After that it will close OnGea. If you reopen
                OnGea again, you will be back to a fresh start.
              </Trans>
            </Text>
            <FlatButton
              disabled={isDeletingAllData}
              isLoading={isDeletingAllData}
              onPress={this.handleDeleteAll}
            >
              <Trans>Delete all data</Trans>
            </FlatButton>
          </Section>
          <Section>
            <FlatButton onPress={this.handleCreditsPress}>
              <Trans>Credits</Trans>
            </FlatButton>
          </Section>
          <Section title={i18n.t`App Information`}>
            <Text style={styles.explain}>App Version: {version}</Text>
          </Section>
        </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = {
  logout,
  resetActivities
}

export default connect(
  null,
  mapDispatchToProps
)(Settings)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
  explain: {
    color: '#6c6c6c',
    fontSize: 14,
    marginBottom: 16
  }
})

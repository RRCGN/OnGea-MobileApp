import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { purgeStoredState } from 'redux-persist'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import RNExitApp from 'react-native-exit-app'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'

import { i18n } from '../i18n'
import ToolbarButton from '../components/ToolbarButton'
import Button from '../components/ButtonText'

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
          onPress={() => navigation.goBack(null)}
        />
      )
    }
  }

  state = {
    isDeleting: false
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
    this.setState({ isDeleting: true })

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
      i18n.t`Delete all App Data`,
      i18n.t`This action will delete all stored data and the offline available map. After that it will close OnGea. If you reopen OnGea again, you will be back to a fresh start.`,
      [
        { text: i18n.t`Cancel`, onPress: () => {}, style: 'cancel' },
        {
          text: i18n.t`Delete All and Exit`,
          onPress: this.handleReallyDeleteAll
        }
      ],
      { cancelable: false }
    )
  }

  handleDeleteMaps = () => {
    this.deleteMaps()
      .then(results => {
        alert(i18n.t`Deleted ${results.length} offline Maps.`)
      })
      .catch(err => {
        alert(i18n.t`Failed to delete offline Maps.`)
        console.error(err)
      })
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <Spinner
          visible={this.state.isDeleting}
          textContent={i18n.t`Deleting...`}
          textStyle={{ color: '#FFF' }}
        />
        <View style={{ padding: 18 }} />
        <Button label={i18n.t`Logout`} onPress={this.handleLogout} />
        <Button
          label={i18n.t`Delete all data`}
          onPress={this.handleDeleteAll}
        />
        <Button
          label={i18n.t`Delete offline maps`}
          onPress={this.handleDeleteMaps}
        />
      </View>
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

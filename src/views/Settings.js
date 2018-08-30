import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { purgeStoredState } from 'redux-persist'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import RNExitApp from 'react-native-exit-app'
import Spinner from 'react-native-loading-spinner-overlay'

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
      title: 'Settings',
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
      'Delete all App Data',
      'This action will delete all stored data and the offline available map. After that it will close OnGea. If you reopen OnGea again, you will be back to a fresh start.',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Delete All and Exit', onPress: this.handleReallyDeleteAll }
      ],
      { cancelable: false }
    )
  }

  handleDeleteMaps = () => {
    this.deleteMaps()
      .then(results => {
        alert(`Deleted ${results.length} offline Maps.`)
      })
      .catch(err => {
        alert('Failed to delete offline Maps.')
        console.error(err)
      })
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 18 }}>
        <Spinner
          visible={this.state.isDeleting}
          textContent="Deleting..."
          textStyle={{ color: '#FFF' }}
        />
        <View style={{ padding: 18 }} />
        <Button label="Logout" onPress={this.handleLogout} />
        <Button label="Delete all data" onPress={this.handleDeleteAll} />
        <Button label="Delete offline maps" onPress={this.handleDeleteMaps} />
      </View>
    )
  }
}

import { connect } from 'react-redux'

const mapDispatchToProps = {
  logout,
  resetActivities
}

export default connect(
  null,
  mapDispatchToProps
)(Settings)

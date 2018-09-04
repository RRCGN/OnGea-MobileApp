import React from 'react'
import { SafeAreaView, ScrollView, Text, View, Platform, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import Permissions from 'react-native-permissions'
import { Trans, I18n } from '@lingui/react'

import AgreementAcceptanceItems from './AgreementAcceptanceItems'
import PlatformIcon from '../components/PlatformIcon'
import FlatButton from '../components/FlatButton'
import fonts from '../utils/fonts'

export default class AgreementAcceptance extends React.PureComponent {
  static propTypes = {
    agreements: PropTypes.array.isRequired,
    onAgree: PropTypes.func.isRequired
  }

  requestPermissions = () => {
    return Permissions.request('location')
      .then(() => Permissions.request('camera'))
      .then(() => {
        return Platform.OS === 'android' ? Permissions.request('storage') : true
      })
      .then(() => {
        return Platform.OS === 'ios'
          ? Permissions.request('backgroundRefresh')
          : true
      })
      .then(() => {
        return Platform.OS === 'ios'
          ? Permissions.request('notification')
          : true
      })
      .catch(err => {
        console.warn(err)
        return true
      })
  }

  handleButtonPress = () => {
    this.requestPermissions().then(() => this.props.onAgree())
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.wrapperHeader}>
              <Text style={styles.title}>
                <Trans>
                  Privacy Policy of{' '}
                  <Text style={styles.titleBold}>OnGea app</Text>
                </Trans>
              </Text>
              <Text style={styles.subTitle}>
                <Trans>
                  the following notes are related explicitly to OnGea app
                </Trans>
              </Text>
              <View style={styles.line} />
              <Text style={styles.title2}>
                <Trans>REQUESTING PERMISSIONS</Trans>
              </Text>
              <View style={styles.line} />
            </View>
            <View style={styles.wrapperBody}>
              <Text style={styles.subTitle}>
                <Trans>
                  OnGea app requests the following informations as a part of its
                  services, by clicking ACCEPT at the end of the notes, you
                  proof that OnGea is allowed to use the following informations
                  as has been specified down in the description.
                </Trans>
              </Text>
              <AgreementAcceptanceItems items={this.props.agreements} />
            </View>
            <View style={styles.wrapperFooter}>
              <FlatButton onPress={this.handleButtonPress} style={{ flex: 1 }}>
                <Text>Accept</Text>
              </FlatButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = {
  container: { flex: 1 },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  wrapperHeader: {},
  wrapperBody: {},
  wrapperFooter: {
    flexDirection: 'row',
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    ...fonts.title,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10
  },
  title2: {
    textAlign: 'center',
    paddingVertical: 5
  },
  titleBold: { fontWeight: 'bold' },
  subTitle: {
    textAlign: 'left',
    marginBottom: 20
  },
  line: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15
  }
}

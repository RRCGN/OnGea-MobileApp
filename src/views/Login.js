import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans, withI18n } from '@lingui/react'
import { compose } from 'recompose'

import { login } from '../redux/ducks/auth'

import FailMessage from '../components/FailMessage'
import FlatButton from '../components/FlatButton'
import FlatInput from '../components/FlatInput'
import colors from '../utils/colors'

class Login extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }

  state = {
    username: '',
    password: '',
    instanceUrl: __DEV__ ? 'http://ongeastage.nano-dev.de' : '',
    isLoading: false,
    isError: false
  }

  handleUsernameChange = username => {
    this.setState({ username })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  handleInstanceUrlChange = instanceUrl => {
    this.setState({ instanceUrl })
  }

  handleLoginButtonPress = () => {
    const { username, password, instanceUrl: unsafeInstanceUrl } = this.state
    this.setState({ isLoading: true, isError: false })

    const instanceUrl = unsafeInstanceUrl.startsWith('http')
      ? unsafeInstanceUrl
      : 'https://' + unsafeInstanceUrl

    this.props.login({ username, password, instanceUrl }).catch(error => {
      this.setState({ isError: true, isLoading: false })
    })
  }

  handleWebsiteButtonPress = () => {
    this.props.navigation.navigate('WebApp')
  }

  render() {
    const { isLoading, isError } = this.state
    const { i18n } = this.props

    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.form}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              {isError && (
                <FailMessage style={styles.message}>
                  <Trans>
                    Something went wrong when logging in. Please check the OnGea
                    URL, your Username and Password.
                  </Trans>
                </FailMessage>
              )}
              <FlatInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder={i18n.t`OnGea URL`}
                value={this.state.instanceUrl}
                onChangeText={this.handleInstanceUrlChange}
              />
              <FlatInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder={i18n.t`Username`}
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
              />
              <FlatInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder={i18n.t`Password`}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
              />
              <FlatButton
                disabled={isLoading}
                isLoading={isLoading}
                onPress={this.handleLoginButtonPress}
                style={styles.loginButton}
              >
                <Trans>Login</Trans>
              </FlatButton>
              <View style={styles.websiteButton}>
                <FlatButton onPress={this.handleWebsiteButtonPress}>
                  <Trans>Go to Website</Trans>
                </FlatButton>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }
}

const mapDispatchToProps = { login }

export default compose(
  withI18n(),
  connect(
    null,
    mapDispatchToProps
  )
)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  form: {
    flex: 1,
    width: '80%'
  },
  input: {
    marginBottom: 10
  },
  message: {
    marginTop: -20,
    marginBottom: 20
  },
  websiteButton: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end'
  },
  loginButton: {
    marginBottom: 20
  },
  logo: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 100
  }
})

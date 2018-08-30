import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans, I18n } from '@lingui/react'

import { login } from '../redux/ducks/auth'

import { Button } from '../components/Button'
import colors from '../utils/colors'

class Login extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }

  state = {
    username: '',
    password: '',
    instanceUrl: 'http://ongeastage.nano-dev.de',
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
    const { username, password, instanceUrl } = this.state
    this.setState({ isLoading: true })

    this.props.login({ username, password, instanceUrl }).catch(error => {
      this.setState({ isError: true, isLoading: false })
    })
  }

  handleWebsiteButtonPress = () => {
    this.props.navigation.navigate('WebApp')
  }

  render() {
    const { isLoading, isError } = this.state

    return (
      <KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        <View style={styles.messagesContainer}>
          {isError && (
            <Text style={styles.messagesErrorText}>
              <Trans>Something went wrong</Trans>
            </Text>
          )}
        </View>
        <I18n>
          {({ i18n }) => (
            <React.Fragment>
              <TextInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                style={styles.formElement}
                placeholder={i18n.t`OnGea URL`}
                value={this.state.instanceUrl}
                onChangeText={this.handleInstanceUrlChange}
              />
              <TextInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                style={styles.formElement}
                placeholder={i18n.t`Username`}
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
              />
              <TextInput
                disabled={isLoading}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.formElement}
                placeholder={i18n.t`Password`}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
              />
              <View style={styles.loginButtonContainer}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={colors.primaryGreen} />
                ) : (
                  <Button
                    label={i18n.t`Login`}
                    backgroundColor={colors.primaryGreen}
                    color="white"
                    style={styles.loginButton}
                    onPress={this.handleLoginButtonPress}
                  />
                )}
              </View>
              <Button
                label={i18n.t`Go to Website`}
                backgroundColor="white"
                color={colors.primaryGreen}
                style={styles.loginButton}
                onPress={this.handleWebsiteButtonPress}
              />
            </React.Fragment>
          )}
        </I18n>
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = { login }

export default connect(
  null,
  mapDispatchToProps
)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayLight
  },
  formElement: {
    width: 200,
    height: 50,
    alignSelf: 'center'
  },
  messagesContainer: {
    height: 20
  },
  messagesErrorText: {
    color: colors.red
  },
  messagesSuccessText: {
    color: colors.green
  },
  loginButtonContainer: {
    height: 65,
    alignContent: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    width: 200
  }
})

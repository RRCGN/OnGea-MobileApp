/**
 * View for Login.
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import ApiService from '../services/ApiService'
import LoginService from '../services/LoginService'
import FlatButton from '../components/FlatButton'
import TextField from 'react-native-md-textinput'


type LoginViewProps = {
  onSuccessfulLogin: (token: string) => void
}

type LoginViewState = {
  username: string,
  password: string,
  success: ?boolean
}

export default class LoginView extends Component {
  props: LoginViewProps
  state: LoginViewState

  static defaultProps = {
    onSubmit: async () => { }
  }

  constructor(props: LoginViewProps) {
    super(props)
    this.state = { username: '', password: '', success: null }
  }

  render() {
    const { success } = this.state
    const stateColor = this._getColorForSuccess(success)

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          style={styles.formElement}
          label="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          borderColor={stateColor}
        />
        <TextField
          style={styles.formElement}
          label="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          borderColor={stateColor}
        />
        <View style={styles.button}>
          <FlatButton
            label="Login"
            styles={styles.formElement}
            onPress={this._handleLoginPress}
          />
        </View>
      </View>
    )
  }

  _getColorForSuccess = (success) => {
    if (success == true) return 'green'
    else if (success == false) return 'red'
    else return undefined
  }

  _handleLoginPress = async () => {
    const { username, password } = this.state
    const { ok, token } = await ApiService.auth(username, password)
    this.setState({ success: ok })

    if (ok && token) {
      try {
        await LoginService.saveToken(token)
      } catch (error) {
        console.log('Error when saving token:', error)
      }

      // Call onSuccessfulLogin from Navigator
      this.props.onSuccessfulLogin(token)
    }
  }
}


const styles = StyleSheet.create({
  formElement: {
    width: 200
  },
  button: {
    marginTop: 20
  }
})

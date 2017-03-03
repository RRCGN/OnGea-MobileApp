/**
 * Handles Auth Call and Token handling.
 * @flow
 */

import React, { Component } from 'react'
import LoginView from '../views/LoginView'
import ApiService from '../services/ApiService'
import LoginService from '../services/LoginService'


export type LoginProps = {
  onSuccessfulLogin: (token: string) => void
}

type LoginState = {
  success: ?boolean
}

export default class Login extends Component {
  props: LoginProps
  state: LoginState

  constructor(props: LoginProps) {
    super(props)
    this.state = { success: null }
  }

  _handleSubmit = async ({ username, password }) => {
    const { ok, token } = await ApiService.auth(username, password)
    this.setState({ success: ok })

    if (ok && token) {
      try {
        await LoginService.saveToken(token)
      } catch (error) {
        console.log('Could not save token. Error:', error)
      }

      this.props.onSuccessfulLogin(token)
    }
  }

  render() {
    return (
      <LoginView
        success={this.state.success}
        onSubmit={this._handleSubmit}
      />
    )
  }
}

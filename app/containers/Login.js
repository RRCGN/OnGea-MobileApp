/**
 *
 * @flow
 */

import React, { Component } from 'react'
import LoginView from '../views/LoginView'
import LoginService from '../services/LoginService'


type Props = {
  onSuccessfulLogin: () => void
}

export default class Login extends Component {

  state: { success: ?boolean }

  constructor(props: Props) {
    super(props)

    this.state = {
      success: null
    }
  }

  _handleSubmit = async ({ username, password }) => {
    const { success, token } = await LoginService.obtainToken(username, password)
    this.setState({ success })

    if (success) {
      await LoginService.saveToken(token)
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

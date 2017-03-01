/**
 *
 * @flow
 */

import React, { Component } from 'react'
import LoginView from '../views/LoginView'


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

  _handleSubmit = ({ username, password }) => {
    LoginManager
      .try({ username, password })
      .then(success => {
        if (!success) {
          this.setState({ success })
          return
        }

        this.props.onSuccessfulLogin()
      })
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

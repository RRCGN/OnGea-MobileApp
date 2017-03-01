/**
 *
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Button,
  TextInput
} from 'react-native'


type Props = {
  success: ?boolean,
  onSubmit: ({ username: string, password: string }) => void
}

export default class LoginView extends Component {

  state: { username: string, password: string }

  constructor(props: Props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          title="Login"
          onPress={this._handleLoginPress}
        />
      </View>
    )
  }

  _handleLoginPress = () => {
    const { username, password } = this.state
    this.props.onSubmit({ username, password })
  }
}

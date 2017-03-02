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
import TextField from 'react-native-md-textinput'


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
        <TextField
          label="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextField
          label="Password"
          secureTextEntry={true}
          value={this.state.password}
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

/**
 * View for Login.
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import FlatButton from '../components/FlatButton'
import TextField from 'react-native-md-textinput'


export type LoginViewProps = {
  success?: ?boolean,
  onSubmit: (username?: string, password?: string) => Promise<void>
}

type LoginViewState = {
  username: string,
  password: string
}

export default class LoginView extends Component {
  props: LoginViewProps
  state: LoginViewState

  static defaultProps = {
    onSubmit: async () => { }
  }

  constructor(props: LoginViewProps) {
    super(props)
    this.state = { username: '', password: '' }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          style={styles.formElement}
          label="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextField
          style={styles.formElement}
          label="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
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

  _handleLoginPress = () => {
    const { username, password } = this.state
    this.props.onSubmit(username, password)
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

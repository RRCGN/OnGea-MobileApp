/**
 * View for Login.
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ApiService from '../services/ApiService'
import { Button } from '../components/Button'
import { Colors } from '../utils/constants'


type LoginViewProps = {
  onSuccessfulLogin: (token: string) => void,
  navigation: any
}

type LoginViewState = {
  username: string,
  password: string,
  success: ?boolean,
  button: string
}

export default class LoginView extends Component {
  props: LoginViewProps
  state: LoginViewState

  static defaultProps = {
    onSubmit: async () => { }
  }

  constructor(props: LoginViewProps) {
    super(props)
    this.state = { username: '', password: '', success: null, button: 'idle' }
  }

  render() {
    const { success, button } = this.state
    const stateColor = this._getColorForSuccess(success)

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          style={styles.formElement}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.formElement}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          label="Login"
          backgroundColor={Colors.PRIMARY}
          color="white"
          style={styles.loginButton}
          onPress={this._handleLoginPress}
        />
        <Button
          label="Go to Website"
          backgroundColor="white"
          color={Colors.PRIMARY}
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate('Web')}
        />
      </View>
    )
  }

  _getColorForSuccess = (success) => {
    if (success == true) return 'green'
    else if (success == false) return 'red'
    else return undefined
  }

  _handleLoginPress = async () => {
    this.setState({ button: 'busy' })
    const { username, password } = this.state
    const { ok, token } = await ApiService.auth(username, password)
    this.setState({ success: ok })

    if (ok && token) {
      // Call onSuccessfulLogin from Navigator
      this.props.onSuccessfulLogin(token)
      this.setState({ button: 'success' })
    } else {
      this.setState({ button: 'idle' })
    }
  }
}


const styles = StyleSheet.create({
  formElement: {
    width: 200,
    height: 50,
    alignSelf: 'center'
  },
  loginButton: {
    width: 200,
    marginTop: 20
  }
})
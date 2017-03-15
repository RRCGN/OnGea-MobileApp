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
import ApiService from '../services/ApiService'
import FlatButton from '../components/FlatButton'
import AwesomeButton from 'react-native-awesome-button'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


type LoginViewProps = {
  onSuccessfulLogin: (token: string) => void
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        <View style={styles.button}>
          <AwesomeButton
            buttonState={button}
            label="Login"
            styles={styles.formElement}
            states={{
              idle: {
                text: 'Login',
                onPress: this._handleLoginPress,
                backgroundStyle: {
                  backgroundColor: 'blue'
                }
              },
              busy: {
                text: 'Login',
                spinner: true,
                spinnerProps: {
                  animated: true,
                  color: 'white'
                },
                backgroundStyle: {
                  backgroundColor: 'blue'
                }
              },
              success: {
                text: 'Logged in',
                icon: <MaterialIcon name="check-circle" color="white" />,
                iconAlignment: 'left',
                backgroundStyle: {
                  backgroundColor: 'blue'
                }
              }
            }}
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
  button: {
    marginTop: 20
  }
})

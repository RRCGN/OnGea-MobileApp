import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import ApiService from '../services/ApiService'
import { Button } from '../components/Button'
import { Colors } from '../utils/constants'

export default class LoginView extends Component {

  state = {
    username: '',
    password: '',
    success: false,
    button: '',
    message: ''
  }

  render() {
    const { button, message } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
        <View style={styles.messagesContainer}>
          <Text>{message}</Text>
        </View>
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
          <View style={styles.loginButtonContainer}>
            {button === 'busy'
            ? (<ActivityIndicator
              animating={this.state.visible}
              style={[styles.centering]}
              size="small"
              color={Colors.PRIMARY} />)
            : (<Button
                label="Login"
                backgroundColor={Colors.PRIMARY}
                color="white"
                style={styles.loginButton}
                onPress={this._handleLoginPress} />) }
          </View>
          <Button
            label="Go to Website"
            backgroundColor="white"
            color={Colors.PRIMARY}
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Web')} />}

      </View>
    )
  }

  _handleLoginPress = async () => {
    this.setState({ button: 'busy', message: '' })
    const { username, password } = this.state
    const { ok, token, logoutToken, message } = await ApiService.auth(username, password)
    this.setState({ success: ok })
    if (ok && token) {
      // Call onSuccessfulLogin from Navigator
      this.props.onSuccessfulLogin({token, logoutToken})
      this.setState({ button: 'success' })
    } else {
      this.setState({ button: 'idle', message: message})
    }
  }
}


const styles = StyleSheet.create({
  formElement: {
    width: 200,
    height: 50,
    alignSelf: 'center'
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

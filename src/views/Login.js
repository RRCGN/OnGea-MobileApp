import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from '../components/Button'
import PurgeStore from '../components/debug/PurgeStore'
import colors from '../utils/colors'

class Login extends Component {

  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  state = { username: '', password: '' }

  componentWillMount() {
    this.props.resetAuth()
  }

  componentWillReceiveProps (props) {
    const {logged, isLoggingFailed} = props.auth
    const {loadContent} = props
    // if (logged && isLoggingFailed) {
    //   loadContent()
    // }
  }

  handleLogin () {
    console.log('handleLogin')
    // this.props.resetAuth()
    const { username, password } = this.state
    // if (username == '' && password == '') return true
    this.props.login({username, password})
  }

  render() {
    console.log(this.props)
    const { success } = this.state
    const {navigation, auth} = this.props
    const {isLogging, message} = auth
    return (
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          {success
          ? (<ActivityIndicator
            animating={this.state.visible}
            style={[styles.centering]}
            size="small"
            color={colors.primaryGreen} />)
          : (<Text style={styles.messagesErrorText}>{message}</Text>) }
        </View>
        <View style={isLogging ? {opacity: 0.5} : {}}>
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
        </View>
          <View style={styles.loginButtonContainer}>
            {isLogging
            ? (<ActivityIndicator
              animating={this.state.visible}
              style={[styles.centering]}
              size="small"
              color={colors.primaryGreen} />)
            : success
              ? (<Text style={styles.messagesSuccessText}>login success!</Text>)
              : (<Button
                  label="Login"
                  backgroundColor={colors.primaryGreen}
                  color="white"
                  style={styles.loginButton}
                  onPress={this.handleLogin} />)}
          </View>
          <Button
            label="Go to Website"
            backgroundColor="white"
            color={colors.primaryGreen}
            style={styles.loginButton}
            onPress={() => navigation.navigate('WebApp')} />
            <View style={{height: 100} /* adjust bottom */} />
      </View>
    )
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
  content: PropTypes.object,
  auth: PropTypes.object,
  resetAuth: PropTypes.func,
  login: PropTypes.func,
  loadContent: PropTypes.func
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayLight
  },
  formElement: {
    width: 200,
    height: 50,
    alignSelf: 'center'
  },
  messagesContainer:{
    height: 20
  },
  messagesErrorText: {
    color: colors.red
  },
  messagesSuccessText: {
    color: colors.green
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


import { connect } from 'react-redux'

const mapStateToProps = state => ({
  agreement: state.agreement,
  auth: state.auth,
  content: state.content
})

import { login, resetAuth, loadContent } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  login: (props) => { dispatch(login(props)) },
  resetAuth: (props) => { dispatch(resetAuth(props)) },
  loadContent: (props) => { dispatch(loadContent(props)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ToolbarButton from '../components/ToolbarButton'
import SignupForm from '../subviews/SignupForm'
const formData = require('../api-data-structure/signupForm.json')

class Settings extends Component {
  static propTypes = {
    logout: PropTypes.func,
    flushContent: PropTypes.func
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerLeft: (
        <ToolbarButton
          androidIcon="arrow-back"
          iosIcon="ios-arrow-back"
          onPress={() => navigation.goBack(null)} /> )
    }
  }

  handleLogout() {
    this.props.logout()
    this.props.flushContent()
  }

  render() {
    return (
      <SignupForm formData={formData}/>
    )
  }
}

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  auth: state.auth
})

import { logout, flushContent } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  logout: (props) => { dispatch(logout(props)) },
  flushContent: (props) => { dispatch(flushContent(props)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)

import React from 'react'
import { StatusBar, View } from 'react-native'
import SplashScreen from 'rn-splash-screen'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAgreementVersion } from '../redux/ducks/agreement'

import AgreementAcceptance from './AgreementAcceptance'
import LoginNavigation from '../navigations/LoginNavigation'
import MainNavigation from '../navigations/MainNavigation'

import agreement from '../strings/agreements.json'

class Root extends React.PureComponent {
  static propTypes = {
    isAgreementAccepted: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setAgreementVersion: PropTypes.func.isRequired
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  handleAgree = () => {
    this.props.setAgreementVersion(agreement.version)
  }

  renderMain = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.props.isLoggedIn ? <MainNavigation /> : <LoginNavigation />}
      </View>
    )
  }

  renderAgreement = () => {
    return (
      <AgreementAcceptance
        agreements={agreement.items}
        onAgree={this.handleAgree}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        {this.props.isAgreementAccepted
          ? this.renderMain()
          : this.renderAgreement()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isAgreementAccepted: state.agreement.acceptedVersion === agreement.version,
  isLoggedIn: !!state.auth.token
})

const mapDispatchToProps = {
  setAgreementVersion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

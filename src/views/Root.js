import React from 'react'
import { StatusBar, View } from 'react-native'
import SplashScreen from 'rn-splash-screen'
import PropTypes from 'prop-types'

import AgreementAcceptenceView from './AgreementAcceptence'
import LoginNavigation from '../navigations/LoginNavigation'
import MainTabNavigation from '../navigations/MainTabNavigation'

import fileHash from '../utils/fileHash'

const agreementText = require('../strings/agreements.json')
const agreementtextFingerprint = fileHash(agreementText)

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.agreementAcceptHandler = this.agreementAcceptHandler.bind(this)
  }

  state = {
    appLoaded: true,
    agreementAccepted: false
  }

  componentDidMount () {
    this.checkAgreementAcceptance()
  }

  checkAgreementAcceptance () {
    this.setState({
      appLoaded: true,
      agreementAccepted: this.props.agreement.textFingerprint == agreementtextFingerprint
    })
    SplashScreen.hide()
  }

  agreementAcceptHandler () {
    this.props.acceptAgreement(agreementtextFingerprint)
    this.setState({agreementAccepted: true})
  }

  render() {
    const { appLoaded, agreementAccepted } = this.state
    const { auth } = this.props
    if (appLoaded) {
      return (
        <View style={{flex: 1}}>
             <StatusBar
               backgroundColor="blue"
               barStyle="light-content"
             />
          { agreementAccepted
            ? ( <View style={{flex: 1}}>
                  { auth.logged
                    ? ( <MainTabNavigation />)
                    : ( <LoginNavigation /> ) }
                </View> )
            : ( <AgreementAcceptenceView
                  agreementText={agreementText}
                  hash={fileHash(agreementText)}
                  agreementAcceptHandler = {this.agreementAcceptHandler} />
              )}
        </View>
      )
    } else {
      return <View />
    }
  }
}

Root.propTypes = {
  agreement: PropTypes.object,
  auth: PropTypes.object,
  acceptAgreement: PropTypes.func
}
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  agreement: state.agreement,
  auth: state.auth
})

import { acceptAgreement } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  acceptAgreement: (props) => { dispatch(acceptAgreement(props)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)

import React from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import RootView from './views/RootView'
import AgreementAcceptenceView from './views/AgreementAcceptenceView'
import SplashScreen from 'rn-splash-screen'
import fileHash from './utils/fileHash'
const agreementText = require('./strings/agreements.json')
const AGREEMENT_KEY = '@Agreement:textFingerprint'
const agreement_fingerprint = fileHash(agreementText)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.agreementAcceptHandler = this.agreementAcceptHandler.bind(this)
  }
  state = { loaded: false, agreementAccepted: true }
  componentDidMount() {
    this.checkAgreement()
  }

  checkAgreement = async () => {
    await AsyncStorage.getItem(AGREEMENT_KEY)
      .then((item) => {
        if (item === agreement_fingerprint) {
          this.loadApp()
        } else {
          this.agreementNotAccepted()
          this.loadApp()
        }
      }
    )
  }

  loadApp() {
    SplashScreen.hide()
    this.setState({ loaded: true })
  }

  agreementNotAccepted() {
    this.setState({agreementAccepted: false})
  }

  agreementAcceptHandler = async() => {
    await AsyncStorage.setItem(AGREEMENT_KEY, agreement_fingerprint, () => {
      this.setState({ agreementAccepted: true })
    })
  }

  render() {
    const { agreementAccepted } = this.state
    return (
      agreementAccepted
        ? <RootView />
        : <AgreementAcceptenceView agreementText={agreementText} hash={fileHash(agreementText)} agreementAcceptHandler = {this.agreementAcceptHandler} /> )
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Behaviour of screenProps has changed',
  'Warning: isMounted(...) is deprecated',
  'You should only render one navigator explicitly' // check the comment bellow
]

// in relation to rendering navigation issue, check the link - later should be implemented
// https://reactnavigation.org/docs/en/common-mistakes.html#explicitly-rendering-more-than-one-navigator



export default App

import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../ButtonText'

class DebugBoard extends Component {
  static propTypes = { state: PropTypes.object }

  debugStore() {
    const { state } = this.props
    console.log(state)
  }

  render() {
    return (
      <View>
        <Button label='Debug Store' onPress={() => {this.debugStore()}} />
      </View>
    )
  }
}


DebugBoard.propTypes = { logout: PropTypes.func }

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  state: state
})

import { logout } from '../../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  logout: (props) => { dispatch(logout(props)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(DebugBoard)

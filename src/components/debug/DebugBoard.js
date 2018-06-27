import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../ButtonText'

class DebugBoard extends Component {
  static propTypes = { state: PropTypes.object }

  debugStore() {
    const { state } = this.props
    console.log(state)
  }
  loadContent () {
    this.props.loadContent()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Button label='Debug Store' onPress={() => {this.debugStore()}} />
        </View>
        <View style={styles.block}>
          <Text>isLoaded: {this.props.state.content.isLoaded ? 'true' : 'false'} </Text>
          <Text>isLoading: {this.props.state.content.isLoading ? 'true' : 'false'} </Text>
          <Button label='Load Data from Api' onPress={() => {this.loadContent()}} />
        </View>
      </View>
    )
  }
}


DebugBoard.propTypes = { logout: PropTypes.func, loadContent: PropTypes.func }
const styles = {
  container: {
    margin: 30,
    justifyContent: 'center',
    backgroundColor: '#EEEEEE'
  },
  block: {
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#191919'
  }
}
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  state: state
})

import { logout, loadContent } from '../../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  logout: (props) => { dispatch(logout(props)) },
  loadContent: (props) => { dispatch(loadContent(props)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(DebugBoard)

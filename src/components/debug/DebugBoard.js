import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from '../ButtonText'

class DebugBoard extends Component {
  static propTypes = {
    state: PropTypes.object
  }

  debugStore = () => {
    console.log(this.props.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Button label="Debug Store" onPress={this.debugStore} />
        </View>
      </View>
    )
  }
}

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

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(DebugBoard)

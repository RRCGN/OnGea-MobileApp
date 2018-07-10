import React from 'react'
import { View, Text } from 'react-native'
import ProgressIcon from '../../components/ProgressIcon'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.changeSomething = this.changeSomething.bind(this)
  }
  state = {
    counter: 1
  }
  changeSomething () {
    console.log(this.state.counter)
    this.setState({counter: this.state.counter + 1})
  }

  increase () {
    let i
    for(i = 0; i < 100; i++) {
      setTimeout(() => {
        this.changeSomething()
      }, 1000)
    }
  }
  render () {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text>title</Text>
          </View>
          <View style={styles.iconContainer}>
            <ProgressIcon currentValue={1} totalValue={10} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {},
  header: {
    flexDirection: 'row'
  },
  iconContainer: {
    height: 100,
    width: 100,
    flex: 0,
    backgroundColor: 'pink'
  },
  titleContainer: {
    flex: 1
  }
}

export default SignupForm

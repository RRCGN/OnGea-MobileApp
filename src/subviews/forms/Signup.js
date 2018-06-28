import React from 'react'
import { View, Text } from 'react-native'

class SignupForm extends React.Component {
  render () {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text>title</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>icon</Text>
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
    flex: 0
  },
  titleContainer: {
    flex: 1
  }
}

export default SignupForm

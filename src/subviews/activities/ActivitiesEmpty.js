import React from 'react'
import { Image, Text ,View } from 'react-native'
const pullDownImage = require('../../assets/pull-down.png')

const Activity = () => (
  <View style={styles.container}>
    <Image
      style={ styles.image }
      source={pullDownImage} />
      <Text>no actitivity is available</Text>
      <Text>pull down to refresh</Text>
  </View>
)

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4
  },
  image: {
    padding: 40,
    margin: 30,
    width: 20,
    height: 20
  }
}
export default Activity

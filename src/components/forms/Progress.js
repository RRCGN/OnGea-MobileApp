import React from 'react'
import { View, Text } from 'react-native'

type props = {
  current: String,
  total: String
}
const Progress = ({current, total}: props) => (
  <View>
    <Text>{`${current}/${total}`}</Text>
  </View>
)

export default Progress

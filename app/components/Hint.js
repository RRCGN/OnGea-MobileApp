/**
 * Hint Component for displaying some urgent informations
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


type HintProps = {
  icon?: ReactElement<*>,
  text: string,
  onPress: () => void
}

const Hint = ({ icon, text, onPress = () => { } }: HintProps) => (
  <View style={{ flex: 1, position: 'relative' }}>
    <Text>{text}</Text>
  </View>
)

export default Hint


const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  }
})

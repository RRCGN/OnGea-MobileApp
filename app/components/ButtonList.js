/**
 * A list of Buttons in a Row.
 * With correct spaces and ability to align the list.
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'


type Props = {
  children: Array<ReactElement<*>>,
  justifyContent?:
    | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
}

const ButtonList = ({ justifyContent = 'flex-end', children }: Props) => (
  <View style={[ styles.container, { justifyContent } ]}>
    {React.Children.map(children, (child, i) => (
      <View key={i} style={styles.item}>{child}</View>
    ))}
  </View>
)

export default ButtonList


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: -4,
    marginRight: -4
  },
  item: {
    marginRight: 4,
    marginLeft: 4
  }
})

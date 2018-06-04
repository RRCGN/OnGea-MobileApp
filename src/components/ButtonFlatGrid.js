/**
 * Flat Buttons in a grid have some negative margins.
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Row } from './Layout'


type Props = {
  children: Array<ReactElement<*>>
}

const ButtonFlatGrid = ({ children }: Props) => (
  <Row style={styles.row}>
    {React.Children.map(children, (child, i) => (
      <View key={i} style={styles.item}>{child}</View>
    ))}
  </Row>
)

export default ButtonFlatGrid


const styles = StyleSheet.create({
  row: {
    marginLeft: -8,
    marginRight: -8,
    marginBottom: -4,
    marginTop: -4,
    justifyContent: 'flex-end'
  },
  item: {
    marginRight: 4,
    marginLeft: 4
  }
})

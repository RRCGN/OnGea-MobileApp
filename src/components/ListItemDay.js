/**
 * 
 * @flow
 */

import React from 'react'
import moment from 'moment'
import { Row, Column, Flex } from './Layout'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/constants'


type Props = {
  primary: string,
  secondary: string
}


const ListItemDay = ({ primary, secondary }: Props) => {
  return (
    <Row flex={0} style={styles.container}>
      <Flex>
        <Text style={styles.light_p}>{primary}</Text>
        <Text style={styles.light_s}>{secondary}</Text>
      </Flex>
    </Row>
  )
}

export default ListItemDay


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#7B1FA2'
  },
  dark_s: {
    fontSize: 12,
    color: Colors.DARK_SECONDARY
  },
  dark_p: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARK_PRIMARY
  },
  light_s: {
    fontSize: 12,
    color: Colors.LIGHT_SECONDARY
  },
  light_p: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LIGHT_PRIMARY
  },
})

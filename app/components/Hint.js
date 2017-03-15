/**
 * Hint Component for displaying some urgent informations
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


type HintProps = {
  type?: 'nice' | 'warning' | 'alert',
  icon?: ReactElement<*>,
  text: string,
  onPress: () => void
}

const Hint = ({ type = 'nice', icon, text, onPress = () => { } }: HintProps) => (
  <View style={[ styles.container, styles[`container_${type}`] ]}>
    {icon &&
      <View style={styles.icon}>{icon}</View>
    }
    <Text style={styles.text}>{text}</Text>
  </View>
)

export default Hint


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    padding: 12
  },
  container_nice: {
    backgroundColor: '#8BC34A'
  },
  container_warning: {
    backgroundColor: '#FFC107'
  },
  container_alert: {
    backgroundColor: '#F44336'
  },
  text: {
    flex: 1,
    color: 'white'
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 12
  }
})

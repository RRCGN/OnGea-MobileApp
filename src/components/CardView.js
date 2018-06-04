/**
 * Card. Simply a plain card.
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Colors } from '../utils/constants'


type Props = {
  children: Array<ReactElement<*>>
}

const CardView = ({ children }: Props) => (
  <View style={styles.card}>{children}</View>
)

export default CardView


const styles = StyleSheet.create({
  card: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.18,
        shadowRadius: 1.4,
        shadowOffset: {
          height: 1
        }
      },
      android: {
        elevation: 2
      }
    }),
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderRadius: 2
  }
})

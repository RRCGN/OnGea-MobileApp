/**
 * Card. Simply a plain card.
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'


type CardProps = {
  children: Array<ReactElement<*>>
}

const Card = ({ children }: CardProps) => (
  <View style={styles.card}>{children}</View>
)

export default Card


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
    backgroundColor: 'white',
    borderRadius: 2
  }
})

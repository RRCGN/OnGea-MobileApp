/**
 * Title on a Inset Shadow.
 * Has a big Title and maybe a smaller Subtitle.
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


type Props = {
  title: string,
  subtitle?: ?string
}

const TitleOnShadow = ({ title, subtitle }: Props) => (
  <LinearGradient
    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
    style={styles.overlay}
  >
    <Text style={[styles.text, styles.title]}>{title}</Text>
    {subtitle && <Text style={[styles.text, styles.subtitle]}>{subtitle}</Text>}
  </LinearGradient>
)

export default TitleOnShadow


const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 24
  },
  subtitle: {
    fontSize: 14
  },
})

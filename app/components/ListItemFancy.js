/**
 * TripDate Shows Time, Location and Icon for a Travel
 * @flow
 */

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../utils/constants'


type Props = {
  primary: string,
  secondary: string,
  icon?: string,
  isLinked?: boolean
}

const ListItemFancy = ({ primary, secondary, icon, isLinked = false }: Props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.iconContainer}>
        {icon && <Icon name={icon} style={styles.icon} size={24} />}
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.primary}>{primary}</Text>
      <Text style={styles.secondary}>{secondary}</Text>
    </View>
    {isLinked &&
      <Image source={require('../assets/dots.png')} style={styles.dots} />
    }
  </View>
)

export default ListItemFancy


const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    position: 'relative',
    height: 72,
    alignItems: 'center'
  },
  right: {
    marginLeft: 32
  },
  left: {
    width: 24,
    flex: 0,
    justifyContent: 'center'
  },
  iconContainer: {
    width: 24,
    height: 24
  },
  icon: {
    color: Colors.DARK_TERTIARY
  },
  primary: {
    color: Colors.DARK_PRIMARY
  },
  secondary: {
    color: Colors.DARK_SECONDARY
  },
  dots: {
    position: 'absolute',
    top: 54,
    left: 8,
    width: 8,
    height: 36,
    zIndex: 2,
    opacity: 0.38
  }
})

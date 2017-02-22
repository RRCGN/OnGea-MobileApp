/**
 * Button for use in Toolbar.
 * @flow
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import TouchableItem from 'react-navigation/src/views/TouchableItem'
import PlatformIcon from './PlatformIcon'


type Props = {
  androidIcon: string,
  iosIcon: string,
  floating?: boolean,
  onPress?: () => void
}

const ToolbarButton = ({
  androidIcon,
  iosIcon,
  floating = false,
  onPress = () => { }
}: Props) => {
  return (
    <TouchableItem
      onPress={onPress}
      delayPressIn={0}
      style={styles.container}
      borderless
    >
      <View style={styles.container}>
        <PlatformIcon
          androidIcon={androidIcon}
          iosIcon={iosIcon}
          size={24}
          color="white"
          style={[styles.icon, floating && styles.floating]}
        />
      </View>
    </TouchableItem>
  )
}

export default ToolbarButton


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 6
  },
  floating: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 1 }
  }
})

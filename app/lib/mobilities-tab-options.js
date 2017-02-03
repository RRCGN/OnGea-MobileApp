/**
 *
 * @flow
 */

import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MobilitiesTabButton from '../components/MobilitiesTabButton'

export default function({ title }) {
  return {
    title,
    tabBar: {
      label: 'Mobilities',
      icon: ({ tintColor, focused }) => (
        <MobilitiesTabButton tintColor={tintColor} focused={focused} />
      )
    }
  }
}

/**
 * Lists Buttons in a row
 */

import React from 'react'
import { View } from 'react-native'

const ButtonList = ({ children }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      {children}
    </View>
  )
}

export default ButtonList

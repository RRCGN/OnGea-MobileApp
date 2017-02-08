/**
 * Lists Buttons in a row
 */

import React from 'react'
import { View } from 'react-native'

const ButtonList = ({ justifyContent, children }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent }}>
      {children}
    </View>
  )
}

ButtonList.defaultProps = {
  justifyContent: 'flex-end'
}

export default ButtonList

/**
 * Lists Buttons in a row
 * @flow
 */

import React from 'react'
import { View } from 'react-native'


type Props = {
  children: ReactElement<*>,
  justifyContent?:
    | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
}

const ButtonList = ({ justifyContent = 'flex-end', children }: Props) => (
  <View style={{ flexDirection: 'row', justifyContent }}>
    {children}
  </View>
)

export default ButtonList

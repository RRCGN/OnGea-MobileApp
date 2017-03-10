/**
 * A list of Buttons in a Row.
 * With correct spaces and ability to align the list.
 * @flow
 */

import React from 'react'
import { View } from 'react-native'


type Props = {
  children: Array<ReactElement<*>>,
  justifyContent?:
    | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
}

const ButtonList = ({ justifyContent = 'flex-end', children }: Props) => (
  <View style={{ flexDirection: 'row', justifyContent }}>
    {React.Children.map(children, (child, i) => (
      <View key={i} style={{ marginRight: 8 }}>{child}</View>
    ))}
  </View>
)

export default ButtonList

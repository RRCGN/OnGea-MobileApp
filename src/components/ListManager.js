/**
 *
 * @flow
 */

import React from 'react'
import { View } from 'react-native'


// FIXME: `renderItem: any` should be something like `(any, number) => void`
type Props = {
  items: Array<any>,
  renderItem: any
}

const ListManager = ({ items, renderItem }: Props) => (
  <View>
    {items.map(renderItem)}
  </View>
)

export default ListManager

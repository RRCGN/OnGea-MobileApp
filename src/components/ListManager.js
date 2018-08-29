import React from 'react'
import { View } from 'react-native'

// The idea was that each Item has a style applied to it, but, well...

const ListManager = ({ items, renderItem }) => (
  <View>
    {items.map(renderItem)}
  </View>
)

export default ListManager

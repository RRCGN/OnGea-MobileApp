/**
 *
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import { Colors } from '../utils/constants'


const SectionSeperator = () => (
  <View style={{
    flex: 1,
    marginLeft: 56,
    marginRight: -16,
    height: 1,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: Colors.DARK_DIVIDER
  }} />
)

export default SectionSeperator

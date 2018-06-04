/**
 *
 * @flow
 */

import React, { Element } from 'react'
import { View } from 'react-native'


type FlexProps = {
  children?: ReactElement<*>,
  flex?: number,
  style?: any
}


const Flex = ({ flex = 1, style, children }: FlexProps) => (
  <View style={[ { flex }, style ]}>{children}</View>
)

const Row = ({ flex = 1, style, children }: FlexProps) => (
  <View style={[ { flex, flexDirection: 'row' }, style ]}>
    {children}
  </View>
)

const Column = ({ flex = 1, style, children }: FlexProps) => (
  <View style={[ { flex, flexDirection: 'column' }, style ]}>
    {children}
  </View>
)


export { Flex, Row, Column }

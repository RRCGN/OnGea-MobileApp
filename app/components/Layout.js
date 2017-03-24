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

type RowColumnProps = {
  children?: ReactElement<*>,
  style?: any,
  props: FlexProps
}

type DirectionProps = {
  children?: ReactElement<*>,
  type: 'row' | 'column',
  style?: any,
  props: FlexProps
}


const Flex = ({ children, flex = 1, style }: FlexProps) => (
  <View style={[ { flex }, style ]}>{children}</View>
)

const Direction = ({ children, type, style, ...props }: DirectionProps) => (
  <Flex style={[ { flexDirection: type }, style ]} {...props}>
    {children}
  </Flex>
)

const Row = ({ children, ...props }: RowColumnProps) => (
  <Direction type="row" {...props}>{children}</Direction>
)

const Column = ({ children, ...props }: RowColumnProps) => (
  <Direction type="row" {...props}>{children}</Direction>
)


export { Flex, Row, Column }

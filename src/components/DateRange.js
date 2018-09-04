/**
 * Component to display a date with some text above it.
 * @flow
 */

import React from 'react'
import moment from 'moment'
import { Row, Column, Flex } from './Layout'
import { View, Text, StyleSheet } from 'react-native'
import { Trans } from '@lingui/react'
import { Colors } from '../utils/constants'

type Props = {
  from: string,
  to?: string,
  light?: boolean
}

const DateRange = ({ from, to, light = false }: Props) => {
  const secondary = light ? styles.light_s : styles.dark_s
  const primary = light ? styles.light_p : styles.dark_p

  return (
    <Row flex={0}>
      <Flex>
        <Text style={secondary}>
          {to ? (
            <Trans id="date-from">from</Trans>
          ) : (
            <Trans id="date-on">on</Trans>
          )}
        </Text>
        <Text style={primary}>{from}</Text>
      </Flex>
      {to && (
        <Flex>
          <Text style={secondary}>
            <Trans id="date-to">to</Trans>
          </Text>
          <Text style={primary}>{to}</Text>
        </Flex>
      )}
    </Row>
  )
}

export default DateRange

const styles = StyleSheet.create({
  dark_s: {
    fontSize: 12,
    color: Colors.DARK_SECONDARY
  },
  dark_p: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARK_PRIMARY
  },
  light_s: {
    fontSize: 12,
    color: Colors.LIGHT_SECONDARY
  },
  light_p: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LIGHT_PRIMARY
  }
})

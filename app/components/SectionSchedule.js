/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import OGRecentData from '../containers/OGRecentData'
import Section from './Section'
import { Button, ButtonList } from './Button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const SectionStay = ({ recentIndex, data }) => {
  const {
    name,
    dateFrom,
    dateTo
  } = data[recentIndex]

  return (
    <Section title="Nächste Veranstaltung">
      <Text>{name}</Text>
      <Text>{dateFrom}, {dateTo}</Text>
      <ButtonList>
        <Button label="Zeitplan" />
      </ButtonList>
    </Section>
  )
}

export default OGRecentData(SectionStay)


const styles = StyleSheet.create({
  primary: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

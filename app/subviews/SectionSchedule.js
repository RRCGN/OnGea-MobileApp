/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../Section'
import { Button, ButtonList } from '../Button'


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

export default findMostRecentData(SectionStay)


const styles = StyleSheet.create({
  primary: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

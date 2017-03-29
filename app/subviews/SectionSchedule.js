/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import ListItemStandard from '../components/ListItemStandard'


const SectionStay = ({ recentIndex, data }) => {
  const {
    name,
    dateFrom,
    dateTo
  } = data[recentIndex]

  const dateFromString = moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]')
  const dateToString = moment(dateTo).format('HH:MM [Uhr]')

  return (
    <Section title="Nächste Veranstaltung">
      <ListItemStandard
        primary={name}
        secondary={`${dateFromString} bis ${dateToString}`}
      />
      <ButtonFlatGrid>
        <Button label="Zeitplan" />
      </ButtonFlatGrid>
    </Section>
  )
}

export default findMostRecentData(SectionStay)

/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import ListItemStandard from '../components/ListItemStandard'


const SectionShortSchedule = ({ recentIndex, data, footer }) => {
  const {
    name,
    dateFrom,
    dateTo
  } = data[recentIndex]

  const dateFromString = moment(dateFrom).format('DD.MM.YYYY, HH:mm')
  const dateToString = dateTo ? moment(dateTo).format('HH:mm') : null

  return (
    <Section title="Next Event">
      <ListItemStandard
        primary={name}
        secondary={dateFromString + (dateToString && ` – ${dateToString}`)}
      />
      {footer}
    </Section>
  )
}

export default findMostRecentData(SectionShortSchedule)

/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'


const SectionShortStay = ({ recentIndex, data, footer, noBorder = false }) => {
  const {
    name,
    street,
    zip,
    town,
    country,
    room,
    dateFrom,
    dateTo
  } = data[recentIndex]

  const items = [
    {
      primary: `${name}, Zimmer ${room}`,
      secondary: `${street}, ${zip} ${town}, ${country}`,
      icon: 'home'
    },
    {
      primary: moment(dateFrom).format('DD.MM.YYYY, hh:mm [Uhr]'),
      secondary: 'Check In',
      icon: 'arrow-right-bold'
    },
    {
      primary: moment(dateTo).format('DD.MM.YYYY, hh:mm [Uhr]'),
      secondary: 'Check Out',
      icon: 'arrow-left-bold'
    }
  ]

  return (
    <Section title="Unterkunft" noBorder={noBorder}>
      <ListManager
        items={items}
        renderItem={(item, i) => (
          <ListItemFancy
            key={i}
            primary={item.primary}
            secondary={item.secondary}
            icon={item.icon}
          />
        )}
      />
      {footer}
    </Section>
  )
}

export default findMostRecentData(SectionShortStay)

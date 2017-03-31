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


const SectionShortStay = ({ recentIndex, data, footer, noBorder = false, navigation }) => {
  const {
    name,
    street,
    zip,
    town,
    country,
    room,
    dateFrom,
    dateTo,
    location
  } = data[recentIndex]

  const items = [
    {
      primary: `${name}, Zimmer ${room}`,
      secondary: `${street}, ${zip} ${town}, ${country}`,
      icon: 'home',
      location
    },
    {
      primary: moment(dateFrom).format('DD.MM.YYYY, HH:mm'),
      secondary: 'Check In',
      icon: 'arrow-right-bold'
    },
    {
      primary: moment(dateTo).format('DD.MM.YYYY, HH:mm'),
      secondary: 'Check Out',
      icon: 'arrow-left-bold'
    }
  ]

  return (
    <Section title="Accomodation" noBorder={noBorder}>
      <ListManager
        items={items}
        renderItem={(item, i) => (
          <ListItemFancy
            key={i}
            primary={item.primary}
            secondary={item.secondary}
            icon={item.icon}
            onPress={item.location && (() => navigation.navigate('Map', item))}
          />
        )}
      />
      {footer}
    </Section>
  )
}

export default findMostRecentData(SectionShortStay)

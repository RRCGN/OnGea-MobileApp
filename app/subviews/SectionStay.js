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
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'


const SectionStay = ({ recentIndex, data }) => {
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
      primary: moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]'),
      secondary: 'Check In',
      icon: 'arrow-right-bold'
    },
    {
      primary: moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]'),
      secondary: 'Check Out',
      icon: 'arrow-left-bold'
    }
  ]

  return (
    <Section title="Unterkunft">
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
      <ButtonFlatGrid>
        <Button label="Mehr" />
      </ButtonFlatGrid>
    </Section>
  )
}

export default findMostRecentData(SectionStay)

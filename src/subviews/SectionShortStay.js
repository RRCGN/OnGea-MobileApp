/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'


const SectionShortStay = ({ recentIndex, stays, footer, noBorder = false, navigation }) => {
  const getStayscontent = () => {
    return (stays[0])
  }
  const {
    event,
    // street,
    // zip,
    // town,
    // country,
    roomNumber,
    dateFrom,
    dateTo,
    location
  } = getStayscontent()

  const items = [
    {
      primary: `${event}, Zimmer ${roomNumber}`,
      secondary: 'ADRESS',
      icon: 'home',
      location: `lat: ${location.lat} - ${location.lng}`
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
    <Section title="Stays" noBorder={noBorder}>
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

export default SectionShortStay

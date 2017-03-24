/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import findMostRecentData from '../containers/recent-data'
import Section from '../Section'
import { Button, ButtonList } from '../Button'
import { List, ListItem } from '../List'


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

  return (
    <Section title="Unterkunft">
      <List>
        <ListItem
          primary={`${name}, Zimmer ${room}`}
          secondary={`${street}, ${zip} ${town}, ${country}`}
          icon="home"
        />
      </List>
      <List narrow>
        <ListItem
          primary={moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary="Check In"
          icon="arrow-right-bold"
        />
        <ListItem
          primary={moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary="Check Out"
          icon="arrow-left-bold"
        />
      </List>
      <ButtonList>
        <Button label="Mehr" />
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

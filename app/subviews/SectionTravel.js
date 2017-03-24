/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../Section'
import { List, ListItem } from '../List'
import { Button, ButtonList } from '../Button'


const SectionTravel = ({ recentIndex, data }) => {
  const {
    type,
    number,
    dateFrom,
    dateTo,
    origin: { locationName: from },
    destination: { locationName: to }
  } = data[recentIndex]

  const typeLocalization = {
    FLIGHT: 'Nächster Flug',
    TRAIN: 'Nächster Zug',
    OTHER: 'Nächste Reise'
  }

  const icons = {
    FLIGHT: [ 'airplane-takeoff', 'airplane-landing' ],
    TRAIN: [ 'train', 'train' ],
    OTHER: [ 'home', 'flag-triangle' ]
  }

  return (
    <Section title={typeLocalization[type] + (!!number ? `: ${number}` : '')}>
      <List>
        <ListItem
          primary={moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary={from}
          icon={icons[type][0]}
        />
        <ListItem
          primary={moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary={to}
          icon={icons[type][1]}
        />
      </List>
      <ButtonList>
        <Button label="Mehr" />
      </ButtonList>
    </Section>
  )
}

export default findMostRecentData(SectionTravel)

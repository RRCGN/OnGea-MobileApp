/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import Button from '../components/ButtonText'
import ButtonFlatGrid from '../components/ButtonFlatGrid'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'


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

  const items = [
    {
      date: moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]'),
      location: from,
      icon: icons[type][0]
    },
    {
      date: moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]'),
      location: to,
      icon: icons[type][1]
    }
  ]

  return (
    <Section title={typeLocalization[type] + (!!number ? `: ${number}` : '')}>
      <ListManager
        items={items}
        renderItem={(item, i) => (
          <ListItemFancy
            key={i}
            primary={item.date}
            secondary={item.location}
            icon={item.icon}
            isLinked={i === 0}
          />
        )}
      />
      <ButtonFlatGrid>
        <Button label="Mehr" />
      </ButtonFlatGrid>
    </Section>
  )
}

export default findMostRecentData(SectionTravel)

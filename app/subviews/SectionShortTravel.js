/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'


const SectionShortTravel = ({ recentIndex, data, footer, noBorder }) => {
  const {
    type,
    number,
    dateFrom,
    dateTo,
    origin: { locationName: from },
    destination: { locationName: to }
  } = data[recentIndex]

  const typeLocalization = {
    FLIGHT: 'Next Flight',
    TRAIN: 'Next Trail',
    OTHER: 'Next Trip'
  }

  const icons = {
    FLIGHT: [ 'airplane-takeoff', 'airplane-landing' ],
    TRAIN: [ 'train', 'train' ],
    OTHER: [ 'home', 'flag-triangle' ]
  }

  const items = [
    {
      date: moment(dateFrom).format('DD.MM.YYYY, hh:mm'),
      location: from,
      icon: icons[type][0]
    },
    {
      date: moment(dateTo).format('DD.MM.YYYY, hh:mm'),
      location: to,
      icon: icons[type][1]
    }
  ]

  return (
    <Section title={typeLocalization[type] + (!!number ? `: ${number}` : '')} noBorder={noBorder}>
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
      {footer}
    </Section>
  )
}

export default findMostRecentData(SectionShortTravel)

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'

const SectionShortTravel = ({ travelIndex, data, footer, noBorder }) => {
  const travelData = data.filter( (travel) => (travel.id === travelIndex))
  // const {
  //   dateFrom,
  //   dateTo,
  //   type,
  //   id,
  //   fromCountry,
  //   toCountry
  // } = data[recentIndex]

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
  //
  // const items = [
  //   {
  //     date: moment(dateFrom).format('DD.MM.YYYY, HH:mm'),
  //     location: fromCountry,
  //     icon: icons['FLIGHT'][0] // this should be implemented
  //   },
  //   {
  //     date: moment(dateTo).format('DD.MM.YYYY, HH:mm'),
  //     location: toCountry,
  //     icon: icons['FLIGHT'][1] // this should be implemented
  //   }
  // ]

  return (
    <View />
  )

  returns (
    <Section title={typeLocalization[type] + (!!id ? `: ${id}` : '')} noBorder={noBorder}>
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

export default SectionShortTravel

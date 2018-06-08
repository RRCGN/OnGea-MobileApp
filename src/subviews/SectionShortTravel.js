import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import findMostRecentData from '../containers/recent-data'
import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'

const SectionShortTravel = ({ travelIndex, mobilities, footer, noBorder }) => {
  const getMobilitiesContent = () => {
    return mobilities
  }

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

  return (
    <Section title={typeLocalization['TRAIN'][0]} noBorder={noBorder}>
      <ListManager
        items={getMobilitiesContent()}
        renderItem={(item, i) => (
          <ListItemFancy
            key={i}
            primary={moment(item.dateFrom).format('DD.MM.YYYY')}
            secondary={item.fromCountry}
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

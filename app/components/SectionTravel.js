/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import OGRecentData from '../containers/OGRecentData'
import Section from './Section'
import OGTravelDate from './OGTravelDate'
import OGTravelDateList from './OGTravelDateList'
import OGTextButton from './OGTextButton'
import ButtonList from './ButtonList'


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
      <OGTravelDateList>
        <OGTravelDate
          primary={moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary={from}
          icon={icons[type][0]}
        />
        <OGTravelDate
          primary={moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary={to}
          icon={icons[type][1]}
        />
      </OGTravelDateList>
      <ButtonList>
        <OGTextButton label="Mehr" />
      </ButtonList>
    </Section>
  )
}

export default OGRecentData(SectionTravel)

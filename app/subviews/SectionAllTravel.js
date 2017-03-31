/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'
import SectionSeperator from '../components/SectionSeperator'


const SectionAllTravel = ({ data }) => {
  const icons = {
    FLIGHT: [ 'airplane-takeoff', 'airplane-landing' ],
    TRAIN: [ 'train', 'train' ],
    OTHER: [ 'home', 'flag-triangle' ]
  }

  console.log(data)

  return (
    <Section title="Travels">
      <ListManager
        items={data}
        renderItem={(item, i) => (
          <View key={i}>
            <ListItemFancy
              primary={moment(item.dateFrom).format('DD.MM.YYYY, HH:mm')}
              secondary={`${item.number}, ${item.origin.locationName}`}
              icon={icons[item.type][0]}
              isLinked
            />
            <ListItemFancy
              primary={moment(item.dateTo).format('DD.MM.YYYY, HH:mm')}
              secondary={item.destination.locationName}
              icon={icons[item.type][1]}
              seperator
            />
            {i < data.length - 1 && <SectionSeperator />}
          </View>
        )}
      />
    </Section>
  )
}

export default SectionAllTravel

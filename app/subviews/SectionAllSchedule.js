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
import ListItemStandard from '../components/ListItemStandard'
import ListItemDay from '../components/ListItemDay'


const SectionAllSchedule = ({ data }) => {
  let currentDay = null

  return (
    <Section>
      <View style={{ marginTop: -18 }} />
      <ListManager
        items={data}
        renderItem={(item, i) => {
          const thisDay = moment(item.dateFrom).dayOfYear()
          const dateFromString = moment(item.dateFrom).format('HH:mm')
          const dateToString = item.dateTo ? moment(item.dateTo).format('HH:mm') : null

          let daySeperator = null
          if (currentDay !== thisDay) {
            currentDay = thisDay
            daySeperator = (
              <View style={{ marginLeft: -18, marginRight: -18 }}>
                <ListItemDay primary={moment(item.dateFrom).format('dddd')} secondary={moment(item.dateFrom).format('DD.MM.YYYY')} />
              </View>
            )
          }

          return (
            <View key={i}>
              {daySeperator}
              <ListItemStandard
                big
                primary={item.name}
                secondary={dateFromString + (dateToString ? ` – ${dateToString}` : '')}
              />
            </View>
          )
        }}
      />
    </Section>
  )
}

export default SectionAllSchedule

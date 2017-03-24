/**
 *
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import OGRecentData from '../containers/OGRecentData'
import Section from './Section'
import { Button, ButtonList } from './Button'
import OGTravelDate from './OGTravelDate'
import OGTravelDateList from './OGTravelDateList'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


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
      <OGTravelDateList>
        <OGTravelDate
          primary={`${name}, Zimmer ${room}`}
          secondary={`${street}, ${zip} ${town}, ${country}`}
          icon="home"
        />
      </OGTravelDateList>
      <OGTravelDateList narrow>
        <OGTravelDate
          primary={moment(dateFrom).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary="Check In"
          icon="arrow-right-bold"
        />
        <OGTravelDate
          primary={moment(dateTo).format('DD.MM.YYYY, HH:MM [Uhr]')}
          secondary="Check Out"
          icon="arrow-left-bold"
        />
      </OGTravelDateList>
      <ButtonList>
        <Button label="Mehr" />
      </ButtonList>
    </Section>
  )
}

export default OGRecentData(SectionStay)


const styles = StyleSheet.create({
  primary: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

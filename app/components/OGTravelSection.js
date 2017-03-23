/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import OGRecentData from '../containers/OGRecentData'
import Section from './Section'


const OGTravelSection = ({ recentIndex, data }) => {
  const {
    type,
    dateFrom,
    dateTo,
    origin: { locationName: from },
    destination: { locationName: to }
  } = data[recentIndex]

  const typeLocalization = {
    PLANE: "Flug"
  }

  return (
    <Section title={typeLocalization[type]}>
      
    </Section>
  )
}

export default OGRecentData(OGTravelSection)

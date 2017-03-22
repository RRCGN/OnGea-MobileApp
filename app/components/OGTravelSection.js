/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import OGRecentData from '../containers/OGRecentData'
import Section from './Section'


const OGTravelSection = ({ recentIndex, ...data }) => (
  <Section title="Reise">
    <Text>{recentIndex}</Text>
  </Section>
)

export default OGRecentData(OGTravelSection)

/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import Section from './Section'
import OGTravelDate from './OGTravelDate'
import OGTravelDateList from './OGTravelDateList'


const SectionOrganization = ({ data }) => {
  const {
    coordinatingOrganization: coordinating,
    hostOrganization: host
  } = data

  return (
    <Section title="Kontakt">
      <OGTravelDateList>
        <OGTravelDate
          primary={coordinating.name}
          secondary={coordinating.phone}
        />
        <OGTravelDate
          primary={host.name}
          secondary={host.phone}
        />
      </OGTravelDateList>
    </Section>
  )
}

export default SectionOrganization

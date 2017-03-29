/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'


const SectionOrganization = ({ data }) => {
  const {
    coordinatingOrganization: coordinating,
    hostOrganization: hosting
  } = data

  const items = [
    {
      name: coordinating.name,
      contact: coordinating.phone
    },
    {
      name: hosting.name,
      contact: hosting.phone
    }
  ]

  return (
    <Section title="Kontakt">
      <ListManager
        items={items}
        renderItem={(item, i) => (
          <ListItemStandard
            key={i}
            primary={item.name}
            secondary={item.contact}
          />
        )}
      />
    </Section>
  )
}

export default SectionOrganization

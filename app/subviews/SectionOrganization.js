/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import Section from '../components/Section'
import { List, ListItem } from '../components/List'


const SectionOrganization = ({ data }) => {
  const {
    coordinatingOrganization: coordinating,
    hostOrganization: host
  } = data

  return (
    <Section title="Kontakt">
      <List>
        <ListItem
          primary={coordinating.name}
          secondary={coordinating.phone}
        />
        <ListItem
          primary={host.name}
          secondary={host.phone}
        />
      </List>
    </Section>
  )
}

export default SectionOrganization
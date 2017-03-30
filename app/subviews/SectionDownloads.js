/**
 *
 * @flow
 */

import React from 'react'
import { View, Text } from 'react-native'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'
import filesize from 'filesize'


const SectionDownloads = ({ data }) => {
  return (
    <Section title="Dateien">
      <ListManager
        items={data}
        renderItem={(item, i) => (
          <ListItemFancy
            key={i}
            primary={item.name}
            secondary={filesize(item.size)}
            icon="download"
          />
        )}
      />
    </Section>
  )
}

export default SectionDownloads

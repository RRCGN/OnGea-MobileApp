import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'


const SectionOrganization = (props) => {
  const { coordinationOrganisation, hostOrganisation } = props.data

  const items = [
    {
      title: coordinationOrganisation.title,
      contact: coordinationOrganisation.id
    },
    {
      title: hostOrganisation.title,
      contact: hostOrganisation.id
    }
  ]

  return (
    <Section title="Contact">
      <ListManager
        items={items}
        renderItem={(item, i) => (
          <ListItemStandard
            key={i}
            primary={item.title}
            secondary={item.contact}
          />
        )}
      />
    </Section>
  )
}

SectionOrganization.propTypes = {
  data: PropTypes.object
}
export default SectionOrganization

import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Section from '../components/Section'
import ListItemStandard from '../components/ListItemStandard'

export default class SectionShortOrganization extends React.PureComponent {
  static propTypes = {
    onOrganizationPress: PropTypes.func.isRequired
  }

  handleItemPress = organization => () => {
    this.props.onOrganizationPress(organization)
  }

  render() {
    const organizations = [
      { id: 1, title: 'Roots & Routes Cologne', acronym: 'RRCGN', phone: '0177 3685187' },
      { id: 2, title: 'Roots & Routes Paris', acronym: 'RRPARIS', phone: '0177 3685187' }
    ]

    return (
      <Section title="Contact Informations">
        {organizations.map(organization => (
          <ListItemStandard
            key={organization.id}
            primary={organization.title}
            secondary={organization.acronym}
            onPress={this.handleItemPress(organization)}
          />
        ))}
      </Section>
    )
  }
}

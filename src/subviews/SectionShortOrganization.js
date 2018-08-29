import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Section from '../components/Section'
import ListItemStandard from '../components/ListItemStandard'

export default class SectionShortOrganization extends React.PureComponent {
  static propTypes = {
    organizations: PropTypes.array.isRequired,
    onOrganizationPress: PropTypes.func.isRequired
  }

  handleItemPress = organization => () => {
    this.props.onOrganizationPress(organization)
  }

  getSecondaryText = organization => {
    const text = organization.acronym

    if (organization.isHost) return `${text} – Host Organization`
    return text
  }

  render() {
    return (
      <Section title="Contact Informations">
        {this.props.organizations.map(organization => (
          <ListItemStandard
            key={organization.id}
            primary={organization.title}
            secondary={this.getSecondaryText(organization)}
            onPress={this.handleItemPress(organization)}
          />
        ))}
      </Section>
    )
  }
}

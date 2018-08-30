import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { withI18n } from '@lingui/react'

import Section from '../components/Section'
import ListItemStandard from '../components/ListItemStandard'

class SectionShortOrganization extends React.PureComponent {
  static propTypes = {
    organizations: PropTypes.array.isRequired,
    onOrganizationPress: PropTypes.func.isRequired
  }

  handleItemPress = organization => () => {
    this.props.onOrganizationPress(organization)
  }

  getSecondaryText = organization => {
    const { i18n } = this.props
    const acronym = organization.acronym

    if (organization.isHost) return acronym + ' – ' + i18n.t`Host Organization`
    return acronym
  }

  render() {
    const { i18n } = this.props

    return (
      <Section title={i18n.t`Contact Informations`}>
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

export default withI18n()(SectionShortOrganization)

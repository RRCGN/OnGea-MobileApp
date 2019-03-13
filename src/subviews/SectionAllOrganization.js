import React from 'react'
import { Modal, Text, TouchableOpacity, View, Linking } from 'react-native'
import PropTypes from 'prop-types'
import Communications from 'react-native-communications'
import { I18n } from '@lingui/react'

import Section from '../components/Section'
import ListItemFancy from '../components/ListItemFancy'

export default class SectionAllOrganization extends React.PureComponent {
  static propTypes = {
    organization: PropTypes.object.isRequired
  }

  handlePhonePress = () => {
    Communications.phonecall(this.props.organization.phone, true)
  }

  handleEmailPress = () => {
    Communications.email([this.props.organization.mail])
  }

  handleWebPress = () => {
    const url = this.props.organization.website.startsWith('http')
      ? this.props.organization.website
      : 'http://' + this.props.organization.website

    Linking.openURL(url)
  }

  render() {
    const { organization: org } = this.props

    return (
      <I18n>
        {({ i18n }) => (
          <Section title={i18n.t`Contact Informations`}>
            <ListItemFancy
              primary={org.title}
              secondary={org.acronym}
              icon="account-group"
            />
            <ListItemFancy
              primary={org.mail}
              secondary={i18n.t`Email`}
              icon="email"
              onPress={this.handleEmailPress}
            />
            <ListItemFancy
              primary={org.phone}
              secondary={i18n.t`Phone`}
              icon="phone"
              onPress={this.handlePhonePress}
            />
            <ListItemFancy
              primary={org.website}
              secondary={i18n.t`Website`}
              icon="web"
              onPress={this.handleWebPress}
            />
            <ListItemFancy
              primary={`${org.street}, ${org.postcode} ${org.town}`}
              secondary={org.country}
              icon="map-marker-radius"
            />
          </Section>
        )}
      </I18n>
    )
  }
}

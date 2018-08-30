import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Communications from 'react-native-communications'

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
    Communications.web('http://' + this.props.organization.website)
  }

  render() {
    const { organization: org } = this.props

    return (
      <Section title="Contact Informations">
        <ListItemFancy
          primary={org.title}
          secondary={org.acronym}
          icon="account-group"
        />
        <ListItemFancy
          primary={org.mail}
          secondary="Mail"
          icon="email"
          onPress={this.handleEmailPress}
        />
        <ListItemFancy
          primary={org.phone}
          secondary="Phone"
          icon="phone"
          onPress={this.handlePhonePress}
        />
        <ListItemFancy
          primary={org.website}
          secondary="Website"
          icon="web"
          onPress={this.handleWebPress}
        />
        <ListItemFancy
          primary={`${org.street}, ${org.postcode} ${org.town}`}
          secondary={org.country}
          icon="map-marker-radius"
        />
      </Section>
    )
  }
}

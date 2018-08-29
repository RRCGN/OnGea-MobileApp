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

  render() {
    const { organization } = this.props

    return (
      <Section title="Contact Informations">
        <ListItemFancy
          primary={organization.title}
          secondary="Organization"
          icon="account-group"
        />
        <ListItemFancy
          primary={organization.phone}
          secondary="Phone"
          icon="phone"
          onPress={this.handlePhonePress}
        />
      </Section>
    )
  }
}

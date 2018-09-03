import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import { withI18n } from '@lingui/react'

import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemFancy from '../components/ListItemFancy'

export class SectionShortTravel extends React.PureComponent {
  render() {
    const {
      dateFrom,
      dateTo,
      toCountry,
      toCity,
      fromCountry,
      fromCity,
      i18n
    } = this.props

    return (
      <Section title={i18n.t`Travel`}>
        <ListItemFancy
          primary={fromCity}
          secondary={`${dateFrom} ${fromCountry || ''}`}
          icon="home-variant"
          isLinked
        />
        <ListItemFancy
          primary={toCity}
          secondary={`${dateTo} ${toCountry || ''}`}
          icon="account-group"
        />
      </Section>
    )
  }
}

export default withI18n()(SectionShortTravel)

import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import { withI18n } from '@lingui/react'

import Section from '../components/Section'
import { Row } from '../components/Layout'
import ListManager from '../components/ListManager'
import ListItemStandard from '../components/ListItemStandard'

export class SectionShortTravel extends React.PureComponent {
  handleItemPress = travel => () => {
    this.props.onMorePress(travel)
  }

  render() {
    const { travels, i18n } = this.props

    return (
      <Section title={i18n.t`Travel`}>
        {travels.map((travel, i) => {
          const secondary =
            travel.departureCustomLocation +
            '  ►  ' +
            travel.arrivalCustomLocation

          return (
            <ListItemStandard
              key={travel.id}
              primary={travel.title}
              secondary={secondary}
              onPress={this.handleItemPress(travel)}
            />
          )
        })}
      </Section>
    )
  }
}

export default withI18n()(SectionShortTravel)

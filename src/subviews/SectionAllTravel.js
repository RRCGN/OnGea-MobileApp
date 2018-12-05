import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { I18n } from '@lingui/react'

import Section from '../components/Section'
import ListItemFancy from '../components/ListItemFancy'

export default class SectionAllTravel extends React.PureComponent {
  static propTypes = {
    travel: PropTypes.object.isRequired
  }

  render() {
    const { travel } = this.props

    return (
      <I18n>
        {({ i18n }) => (
          <Section title={i18n.t`Travel`}>
            <ListItemFancy
              primary={travel.title}
              icon="information-outline"
            />
            {!!travel.informationForTravellers && <ListItemFancy
              primary={travel.informationForTravellers}
              icon="comment-text-outline"
            />}
            <ListItemFancy
              primary={travel.departureCustomLocation}
              secondary={travel.departureDate + ' ' + travel.departureTime}
              icon="airplane-takeoff"
            />
            <ListItemFancy
              primary={travel.arrivalCustomLocation}
              secondary={travel.arrivalDate + ' ' + travel.arrivalTime}
              icon="airplane-landing"
            />
          </Section>
        )}
      </I18n>
    )
  }
}

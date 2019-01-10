import React from 'react'
import { withI18n } from '@lingui/react'
import moment from 'moment'

import Section from '../components/Section'
import EventItem from '../components/EventItem'
import ListItemStandard from '../components/ListItemStandard'

export class SectionShortSchedule extends React.PureComponent {
  handleMorePress = () => {
    this.props.onMorePress(this.props.events)
  }

  render() {
    const { i18n, events } = this.props

    const nextEvent = events.filter(event => {
      return moment(event.startDate + ' ' + event.startTime).isAfter(moment())
    })[0]

    return (
      <Section title={i18n.t`Events`}>
        <EventItem
          {...nextEvent}
          onPress={this.props.onEventPress(nextEvent)}
        />
        <ListItemStandard
          primary={i18n.t`Show full schedule`}
          secondary={i18n.t`View all ${events.length} events`}
          onPress={this.handleMorePress}
        />
      </Section>
    )
  }
}

export default withI18n()(SectionShortSchedule)

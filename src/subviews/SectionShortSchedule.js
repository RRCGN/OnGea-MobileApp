import React from 'react'
import { withI18n } from '@lingui/react'

import Section from '../components/Section'
import EventItem from '../components/EventItem'
import ListItemStandard from '../components/ListItemStandard'

export class SectionShortSchedule extends React.PureComponent {
  handleMorePress = () => {
    this.props.onMorePress()
  }

  render() {
    const { i18n, events } = this.props

    return (
      <Section title={i18n.t`Events`}>
        <EventItem {...events[0]} />
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

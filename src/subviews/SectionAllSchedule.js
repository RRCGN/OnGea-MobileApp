import React from 'react'
import EventItem from '../components/EventItem'
import Section from '../components/Section'

export default class SectionAllSchedule extends React.PureComponent {
  render() {
    const { i18n, events } = this.props

    return (
      <Section>
        {events.map(event => (
          <EventItem withBorder key={event.id} {...event} />
        ))}
      </Section>
    )
  }
}

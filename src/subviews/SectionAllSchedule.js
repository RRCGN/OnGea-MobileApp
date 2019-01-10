import React from 'react'
import moment from 'moment'
import EventItem from '../components/EventItem'
import Section from '../components/Section'

export default class SectionAllSchedule extends React.PureComponent {
  render() {
    const { i18n, events, onEventPress } = this.props
    const days = []

    let curDay = 0
    events.forEach((event, i) => {
      days[curDay] = days[curDay] || []
      const eventBefore = events[i - 1]

      if (!eventBefore) {
        days[curDay].push(event)
      } else if (moment(event.startDate).isSame(eventBefore.startDate)) {
        days[curDay].push(event)
      } else {
        curDay++
        days[curDay] = []
        days[curDay].push(event)
      }
    })

    return (
      <React.Fragment>
        {days.map(eventsOnDay => (
          <Section
            title={moment(eventsOnDay[0].startDate).format('dddd, YYYY-MM-DD')}
            key={eventsOnDay[0].startDate}
          >
            {eventsOnDay.map(event => (
              <EventItem
                key={event.id}
                {...event}
                onPress={onEventPress(event)}
              />
            ))}
          </Section>
        ))}
      </React.Fragment>
    )
  }
}

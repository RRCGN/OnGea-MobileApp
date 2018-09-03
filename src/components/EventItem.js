import React from 'react'
import PropTypes from 'prop-types'
import { withI18n } from '@lingui/react'

import ListItemStandard from './ListItemStandard'

class EventItem extends React.PureComponent {
  getDateTime = () => {
    const { startDate, startTime, endDate, endTime } = this.props
    let str = ''

    if (startDate) str += startDate + ' '
    if (startTime) str += startTime
    if (endTime || endDate) str += ' – '
    if (endDate) str += endDate
    if (endTime) str += ' ' + endTime
    return str
  }

  getPlaceName = () => {
    const { place } = this.props
    if (typeof place !== 'object') return false

    return place.name
  }

  getAdditional = () => {
    const { repeatEvent, i18n } = this.props

    return [
      !!repeatEvent && i18n.t`Repeating Event`
    ].filter(add => !!add)
  }

  render() {
    const { title, category, withBorder } = this.props
    const datetime = this.getDateTime()
    const additional = this.getAdditional()
    const placeName = this.getPlaceName()
    const secondary = placeName
      ? datetime + ', ' + placeName
      : datetime

    return (
      <ListItemStandard
        primary={`${title} (${category})`}
        secondary={secondary}
        additional={additional}
        withBorder={withBorder}
      />
    )
  }
}

export default withI18n()(EventItem)

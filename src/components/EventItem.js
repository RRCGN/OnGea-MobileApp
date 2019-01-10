import React from 'react'
import PropTypes from 'prop-types'
import { withI18n } from '@lingui/react'

import { i18n } from '../i18n'
import ListItemFancy from './ListItemFancy'

class EventItem extends React.PureComponent {
  getDateTime = () => {
    const { startTime, endTime } = this.props
    let str = ''
    if (startTime) str += startTime
    if (endTime) str += ' - ' + endTime
    return str
  }

  getPlaceName = () => {
    const { place } = this.props
    if (typeof place !== 'object') return false

    return place.name
  }

  getIcon = () => {
    const { category } = this.props

    switch (category) {
    case 'meal':
      return 'food-fork-drink'
    case 'program':
      return 'account-group'
    case 'overnight_stay':
      return 'bed-empty'
    case 'free_time':
      return 'beach'
    default:
      return 'bookmark'
    }
  }

  render() {
    const { title, startTime, startDate, endTime, showDate } = this.props
    const datetime = this.getDateTime()
    const placeName = this.getPlaceName()

    const icon = this.getIcon()
    let primary = startTime + ': ' + title
    const until = i18n.t`date-to` + ' ' + endTime
    const secondary = placeName ? until + ', ' + placeName : until

    if (showDate) primary = startDate + ' ' + primary

    return (
      <ListItemFancy
        icon={icon}
        primary={primary}
        secondary={secondary}
        onPress={this.props.onPress}
      />
    )
  }
}

export default withI18n()(EventItem)

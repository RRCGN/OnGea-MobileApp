/**
 *
 * @flow
 */

import React, { Component } from 'react'
import DateUtils from '../utils/date-utils'


export default function OGRecentData(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)

      const { index } = DateUtils.getMostRecent(props.data)
      this.state = {
        mostRecentDateIndex: index
      }
    }

    render() {
      const { mostRecentDateIndex } = this.state
      return (
        <WrappedComponent
          recentIndex={mostRecentDateIndex}
          {...this.props}
        />
      )
    }
  }
}

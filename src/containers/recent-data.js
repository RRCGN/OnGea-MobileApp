/**
 *
 * @flow
 */

import React, { Component } from 'react'
import DateUtils from '../utils/date-utils'


export type DataDate = {
  data: any
}

export default function FindMostRecentData(
  WrappedComponent: ReactClass<DataDate>
): ReactClass<{}> {
  return class extends Component {
    state: { mostRecentDateIndex: number }

    constructor(props: DataDate) {
      super(props)

      const { index } = DateUtils.getMostRecent(props.data)
      this.state = { mostRecentDateIndex: index }
    }

    render() {
      const { mostRecentDateIndex } = this.state
      return (
        <WrappedComponent recentIndex={mostRecentDateIndex} {...this.props} />
      )
    }
  }
}

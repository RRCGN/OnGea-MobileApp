/**
 *
 * @flow
 */

import React, { Component } from 'react'
import DateUtils from '../utils/date-utils'


export type OGDataProps = {
  data: any
}

export default function OGRecentData(
  WrappedComponent: ReactClass<OGDataProps>
): ReactClass<{}> {
  return class extends Component {
    state: { mostRecentDateIndex: number }

    constructor(props: OGDataProps) {
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

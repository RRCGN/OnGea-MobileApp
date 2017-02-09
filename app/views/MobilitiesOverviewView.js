/**
 * Mobilities Overview
 */

import React, { Component } from 'react'
import MobilitiesListView from './MobilitiesListView'

export default class MobilitiesOverviewView extends Component {
  static navigationOptions = {
    title: 'Meine Mobilities'
  }

  render() {
    return <MobilitiesListView {...this.props} />
  }
}

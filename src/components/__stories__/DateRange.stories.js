import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'

import DateRange from '../DateRange'


export default storiesOf('DateRange', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Single Date, dark', () => (
    <DateRange from="2017-04-10T02:00:00+02:00" />
  ))
  .add('Date Range, dark', () => (
    <DateRange from="2017-04-10T02:00:00+02:00" to="2017-04-16T02:00:00+02:00" />
  ))
  .add('Single Date, light', () => (
    <DateRange from="2017-04-10T02:00:00+02:00" light />
  ))
  .add('Date Range, light', () => (
    <DateRange from="2017-04-10T02:00:00+02:00" to="2017-04-16T02:00:00+02:00" light />
  ))

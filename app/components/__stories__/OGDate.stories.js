import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'

import OGDate from '../OGDate'
import OGDateList from '../OGDateList'


export default storiesOf('OGDate', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Date', () => (
    <OGDate type="from" date="2017-04-10T02:00:00+02:00" />
  ))
  .add('Date List', () => (
    <OGDateList>
      <OGDate type="from" date="2024-04-10T12:00:00+02:00" />
      <OGDate type="to" date="2024-04-16T12:00:00+02:00" />
    </OGDateList>
  ))

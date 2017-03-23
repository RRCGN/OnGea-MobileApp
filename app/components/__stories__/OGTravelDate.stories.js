import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'

import OGTravelDate from '../OGTravelDate'
import OGTravelDateList from '../OGTravelDateList'


export default storiesOf('OGTravelDate', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#E0E0E0', padding: 30 }}>
      {story()}
    </View>
  ))
  .add('Normal', () => (
    <OGTravelDate
      location="Köln"
      time="10.04.2017, 12:52 Uhr"
      icon="airplane-takeoff"
    />
  ))
  .add('List', () => (
    <OGTravelDateList>
      <OGTravelDate
        location="Köln"
        time="10.04.2017, 12:52 Uhr"
        icon="airplane-takeoff"
      />
      <OGTravelDate
        location="Köln"
        time="10.04.2017, 13:52 Uhr"
        icon="airplane-landing"
      />
    </OGTravelDateList>
  ))

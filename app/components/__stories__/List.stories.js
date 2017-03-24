import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'

import { List, ListItem } from '../List'

export default storiesOf('List', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', padding: 30 }}>
      {story()}
    </View>
  ))
  .add('List Item', () => (
    <ListItem
      primary="10.04.2017, 12:52 Uhr"
      secondary="Köln"
      icon="airplane-takeoff"
    />
  ))
  .add('List Item, no icon', () => (
    <ListItem
      secondary="Köln"
      primary="10.04.2017, 12:52 Uhr"
    />
  ))
  .add('List', () => (
    <List>
      <ListItem
        primary="10.04.2017, 12:52 Uhr"
        secondary="Köln"
        icon="airplane-takeoff"
      />
      <ListItem
        primary="10.04.2017, 13:52 Uhr"
        secondary="Köln"
        icon="airplane-landing"
      />
    </List>
  ))
  .add('List, Travel', () => (
    <List travel>
      <ListItem
        primary="10.04.2017, 12:52 Uhr"
        secondary="Köln"
        icon="airplane-takeoff"
      />
      <ListItem
        primary="10.04.2017, 13:52 Uhr"
        secondary="Köln"
        icon="airplane-landing"
      />
    </List>
  ))

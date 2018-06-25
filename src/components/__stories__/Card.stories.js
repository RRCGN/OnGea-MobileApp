import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '@storybook/react-native'

import { Card, CardSegment, CardTitle } from '../Card'


export default storiesOf('Card', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Card View', () => (
    <Card>
      <Text>Lorem ipsum</Text>
    </Card>
  ))
  .add('Card Segment, small', () => (
    <Card>
      <CardSegment small>
        <Text>Lorem ipsum</Text>
      </CardSegment>
    </Card>
  ))
  .add('Card Segment, small, border', () => (
    <Card>
      <CardSegment small hasBorderBottom>
        <Text>Lorem ipsum</Text>
      </CardSegment>
      <CardSegment small>
        <Text>Lorem ipsum</Text>
      </CardSegment>
    </Card>
  ))
  .add('Card Segment, big', () => (
    <Card>
      <CardSegment big>
        <Text>Lorem ipsum</Text>
      </CardSegment>
    </Card>
  ))
  .add('Card Segment, big, border', () => (
    <Card>
      <CardSegment big hasBorderBottom>
        <Text>Lorem ipsum</Text>
      </CardSegment>
      <CardSegment big>
        <Text>Lorem ipsum</Text>
      </CardSegment>
    </Card>
  ))
  .add('Card Title', () => (
    <Card>
      <CardTitle
        image={{ uri: 'http://placehold.it/1200x900' }}
        title="Card Title"
        onPress={action('Card Press')}
      />
    </Card>
  ))

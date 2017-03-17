import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'

import CardTitle from '../CardTitle'


export default storiesOf('CardTitle', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {story()}
    </View>
  ))
  .add('Normal', () => (
    <CardTitle
      image={{ uri: 'http://placehold.it/1200x900' }}
      title="Card Title"
      onPress={action('Card Press')}
    />
  ))

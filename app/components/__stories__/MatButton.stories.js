import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import MatButton from '../MatButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default storiesOf('MatButton', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Flat', () => (
    <MatButton label="Button" />
  ))
  .add('Flat w/ custom color', () => (
    <MatButton label="Button" color="red" />
  ))
  .add('Raised', () => (
    <MatButton backgroundColor="#00796B" color="white" label="Button" />
  ))

import React from 'react'
import { View } from 'react-native'
import { storiesOf, action } from '@kadira/react-native-storybook'
import OGTextButton from '../OGTextButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default storiesOf('OGTextButton', module)
  .addDecorator(story => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0' }}>
      {story()}
    </View>
  ))
  .add('Flat', () => (
    <OGTextButton label="Button" />
  ))
  .add('Flat w/ custom color', () => (
    <OGTextButton label="Button" color="red" />
  ))
  .add('Raised', () => (
    <OGTextButton backgroundColor="#00796B" color="white" label="Button" />
  ))
